
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Fashion = [
  {
    name: "T-Shirt",
    type: "Clothing",
    price: 300,
    image: "/images/fashion/tshirt.png",
  },
  {
    name: "Jeans",
    type: "Clothing",
    price: 800,
    image: "/images/fashion/jeans.png",
  },
  {
    name: "Jacket",
    type: "Outerwear",
    price: 1500,
    image: "/images/fashion/jacket.png",
  },
  {
    name: "Sneakers",
    type: "Footwear",
    price: 1200,
    image: "/images/fashion/sneakers.png",
  },
  {
    name: "Hat",
    type: "Accessories",
    price: 400,
    image: "/images/fashion/hat.png",
  },
  {
    name: "Sunglass",
    type: "Accessories",
    price: 600,
    image: "/images/fashion/sunglass.png",
  },
  {
    name: "Watch",
    type: "Accessories",
    price: 1500,
    image: "/images/fashion/watch.png",
  },
  {
    name: "Handbag",
    type: "Accessories",
    price: 2000,
    image: "/images/fashion/handbag.png",
  },
];

const FashionPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Fashion</h1>
      </div>

      <div className="products grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 lg:grid-cols-5">
        {Fashion.map((prod, index) => (
          <div className="w-48 h-72 mx-auto" key={index}>
            <ProductCard prod={prod} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionPage;
