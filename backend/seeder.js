import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Products.js'; // make sure path is correct

dotenv.config(); // load env vars

// Sample dummy products
const products = [
  {
    name: 'Power Bank',
    desc: 'Realme 10000mAh',
    price: 50,
    img: 'https://images.unsplash.com/photo-1594843665794-446ce915d840?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Speakers',
    desc: 'boAt Stone 350 Pro',
    price: 30,
    img: 'https://images.unsplash.com/photo-1589001181560-a8df1800e501?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Smartwatch',
    desc: 'Noise Halo 2',
    price: 50,
    img: 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Wireless Earbuds',
    desc: 'boAt Airdopes 131',
    price: 20,
    img: 'https://images.unsplash.com/photo-1648447270212-5d56e1837498?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bluetooth Headphones',
    desc: 'Sony WH-1000XM4',
    price: 100,
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Gaming Mouse',
    desc: 'Logitech G502',
    price: 40,
    img: 'https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mechanical Keyboard',
    desc: 'Corsair K95 RGB',
    price: 80,
    img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Laptop Stand',
    desc: 'Rain Design mStand',
    price: 25,
    img: 'https://images.unsplash.com/photo-1652198144911-4f204ccf35e6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

// Function to insert into DB
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    await Product.deleteMany(); // clear existing
    await Product.insertMany(products); // insert dummy

    console.log('✅ Dummy products seeded!');
    process.exit();
  } catch (error) {
    console.error('❌ Failed to seed products:', error);
    process.exit(1);
  }
};

seedProducts();
