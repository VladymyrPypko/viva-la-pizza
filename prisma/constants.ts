export const categories = [
  { name: 'Pizza' },
  { name: 'Snacks' },
  { name: 'Breakfast' },
  { name: 'Desserts' },
  { name: 'Coffee' },
];

export const ingredients = [
  {
    name: 'Cheese crust',
    price: 1.25,
    imageUrl: 'https://i.ibb.co/Wph1Y1k/cheese-Crust.png',
  },
  {
    name: 'Creamy mozzarella',
    price: 1,
    imageUrl: 'https://i.ibb.co/6bnMVfZ/creamy-Mozzarella.png',
  },
  {
    name: 'Cheddar and parmesan',
    price: 1,
    imageUrl: 'https://i.ibb.co/0f6XHMn/cheddar-And-Parmesan.png',
  },
  {
    name: 'Hot jalapeno peppers',
    price: 0.8,
    imageUrl: 'https://i.ibb.co/kg7FnMh/hot-Jalapeno-Peppers.png',
  },
  {
    name: 'Tender chicken',
    price: 0.8,
    imageUrl: 'https://i.ibb.co/rkjzY8r/tender-Chicken.png',
  },
  {
    name: 'Champignons',
    price: 0.7,
    imageUrl: 'https://i.ibb.co/K6VTPSL/champignons.png',
  },
  {
    name: 'Ham',
    price: 0.8,
    imageUrl: 'https://i.ibb.co/BchgFbP/ham.png',
  },
  {
    name: 'Spicy pepperoni',
    price: 1,
    imageUrl: 'https://i.ibb.co/ZSyGjRs/spicy-Pepperoni.png',
  },
  {
    name: 'Spicy chorizo',
    price: 1,
    imageUrl: 'https://i.ibb.co/3Rm1w4b/spicy-Chorizo.png',
  },
  {
    name: 'Pickles',
    price: 0.5,
    imageUrl: 'https://i.ibb.co/pLRCQJP/pickles.png',
  },
  {
    name: 'Fresh tomatoes',
    price: 0.5,
    imageUrl: 'https://i.ibb.co/17Y4pkP/fresh-Tomatoes.png',
  },
  {
    name: 'Red onion',
    price: 0.5,
    imageUrl: 'https://i.ibb.co/wwh5Q55/redOnion.png',
  },
  {
    name: 'Juicy pineapples',
    price: 0.6,
    imageUrl: 'https://i.ibb.co/LtMHSJd/juicy-Pineapples.png',
  },
  {
    name: 'Italian spices',
    price: 0.25,
    imageUrl: 'https://i.ibb.co/6rtCxX5/italian-Spices.png',
  },
  {
    name: 'Sweet peppers',
    price: 0.6,
    imageUrl: 'https://i.ibb.co/wNMDCkv/sweet-Peppers.png',
  },
  {
    name: 'Brie cubes',
    price: 1,
    imageUrl: 'https://i.ibb.co/rx8htfG/brie-Cubes.png',
  },
  {
    name: 'Meatballs',
    price: 1,
    imageUrl: 'https://i.ibb.co/5MQ5ZTz/meatballs.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Ham and cheese sandwich',
    imageUrl: 'https://i.ibb.co/zncC0hz/ham-And-Cheese-Sandwich.jpg',
    categoryId: 2,
  },
  {
    name: 'Chicken nuggets',
    imageUrl: 'https://i.ibb.co/kDmFsW1/chicken-Nuggets.jpg',
    categoryId: 2,
  },
  {
    name: 'Pasta Carbonara',
    imageUrl: 'https://i.ibb.co/f4FXZr9/pasta-Carbonara.jpg',
    categoryId: 2,
  },
  {
    name: 'BBQ chicken wings',
    imageUrl: 'https://i.ibb.co/Wpyy5DQ/bbq-Chicken-Wings.jpg',
    categoryId: 2,
  },
  {
    name: 'Pasta Pesto',
    imageUrl: 'https://i.ibb.co/CPCyskg/pasta-Pesto.jpg',
    categoryId: 2,
  },
  {
    name: 'Cheesecakes with condensed milk',
    imageUrl: 'https://i.ibb.co/YBXGtv5/cheesecakes-With-Condensed-Milk.jpg',
    categoryId: 3,
  },
  {
    name: 'Cheesecakes with raspberry jam',
    imageUrl: 'https://i.ibb.co/XSztPXs/cheesecakes-With-Raspberry-Jam.jpg',
    categoryId: 3,
  },
  {
    name: 'Ham dodster',
    imageUrl: 'https://i.ibb.co/HHNBfqF/ham-Dodster.jpg',
    categoryId: 3,
  },
  {
    name: 'Cheesecakes',
    imageUrl: 'https://i.ibb.co/HrZ8jcB/cheesecakes.jpg',
    categoryId: 3,
  },
  {
    name: 'Muffin Salted Caramel',
    imageUrl: 'https://i.ibb.co/k3HndnQ/muffin-Salted-Caramel.jpg',
    categoryId: 4,
  },
  {
    name: 'Three Chocolates Muffin',
    imageUrl: 'https://i.ibb.co/DtwnyPh/three-Chocolates-Muffin.jpg',
    categoryId: 4,
  },
  {
    name: 'Chocolate cookie',
    imageUrl: 'https://i.ibb.co/Z1ZLh1t/hocolate-ookie.jpg',
    categoryId: 4,
  },
  {
    name: 'New York cheesecake',
    imageUrl: 'https://i.ibb.co/cyQF4dG/new-York-Cheesecake.jpg',
    categoryId: 4,
  },
  {
    name: 'Banana Cheesecake with chocolate cookies',
    imageUrl:
      'https://i.ibb.co/Nr9sfWV/banana-Cheesecake-With-Chocolate-Cookies.jpg',
    categoryId: 4,
  },
  {
    name: 'Cappuccino Coffee',
    imageUrl: 'https://i.ibb.co/Mp4rty8/cappuccino-Coffee.jpg',
    categoryId: 5,
  },
  {
    name: 'Latte Coffee',
    imageUrl: 'https://i.ibb.co/rHKL11b/latte-Coffee.jpg',
    categoryId: 5,
  },
  {
    name: 'Americano Coffee',
    imageUrl: 'https://i.ibb.co/JsyFFf6/americano-Coffee.jpg',
    categoryId: 5,
  },
  {
    name: 'Caramel Cappuccino Coffee',
    imageUrl: 'https://i.ibb.co/X2xmGS3/caramel-Cappuccino-Coffee.jpg',
    categoryId: 5,
  },
  {
    name: 'Coconut Latte Coffee',
    imageUrl: 'https://i.ibb.co/nryBtwP/coconut-Latte-Coffee.jpg',
    categoryId: 5,
  },
  {
    name: 'Hazelnut Latte Coffee',
    imageUrl: 'https://i.ibb.co/m8tHWw6/hazelnut-Latte-Coffee.jpg',
    categoryId: 5,
  },
];
