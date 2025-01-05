---
slug: dependency-injection
title: Dependency Injection in Symfony
authors: muneer
tags: [DDD, Symfony]
---
## Table of Contents
- [Understanding Dependency Injection](#understanding-dependency-injection)
- [Core Concepts](#core-concepts)
- [Types of Dependency Injection](#types-of-dependency-injection)
- [Symfony Service Container](#symfony-service-container)
- [Practical Examples](#practical-examples)
- [Best Practices](#best-practices)
- [Advanced Concepts](#advanced-concepts)

## Understanding Dependency Injection

### What is Dependency Injection?
Dependency Injection (DI) is a design pattern that implements Inversion of Control (IoC) for resolving dependencies. Instead of creating objects directly within a class, dependencies are "injected" into the class from the outside.

### Benefits
- Improved modularity
- Easier unit testing
- More maintainable code
- Reduced coupling between classes
- Better separation of concerns
- Enhanced code reusability

## Core Concepts

### 1. Service
A service is any PHP object that performs a specific task. Examples include:
- Database connections
- Mailers
- Logger services
- Custom business logic classes

### 2. Service Container
The service container, also known as DI container, is responsible for:
- Managing service instantiation
- Resolving dependencies
- Managing service lifecycle

### 3. Configuration
Services are configured using:
- YAML files
- XML files
- PHP configuration
- Attributes/Annotations

## Types of Dependency Injection

### 1. Constructor Injection
```php
// Most recommended approach
class UserService
{
    private EmailService $emailService;
    private LoggerInterface $logger;

    public function __construct(
        EmailService $emailService,
        LoggerInterface $logger
    ) {
        $this->emailService = $emailService;
        $this->logger = $logger;
    }
}
```

### 2. Setter Injection
```php
class UserService
{
    private EmailService $emailService;

    public function setEmailService(EmailService $emailService): void
    {
        $this->emailService = $emailService;
    }
}
```

### 3. Property Injection
```php
class UserService
{
    #[Inject]
    private EmailService $emailService;
}
```

## Symfony Service Container

### Basic Service Configuration (services.yaml)
```yaml
services:
    # Default configuration
    _defaults:
        autowire: true
        autoconfigure: true
        public: false

    # Registers services in src/ directory
    App\:
        resource: '../src/*'
        exclude: '../src/{DependencyInjection,Entity,Tests,Kernel.php}'
```

### Manual Service Configuration
```yaml
services:
    App\Service\CustomService:
        arguments:
            $apiKey: '%env(API_KEY)%'
            $logger: '@logger'
        calls:
            - setMailer: ['@mailer']
        tags: ['app.custom_service']
```

## Practical Examples

### 1. Basic Service Class
```php
namespace App\Service;

class NewsletterManager
{
    public function __construct(
        private readonly MailerInterface $mailer,
        private readonly LoggerInterface $logger,
        private readonly string $sender
    ) {}

    public function send(string $subject, string $content, array $recipients): void
    {
        try {
            $email = (new Email())
                ->from($this->sender)
                ->subject($subject)
                ->text($content);

            foreach ($recipients as $recipient) {
                $email->addTo($recipient);
            }

            $this->mailer->send($email);
            $this->logger->info('Newsletter sent successfully');
        } catch (\Exception $e) {
            $this->logger->error('Failed to send newsletter: ' . $e->getMessage());
            throw $e;
        }
    }
}
```

### 2. Controller Using Services
```php
namespace App\Controller;

use App\Service\NewsletterManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class NewsletterController extends AbstractController
{
    public function __construct(
        private readonly NewsletterManager $newsletterManager
    ) {}

    #[Route('/send-newsletter', name: 'send_newsletter')]
    public function send(): Response
    {
        $this->newsletterManager->send(
            'Weekly Newsletter',
            'Newsletter content...',
            ['user1@example.com', 'user2@example.com']
        );

        return new Response('Newsletter sent!');
    }
}
```

### 3. Service with Configuration
```php
namespace App\Service;

class PaymentProcessor
{
    public function __construct(
        private readonly string $apiKey,
        private readonly bool $testMode,
        private readonly LoggerInterface $logger
    ) {}

    public function processPayment(float $amount, string $currency): bool
    {
        $this->logger->info('Processing payment', [
            'amount' => $amount,
            'currency' => $currency,
            'mode' => $this->testMode ? 'test' : 'live'
        ]);

        // Payment processing logic...
        return true;
    }
}
```

Configuration in `services.yaml`:
```yaml
services:
    App\Service\PaymentProcessor:
        arguments:
            $apiKey: '%env(PAYMENT_API_KEY)%'
            $testMode: '%env(bool:PAYMENT_TEST_MODE)%'
```

## Best Practices

### 1. Constructor Injection
- Prefer constructor injection over other types
- Makes dependencies explicit
- Ensures required dependencies are provided

### 2. Interface Injection
```php
interface MessageSenderInterface
{
    public function send(string $message): void;
}

class EmailSender implements MessageSenderInterface
{
    public function send(string $message): void
    {
        // Send email implementation
    }
}

class SMSSender implements MessageSenderInterface
{
    public function send(string $message): void
    {
        // Send SMS implementation
    }
}

class NotificationService
{
    public function __construct(
        private readonly MessageSenderInterface $sender
    ) {}

    public function notify(string $message): void
    {
        $this->sender->send($message);
    }
}
```

### 3. Service Configuration
- Use autowiring when possible
- Configure services as private by default
- Use interfaces for type-hinting
- Use environment variables for configuration

## Advanced Concepts

### 1. Tagged Services
```php
interface HandlerInterface
{
    public function handle(mixed $data): void;
}

#[AsTaggedItem('app.handler')]
class LogHandler implements HandlerInterface
{
    public function handle(mixed $data): void
    {
        // Log handling logic
    }
}

class HandlerManager
{
    /**
     * @param iterable<HandlerInterface> $handlers
     */
    public function __construct(
        #[TaggedIterator('app.handler')]
        private readonly iterable $handlers
    ) {}

    public function process(mixed $data): void
    {
        foreach ($this->handlers as $handler) {
            $handler->handle($data);
        }
    }
}
```

### 2. Factory Services
```php
namespace App\Factory;

class PaymentProcessorFactory
{
    public function __construct(
        private readonly LoggerInterface $logger,
        private readonly string $apiKey
    ) {}

    public function create(string $type): PaymentProcessorInterface
    {
        return match ($type) {
            'stripe' => new StripeProcessor($this->apiKey, $this->logger),
            'paypal' => new PayPalProcessor($this->apiKey, $this->logger),
            default => throw new \InvalidArgumentException('Invalid processor type')
        };
    }
}
```

### 3. Compiler Passes
```php
namespace App\DependencyInjection;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class HandlerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container): void
    {
        if (!$container->has(HandlerManager::class)) {
            return;
        }

        $definition = $container->findDefinition(HandlerManager::class);
        $handlers = [];

        foreach ($container->findTaggedServiceIds('app.handler') as $id => $tags) {
            $handlers[] = new Reference($id);
        }

        $definition->setArgument('$handlers', $handlers);
    }
}
```

## Common Pitfalls and Solutions

### 1. Circular Dependencies
- Avoid circular dependencies between services
- Use service locator pattern if necessary
- Consider redesigning the architecture

### 2. Service Scope
```php
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;

#[Autoconfigure(tags: ['controller.service_arguments'])]
class ScopedService implements ServiceSubscriberInterface
{
    public static function getSubscribedServices(): array
    {
        return [
            'request_stack' => RequestStack::class,
        ];
    }
}
```

### 3. Performance Optimization
- Use compiled container in production
- Configure service sharing appropriately
- Use lazy loading for heavy services
```yaml
services:
    App\Service\HeavyService:
        lazy: true
```

## Testing with Dependency Injection

### 1. Unit Testing
```php
namespace App\Tests\Service;

use PHPUnit\Framework\TestCase;

class NewsletterManagerTest extends TestCase
{
    private NewsletterManager $manager;
    private MockObject $mailer;
    private MockObject $logger;

    protected function setUp(): void
    {
        $this->mailer = $this->createMock(MailerInterface::class);
        $this->logger = $this->createMock(LoggerInterface::class);
        $this->manager = new NewsletterManager(
            $this->mailer,
            $this->logger,
            'sender@example.com'
        );
    }

    public function testSendNewsletter(): void
    {
        $this->mailer
            ->expects($this->once())
            ->method('send');

        $this->manager->send(
            'Test Subject',
            'Test Content',
            ['recipient@example.com']
        );
    }
}
```

### 2. Integration Testing
```php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class NewsletterControllerTest extends WebTestCase
{
    public function testSendNewsletter(): void
    {
        $client = static::createClient();

        $client->request('GET', '/send-newsletter');

        $this->assertResponseIsSuccessful();
    }
}
```

## Conclusion
Dependency Injection in Symfony provides a robust foundation for building maintainable and testable applications. By following the principles and practices outlined in this guide, you can create more modular and flexible code that's easier to maintain and test.

Remember to:
- Use constructor injection when possible
- Leverage autowiring for simple cases
- Configure services explicitly when needed
- Follow Symfony's best practices
- Write tests for your services
