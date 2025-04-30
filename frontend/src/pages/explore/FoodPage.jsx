
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Foods = [
  {
    name: "Maggi Noodles",
    type: "Instant Noodles",
    price: 20,
    image: "/images/food/maggie.png",
  },
  {
    name: "Cup Noodles",
    type: "Instant Noodles",
    price: 45,
    image: "/images/food/noodle.png",
  },
  {
    name: "Oats Packet",
    type: "Instant Breakfast",
    price: 30,
    image: "/images/food/oats.png",
  },
  {
    name: "Biscuits",
    type: "Snacks",
    price: 10,
    image: "/images/food/biscuit.png",
  },
  {
    name: "Chips Packet",
    type: "Snacks",
    price: 20,
    image: "/images/food/chips.png",
  },
  {
    name: "Chocolate",
    type: "Dessert",
    price: 40,
    image: "/images/food/chocolate.png",
  },
  {
    name: "Peanut Butter",
    type: "Instant Spread",
    price: 50,
    image: "/images/food/peanutbtr.png",
  },
  {
    name: "Cup Cake",
    type: "Dessert",
    price: 25,
    image: "/images/food/cupcake.png",
  },
];

const FoodPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Food</h1>
      </div>

      <div className="products grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 lg:grid-cols-5">
        {Foods.map((prod, index) => (
          <div className="w-48 mx-auto" key={index}>
            <ProductCard prod={prod} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodPage;

