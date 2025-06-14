import { MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      {
        id: 1,
        name: 'Bruschetta',
        description: 'Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and basil',
        price: 12.99,
        category: 'starters',
        image: 'https://images.pexels.com/photos/2762021/pexels-photo-2762021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 2,
        name: 'Calamari Fritti',
        description: 'Crispy fried calamari served with lemon aioli',
        price: 14.99,
        category: 'starters',
        image: 'https://images.pexels.com/photos/2734288/pexels-photo-2734288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 3,
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze',
        price: 13.99,
        category: 'starters',
        image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        id: 4,
        name: 'Fettuccine Alfredo',
        description: 'Fettuccine pasta in a rich, creamy parmesan sauce',
        price: 22.99,
        category: 'mains',
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 5,
        name: 'Grilled Salmon',
        description: 'Wild-caught salmon fillet with lemon butter sauce and seasonal vegetables',
        price: 28.99,
        category: 'mains',
        image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 6,
        name: 'Beef Tenderloin',
        description: 'Grass-fed beef tenderloin with red wine reduction and truffle mashed potatoes',
        price: 38.99,
        category: 'mains',
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 7,
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
        price: 24.99,
        category: 'mains',
        image: 'https://images.pexels.com/photos/15016117/pexels-photo-15016117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 8,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
        price: 10.99,
        category: 'desserts',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 9,
        name: 'Crème Brûlée',
        description: 'Rich custard topped with a layer of hardened caramelized sugar',
        price: 11.99,
        category: 'desserts',
        image: 'https://images.pexels.com/photos/2613471/pexels-photo-2613471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 10,
        name: 'Chocolate Fondant',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
        price: 12.99,
        category: 'desserts',
        image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      {
        id: 11,
        name: 'House Red Wine',
        description: 'Glass of our signature Cabernet Sauvignon',
        price: 9.99,
        category: 'drinks',
        image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 12,
        name: 'Craft Cocktail',
        description: 'Seasonal craft cocktail made with premium spirits',
        price: 14.99,
        category: 'drinks',
        image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: 13,
        name: 'Espresso',
        description: 'Double shot of our premium Italian espresso',
        price: 5.99,
        category: 'drinks',
        image: 'https://images.pexels.com/photos/2299028/pexels-photo-2299028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
    ]
  }
];