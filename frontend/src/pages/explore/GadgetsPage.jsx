
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Gadgets = [
  {
    name: "Mini Projector",
    type: "Entertainment",
    price: 3500,
    image: "/images/gadgets/projector.png",
  },
  {
    name: "VR Headset",
    type: "Entertainment",
    price: 4000,
    image: "/images/gadgets/vr.png",
  },
  {
    name: "Smart Plug",
    type: "Smart Home",
    price: 1500,
    image: "/images/gadgets/smartplug.png",
  },
  {
    name: "Portable Fan",
    type: "Personal Care",
    price: 800,
    image: "/images/gadgets/fan.png",
  },
  {
    name: "LED Lamp",
    type: "Home",
    price: 1000,
    image: "/images/gadgets/lamp.png",
  },
  {
    name: "Smart Scale",
    type: "Fitness",
    price: 2200,
    image: "/images/gadgets/smartscale.png",
  },
  {
    name: "USB Hub",
    type: "Accessories",
    price: 50,
    image: "/images/gadgets/usb.png",
  },

 
];

const GadgetsPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Gadgets</h1>
      </div>

      <div className="products grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 lg:grid-cols-5">
        {Gadgets.map((prod, index) => (
          <div className="w-full sm:w-48 h-72 mx-auto" key={index}> {/* Ensure cards take full width on mobile */}
            <ProductCard prod={prod} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GadgetsPage;
