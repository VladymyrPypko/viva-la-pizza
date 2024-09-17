import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

// const randomDecimalNumber = (min: number, max: number) => {
//   return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
// };

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni',
      imageUrl: 'https://i.ibb.co/vX8nRX7/Pepperoni.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Chorizo',
      imageUrl: 'https://i.ibb.co/dsZVP6x/Chorizo.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Burger pizza',
      imageUrl: 'https://i.ibb.co/HP64Scs/Burger-pizza.jpg',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 20),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Pepperoni traditional
      {
        productId: pizza1.id,
        price: 8,
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza1.id,
        price: 10,
        pizzaType: 1,
        size: 30,
      },
      {
        productId: pizza1.id,
        price: 12,
        pizzaType: 1,
        size: 40,
      },
      // Pepperoni thin
      {
        productId: pizza1.id,
        price: 8,
        pizzaType: 2,
        size: 20,
      },
      {
        productId: pizza1.id,
        price: 10,
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza1.id,
        price: 12,
        pizzaType: 2,
        size: 40,
      },
      // Chorizo traditional
      {
        productId: pizza2.id,
        price: 9,
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: 12,
        pizzaType: 1,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: 14,
        pizzaType: 1,
        size: 40,
      },
      // Chorizo thin
      {
        productId: pizza2.id,
        price: 9,
        pizzaType: 2,
        size: 20,
      },
      {
        productId: pizza2.id,
        price: 12,
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza2.id,
        price: 14,
        pizzaType: 2,
        size: 40,
      },
      // Burger pizza traditional
      {
        productId: pizza3.id,
        price: 7,
        pizzaType: 1,
        size: 20,
      },
      {
        productId: pizza3.id,
        price: 9,
        pizzaType: 1,
        size: 30,
      },
      {
        productId: pizza3.id,
        price: 11,
        pizzaType: 1,
        size: 40,
      },
      // Burger pizza thin
      {
        productId: pizza3.id,
        price: 9,
        pizzaType: 2,
        size: 20,
      },
      {
        productId: pizza3.id,
        price: 11,
        pizzaType: 2,
        size: 30,
      },
      {
        productId: pizza3.id,
        price: 13,
        pizzaType: 2,
        size: 40,
      },
      // Other categories products
      { productId: 1, price: 5 },
      { productId: 2, price: 4 },
      { productId: 3, price: 10 },
      { productId: 4, price: 9 },
      { productId: 5, price: 10 },
      { productId: 6, price: 7 },
      { productId: 7, price: 7 },
      { productId: 8, price: 5 },
      { productId: 9, price: 5 },
      { productId: 10, price: 3 },
      { productId: 11, price: 3 },
      { productId: 12, price: 1 },
      { productId: 13, price: 5 },
      { productId: 14, price: 6 },
      { productId: 15, price: 3 },
      { productId: 16, price: 3 },
      { productId: 17, price: 2 },
      { productId: 18, price: 4 },
      { productId: 19, price: 4 },
      { productId: 20, price: 4 },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: 'token111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: 'token222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 4 }, { id: 6 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
