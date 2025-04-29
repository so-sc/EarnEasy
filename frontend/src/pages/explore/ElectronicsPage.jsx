import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Electronics = [
  {
    name: "Smartphone",
    type: "Mobile",
    price: 500,
    image: "/images/electronics/smartphone.png",
  },
  {
    name: "Laptop",
    type: "Computing",
    price: 1000,
    image: "/images/electronics/laptop.png",
  },
  {
    name: "Headphone",
    type: "Audio",
    price: 150,
    image: "/images/electronics/headphone.png",
  },
  {
    name: "Smartwatch",
    type: "Wearables",
    price: 250,
    image: "/images/electronics/smartwatch.png",
  },
  {
    name: "Speaker",
    type: "Audio",
    price: 100,
    image: "/images/electronics/speaker.png",
  },
  {
    name: "Power Bank",
    type: "Battery",
    price: 50,
    image: "/images/electronics/powerbank.png",
  },
  {
    name: "Tablet",
    type: "Mobile Computing",
    price: 300,
    image: "/images/electronics/tablet.png",
  },
  {
    name: "Smart TV",
    type: "Entertainment",
    price: 600,
    image: "/images/electronics/smarttv.png",
  },
  {
    name: "Game Console",
    type: "Entertainment",
    price: 400,
    image: "/images/electronics/gaming_console.png",
  },
  {
    name: "Camera",
    type: "Photography",
    price: 350,
    image: "/images/electronics/camera.png",
  },
];

const ElectronicsPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Electronics</h1>
      </div>

      <div className="products grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 lg:grid-cols-5">
        {Electronics.map((prod, index) => (
          <div className="w-48 mx-auto" key={index}>
            <ProductCard prod={prod} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsPage;
