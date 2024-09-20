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
    imageUrl: 'https://i.ibb.co/zSvzpkC/Ham-and-cheese-sandwich.png',
    description:
      'Toasted ciabatta and the familiar combination of ham, chicken, mozzarella with fresh tomatoes, ranch sauce and garlic',
    categoryId: 2,
  },
  {
    name: 'Chicken nuggets',
    imageUrl: 'https://i.ibb.co/D8Yz6b8/Chicken-nuggets.png',
    description: 'Tender chicken meat in crispy breading',
    categoryId: 2,
  },
  {
    name: 'Pasta Carbonara',
    imageUrl: 'https://i.ibb.co/12y6MMs/Pasta-Carbonara.png',
    description:
      'Oven pasta with bacon, cheddar and parmesan cheeses, tomatoes, mozzarella, signature alfredo sauce and garlic',
    categoryId: 2,
  },
  {
    name: 'BBQ chicken wings',
    imageUrl: 'https://i.ibb.co/dWn3dz5/BBQ-chicken-wings.png',
    description: 'Chicken wings with spices and smoking aroma',
    categoryId: 2,
  },
  {
    name: 'Pasta Pesto',
    imageUrl: 'https://i.ibb.co/LRYcgQD/Pasta-Pesto.png',
    description:
      'Oven pasta with pesto sauce, chicken, tomatoes, mozzarella and specialty tomato sauce',
    categoryId: 2,
  },
  {
    name: 'Cheesecakes with condensed milk',
    imageUrl: 'https://i.ibb.co/PD0rVz4/Cheesecakes-with-condensed-milk.png',
    description:
      'Tender oven-cooked cheesecakes with a portion of sweetened condensed milk',
    categoryId: 3,
  },
  {
    name: 'Cheesecakes with raspberry jam',
    imageUrl: 'https://i.ibb.co/87g6CBs/Cheesecakes-with-raspberry-jam.png',
    description:
      'The favorite dessert of many of our guests - ruddy cheesecakes from the oven. So tender, moderately sweet and reminiscent of childhood',
    categoryId: 3,
  },
  {
    name: 'Ham dodster',
    imageUrl: 'https://i.ibb.co/KsdBp1Y/Ham-dodster.png',
    description:
      'Hot breakfast with ham, tomatoes, mozzarella, ranch sauce in a thin wheat tortilla',
    categoryId: 3,
  },
  {
    name: 'Cheesecakes',
    imageUrl: 'https://i.ibb.co/LkDj0p6/Cheesecakes.png',
    description:
      'The favorite dessert of many of our guests - ruddy cheesecakes from the oven. So tender, moderately sweet and reminiscent of childhood',
    categoryId: 3,
  },
  {
    name: 'Muffin Salted Caramel',
    imageUrl: 'https://i.ibb.co/Jz5kfb4/Muffin-Salted-Caramel.png',
    description: `Once you take a bite, you'll love it forever! Enjoy the colorful combination of salted caramel and peanuts`,
    categoryId: 4,
  },
  {
    name: 'Triple Chocolate Muffin',
    imageUrl: 'https://i.ibb.co/YBSx7gj/Triple-Chocolate-Muffin.png',
    description:
      'What a muffin this muffin is! It is made of natural cocoa, and inside there is a delicate filling of white and milk chocolate cubes',
    categoryId: 4,
  },
  {
    name: 'Chocolate cookie',
    imageUrl: 'https://i.ibb.co/sb0GL8h/Chocolate-cookie.png',
    description:
      'The cookies look like a planet, but taste like a chocolate comet with frosting',
    categoryId: 4,
  },
  {
    name: 'New York cheesecake',
    imageUrl: 'https://i.ibb.co/yNqC2ZH/New-York-cheesecake.png',
    description: `We've tried a thousand desserts and finally found a guest favorite - tender cottage cheese cheesecake`,
    categoryId: 4,
  },
  {
    name: 'Banana Cheesecake with chocolate cookies',
    imageUrl:
      'https://i.ibb.co/grLHNBZ/Banana-Cheesecake-with-chocolate-cookies.png',
    description:
      'Sunny on the outside and bright in flavor on the inside. Summer novelty - delicate cheesecake with banana and chocolate cookies',
    categoryId: 4,
  },
  {
    name: 'Cappuccino Coffee',
    imageUrl: 'https://i.ibb.co/xfw7g8D/Cappuccino-Coffee.png',
    description:
      'The king among coffee drinks is the classic cappuccino. For lovers of a balanced coffee and milk flavor',
    categoryId: 5,
  },
  {
    name: 'Latte Coffee',
    imageUrl: 'https://i.ibb.co/jRXMGLx/Latte-Coffee.png',
    description:
      'When you want a delicate milk foam, a classic latte comes to the rescue',
    categoryId: 5,
  },
  {
    name: 'Americano Coffee',
    imageUrl: 'https://i.ibb.co/S3KsgGq/Americano-Coffee.png',
    description: `A couple sips of hot Americano and you'll be ready to conquer the day`,
    categoryId: 5,
  },
  {
    name: 'Caramel Cappuccino Coffee',
    imageUrl: 'https://i.ibb.co/LvdzJ9Q/Caramel-Cappuccino-Coffee.png',
    description:
      'If not chocolate, then caramel! And a cappuccino with caramel syrup is especially good',
    categoryId: 5,
  },
  {
    name: 'Coconut Latte Coffee',
    imageUrl: 'https://i.ibb.co/pZvDs1Y/Coconut-Latte-Coffee.png',
    description:
      'Hot espresso-based drink with increased milk and coconut syrup',
    categoryId: 5,
  },
  {
    name: 'Hazelnut Latte Coffee',
    imageUrl: 'https://i.ibb.co/sJW0KXs/Hazelnut-Latte-Coffee.png',
    description:
      'Lots of milk and hazelnuts. A cozy latte based on espresso and hazelnut syrup',
    categoryId: 5,
  },
  {
    name: 'Chorizo barbecue sandwich',
    imageUrl: 'https://i.ibb.co/pbsSQgk/Chorizo-barbecue-sandwich.png',
    description:
      'The rich flavor of spicy chorizo sausage and spicy pepperoni with burger and barbecue sauces, fresh tomatoes, pickles, mozzarella and onions in browned ciabatta',
    categoryId: 2,
  },
  {
    name: 'Lingonberry rolls',
    imageUrl: 'https://i.ibb.co/GFMGwdL/Lingonberry-rolls.png',
    description: `They're cheerfully sweet rolls swirled with a mix of natural cranberries and condensed milk`,
    categoryId: 4,
  },
];
