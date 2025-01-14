---
slug: domain-driven-design
title: Domain driven design
authors: muneer
tags: [DDD, Symfony]
---
# Domain-Driven Design (DDD) Approach for Product and Group Management in Symfony

This document explains how to design and implement a **Product** and **Group** relationship using the principles of **Domain-Driven Design (DDD)** in a Symfony application. The example demonstrates creating a `Product` object while adhering to DDD principles.

---

## **Key DDD Concepts**

### **1. Aggregate Root**
- The `Group` entity is the **Aggregate Root** in this scenario.
- A `Product` is part of the `Group` aggregate and cannot exist independently.
- All operations on `Product` objects must go through the `Group` entity.

### **2. Encapsulation of Logic**
- Business rules for managing `Product` objects are encapsulated within the `Group` entity.
- Direct instantiation of `Product` is not allowed outside the `Group` context.

### **3. Value Objects (Optional)**
- Value objects can be used for attributes like `Price` to encapsulate validation and logic.

---

## **Implementation Steps**

### **1. Group Entity**
The `Group` entity is responsible for managing its associated `Product` objects.

```php
<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Group
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'group', targetEntity: Product::class, cascade: ['persist', 'remove'])]
    private Collection $products;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(string $name, float $price, string $description): Product
    {
        $product = new Product($this, $name, $price, $description);
        $this->products->add($product);

        return $product;
    }
}
```

### **2. Product Entity**
The `Product` entity is designed to ensure it is always created within the context of a `Group`.

```php
<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: 'float')]
    private ?float $price = null;

    #[ORM\Column(type: 'text')]
    private ?string $description = null;

    #[ORM\ManyToOne(targetEntity: Group::class, inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Group $group = null;

    public function __construct(Group $group, string $name, float $price, string $description)
    {
        $this->group = $group;
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function getGroup(): ?Group
    {
        return $this->group;
    }
}
```

### **3. Service Layer for Product Creation**
All operations involving domain logic should be handled in a service or application layer.

```php
use App\Entity\Group;
use Doctrine\ORM\EntityManagerInterface;

class ProductService
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createProductForGroup(int $groupId, string $name, float $price, string $description): void
    {
        // Fetch the Group
        $groupRepository = $this->entityManager->getRepository(Group::class);
        $group = $groupRepository->find($groupId);

        if (!$group) {
            throw new \DomainException('Group not found');
        }

        // Add Product via Group
        $group->addProduct($name, $price, $description);

        // Persist changes
        $this->entityManager->persist($group); // Products are persisted via cascade
        $this->entityManager->flush();
    }
}
```

### **4. Advantages of This Design**
- **Encapsulation**: Business logic for creating `Product` objects is centralized in the `Group` entity.
- **Aggregate Consistency**: Ensures `Product` objects are always created within a valid `Group`.
- **Validation**: Business rules for `Product` creation can be enforced in the `addProduct` method of the `Group` entity.

---

## **Example Usage**

```php
$productService = new ProductService($entityManager);
$productService->createProductForGroup(1, 'Sample Product', 100.0, 'Sample Description');
```

---

## **Conclusion**
By following the principles of DDD, this approach ensures:
- Clear separation of concerns.
- Consistent and valid domain models.
- Adherence to the Aggregate Root pattern, making the domain more maintainable and expressive.
