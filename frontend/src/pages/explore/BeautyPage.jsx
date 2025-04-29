
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';


const BeautyItems = [
  {
    name: "Lipstick",
    type: "Makeup",
    price: 300,
    image: "/images/beauty/lipstick.png",
  },
  {
    name: "Foundation",
    type: "Makeup",
    price: 800,
    image: "/images/beauty/foundation.png",
  },
  {
    name: "Nail Polish",
    type: "Makeup",
    price: 150,
    image: "/images/beauty/nailpolish.png",
  },
  {
    name: "Mascara",
    type: "Makeup",
    price: 500,
    image: "/images/beauty/mascara.png",
  },
  {
    name: "Moisturizer",
    type: "Skincare",
    price: 400,
    image: "/images/beauty/moisturizer.png",
  },
  {
    name: "Shampoo",
    type: "Hair Care",
    price: 250,
    image: "/images/beauty/shampoo.png",
  },
  {
    name: "Hair Serum",
    type: "Hair Care",
    price: 600,
    image: "/images/beauty/hairserum.png",
  },
  {
    name: "Perfume",
    type: "Fragrance",
    price: 1200,
    image: "/images/beauty/perfume.png",
  },
];

const BeautyPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Beauty</h1>
      </div>

      <div className="products grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 mt-6">
        {BeautyItems.map((prod, index) => (
          <div className="w-52 h-80 mx-auto" key={index}>
            <ProductCard prod={prod} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyPage;

