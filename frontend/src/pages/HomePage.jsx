import React from "react";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import BottomNavBar from "../components/BottomNavBar.jsx"; 


const categories = [
  { name: "Electroices", img: "/images/electronics.png" },
  { name: "Study", img: "/images/study.png" },
  { name: "Fashion", img: "/images/fashion.png" },
  { name: "Vehicle", img: "/images/vehicles.png" },
  { name: "Gadgets", img: "/images/gadgets.png" },
  { name: "Beauty", img: "/images/beauty.png" },
  { name: "Food", img: "/images/food.png" }
];


const myChoices = [
  {
    name: "Power Bank",
    price: "₹50 per/Hr",
    desc: "Realme 10000mAh",
    img: "/images/powerbank.jpeg",
  },
  {
    name: "Speakers",
    price: "₹30 per/Hr",
    desc: "boAt Stone 350 pro",
    img: "/images/speaker.jpeg",
  },
  {
    name: "Smartwatches",
    price: "₹50 per/Hr",
    desc: "Noise Halo 2",
    img: "/images/watch.jpeg",
  },
];


const baseItems = [
  {
    name: "Speakers",
    price: "₹30 per/Hr",
    desc: "boAt Stone 350 pro",
    img: "/images/earbuds.jpeg"
  },
  {
    name: "Mouse",
    price: "₹50 per/Hr",
    desc: "Zebronics Zeb-Rush",
    img: "/images/mouse.jpeg"
  }
];

const newItems = Array.from({ length: 20 }, (_, i) => baseItems[i % 2]);


const HomePage = () => {
  return (
    <div className="font-sans bg-white min-h-screen px-4 pt-6 pb-28">
      {/* Custom Navbar Component */}
      <BottomNavBar />

      {/* Search & Buttons */}
      <div className="flex justify-between items-center mb-6 mt-4">
        <div className="flex gap-4 items-center">
          <Button variant="contained" color="info">Find Deals</Button>
          <div className="flex items-center border rounded px-2">
            <SearchIcon fontSize="small" className="text-gray-400" />
            <input placeholder="Find your value" className="outline-none px-2 py-1" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex justify-between overflow-x-auto pb-2 mb-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="text-center text-sm text-gray-600 min-w-max focus:outline-none"
            onClick={() => console.log(`${cat.name} clicked`)}
          >
            <img
             src={cat.img}
             alt={cat.name}
             className="w-14 h-14 rounded-full object-cover mx-auto mb-1 hover:scale-105 transition"
            />

            {cat.name}
          </button>
        ))}
      </div>

      {/* My Choice */}
      <h2 className="text-lg font-bold mb-3 text-teal-600">My Choice</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {myChoices.map((item, i) => (
         <button
         key={i}
         onClick={() => console.log(`${item.name} clicked`)}
         className="text-left bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition w-full"
       >
         <img
           src={item.img}
           alt={item.name}
           className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-2"
         />
         <p className="font-semibold">{item.name}</p>
         <p className="text-sm text-gray-600">{item.desc}</p>
         <p className="text-teal-600 font-medium">{item.price}</p>
       </button>
       
          
        ))}
      </div>

      {/* New one */}
      <h2 className="text-lg font-bold mb-3 text-teal-600">New one</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newItems.map((item, i) => (
          <button
          key={i}
          onClick={() => console.log(`${item.name} clicked`)}
          className="w-full text-left bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-32 md:h-40 lg:h-48 object-cover mb-3 rounded"
          />
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-600">{item.desc}</p>
          <p className="text-teal-600 font-medium">{item.price}</p>
        </button>
        
        ))}
      </div>
    </div>
  );
};

export default HomePage;
