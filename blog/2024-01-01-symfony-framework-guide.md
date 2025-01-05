---
slug: symfony-intro
title: Symfony Framework
authors: muneer
tags: [Symfony]
---


## Table of Contents
- [Introduction](#introduction)
- [Top 10 Features](#top-10-features)
- [Framework Architecture](#framework-architecture)
- [Practical Examples](#practical-examples)
- [Best Practices](#best-practices)

## Introduction
Symfony is a PHP framework for web applications that follows the MVC pattern. It's built with components that can be used independently and provides a robust foundation for complex applications.

## Top 10 Features

### 1. Dependency Injection Container
The DI container manages services and dependencies efficiently.

```php
// services.yaml
services:
    App\Service\EmailService:
        arguments:
            $mailer: '@mailer'
            $logger: '@logger'

// Using the service
class EmailController
{
    public function __construct(
        private readonly EmailService $emailService
    ) {}

    #[Route('/send-email', name: 'send_email')]
    public function send(): Response
    {
        $this->emailService->sendWelcomeEmail();
        return new Response('Email sent!');
    }
}
```

### 2. Routing System
Flexible routing with attributes, annotations, or YAML configuration.

```php
// Using attributes
#[Route('/blog/{slug}', name: 'blog_show')]
public function show(string $slug): Response
{
    // Fetch blog post using slug
    return $this->render('blog/show.html.twig', [
        'slug' => $slug
    ]);
}

// Using YAML
# config/routes.yaml
blog_list:
    path: /blog
    controller: App\Controller\BlogController::list
```

### 3. Form Component
Powerful form creation and handling system.

```php
class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class)
            ->add('email', EmailType::class)
            ->add('message', TextareaType::class)
            ->add('submit', SubmitType::class);
    }
}

// In controller
public function contact(Request $request): Response
{
    $form = $this->createForm(ContactType::class);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $data = $form->getData();
        // Process form data
        return $this->redirectToRoute('contact_success');
    }

    return $this->render('contact/form.html.twig', [
        'form' => $form->createView()
    ]);
}
```

### 4. Twig Template Engine
Powerful and flexible template system.

```twig
{# templates/base.html.twig #}
<!DOCTYPE html>
<html>
    <head>
        <title>{% block title %}Welcome!{% endblock %}</title>
        {% block stylesheets %}{% endblock %}
    </head>
    <body>
        {% block body %}{% endblock %}
        {% block javascripts %}{% endblock %}
    </body>
</html>

{# templates/blog/show.html.twig #}
{% extends 'base.html.twig' %}

{% block title %}{{ post.title }}{% endblock %}

{% block body %}
    <h1>{{ post.title }}</h1>
    <div class="content">
        {{ post.content|markdown }}
    </div>
{% endblock %}
```

### 5. Security Component
Comprehensive security system with authentication and authorization.

```php
// security.yaml
security:
    providers:
        app_user_provider:
            entity:
                class: App\Entity\User
                property: email

    firewalls:
        main:
            lazy: true
            provider: app_user_provider
            form_login:
                login_path: app_login
                check_path: app_login
            logout:
                path: app_logout

// SecurityController
#[Route('/login', name: 'app_login')]
public function login(AuthenticationUtils $authenticationUtils): Response
{
    $error = $authenticationUtils->getLastAuthenticationError();
    $lastUsername = $authenticationUtils->getLastUsername();

    return $this->render('security/login.html.twig', [
        'last_username' => $lastUsername,
        'error' => $error,
    ]);
}
```

### 6. Doctrine ORM Integration
Seamless database interaction with Doctrine ORM.

```php
#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?float $price = null;
}

// Using in controller
class ProductController extends AbstractController
{
    #[Route('/products', name: 'product_list')]
    public function list(ProductRepository $repository): Response
    {
        $products = $repository->findAll();
        return $this->render('product/list.html.twig', [
            'products' => $products
        ]);
    }
}
```

### 7. Console Component
Command-line interface for tasks and commands.

```php
#[AsCommand(
    name: 'app:create-user',
    description: 'Creates a new user'
)]
class CreateUserCommand extends Command
{
    public function __construct(
        private readonly UserManager $userManager,
        private readonly ValidatorInterface $validator
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // Command logic
        $this->userManager->createUser($input->getArgument('email'));
        return Command::SUCCESS;
    }
}
```

### 8. Event Dispatcher
Powerful event system for application-wide communication.

```php
class UserRegisteredEvent extends Event
{
    public function __construct(private readonly User $user)
    {}

    public function getUser(): User
    {
        return $this->user;
    }
}

class EmailNotifier implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            UserRegisteredEvent::class => 'onUserRegistered'
        ];
    }

    public function onUserRegistered(UserRegisteredEvent $event): void
    {
        // Send welcome email
    }
}
```

### 9. Cache Component
Advanced caching system with multiple backends.

```php
class ProductController
{
    public function __construct(
        private readonly CacheInterface $cache
    ) {}

    #[Route('/product/{id}', name: 'product_show')]
    public function show(int $id): Response
    {
        $cacheKey = 'product_' . $id;

        return $this->cache->get($cacheKey, function(ItemInterface $item) use ($id) {
            $item->expiresAfter(3600);
            return $this->productRepository->find($id);
        });
    }
}
```

### 10. HTTP Foundation
Object-oriented layer for HTTP interaction.

```php
class ApiController extends AbstractController
{
    #[Route('/api/data', name: 'api_data', methods: ['POST'])]
    public function handleData(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        return $this->json([
            'status' => 'success',
            'data' => $data
        ]);
    }
}
```

## Framework Architecture

### Directory Structure
```
my-project/
├── config/
├── public/
├── src/
│   ├── Controller/
│   ├── Entity/
│   ├── Repository/
│   ├── Service/
│   └── Kernel.php
├── templates/
├── tests/
├── translations/
├── var/
└── vendor/
```

### MVC Pattern Implementation
```php
// Entity (Model)
#[ORM\Entity]
class Article
{
    #[ORM\Column(type: 'string')]
    private string $title;

    #[ORM\Column(type: 'text')]
    private string $content;
}

// Controller
class ArticleController extends AbstractController
{
    #[Route('/article/{id}', name: 'article_show')]
    public function show(Article $article): Response
    {
        return $this->render('article/show.html.twig', [
            'article' => $article
        ]);
    }
}

// View (Twig template)
{# templates/article/show.html.twig #}
{% extends 'base.html.twig' %}

{% block body %}
    <h1>{{ article.title }}</h1>
    <div>{{ article.content }}</div>
{% endblock %}
```

## Best Practices

### 1. Service Organization
```php
// Organize services by domain
namespace App\Service\Payment;

class StripeService
{
    public function __construct(
        private readonly LoggerInterface $logger,
        private readonly string $apiKey
    ) {}
}
```

### 2. Controller Best Practices
```php
class ProductController extends AbstractController
{
    public function __construct(
        private readonly ProductService $productService,
        private readonly FormFactoryInterface $formFactory
    ) {}

    #[Route('/product/new', name: 'product_new')]
    public function new(Request $request): Response
    {
        // Thin controller, business logic in service
        $product = new Product();
        $form = $this->formFactory->create(ProductType::class, $product);

        if ($this->productService->handleNewProduct($form, $request)) {
            return $this->redirectToRoute('product_list');
        }

        return $this->render('product/new.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
```

### 3. Configuration Management
```yaml
# config/packages/app.yaml
parameters:
    app.feature_flags:
        new_ui: true
        api_version: 2

services:
    App\Service\FeatureFlag:
        arguments:
            $flags: '%app.feature_flags%'
```

## Conclusion
Symfony provides a robust foundation for building web applications with its comprehensive feature set and well-organized architecture. The framework's emphasis on best practices, reusability, and maintainability makes it an excellent choice for complex applications.

Key takeaways:
- Strong dependency injection system
- Comprehensive security features
- Powerful routing and form handling
- Excellent database integration
- Extensive ecosystem of bundles and components
