import React from "react";
import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";

 const categories = [
    {id:1, name: "Electronics", img: "/images/electronics.png" },
    {id:2, name: "Study", img: "/images/study.png" },
    {id:3, name: "Fashion", img: "/images/fashion.png" },
    {id:4, name: "Vehicle", img: "/images/vehicles.png" },
    {id:5, name: "Gadgets", img: "/images/gadgets.png" },
    {id:6, name: "Beauty", img: "/images/beauty.png" },
    {id:7, name: "Food", img: "/images/food.png" }
];

const banner = [
  { id: 1, image: "/images/explore/headphones.jpg" },
  { id: 2, image: "/images/explore/perfume-flex.jpg" },
  { id: 3, image: "/images/explore/grocery.jpg" },
];

const DesktopExplorePage = () => {
  return (
    <div className="px-12 py-8 text-black bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-10">
        <IconButton>
          <ArrowBack className="text-black hover:text-cyan-600 transition-colors" />
        </IconButton>
        <h1 className="text-2xl font-semibold">Explore More</h1>
      </div>

      {/* Carousel */}
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
  {banner.map((item) => (
    <div
      key={item.id}
      className="aspect-[16/7] w-full rounded-xl shadow overflow-hidden bg-gray-300"
    >
      {item.image ? (
        <img
          src={item.image}
          alt={`Banner ${item.id}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-sm text-gray-700">
          Banner {item.id}
        </div>
      )}
    </div>
  ))}
</div>



      {/* Categories */}
      <div className="mb-12">
        <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
          Categories
        </span>
        <div className="grid grid-cols-7 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow flex flex-col items-center py-4" >
              <img src={category.img} alt={category.name} className="w-16 h-16 bg-white rounded-full mb-2"/>
              <span className="text-sm text-cyan-600 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Trending Section */}
<div>
  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
    Trending
  </span>
 </div>
    <div className="flex flex-wrap gap-4">
  {/* Large card */}
  <div className="flex-grow basis-[30%] h-100 bg-gray-400 rounded-xl">
    <img src="\images\explore\bags.jpg" alt="Large Card" className="w-full h-full object-cover rounded-xl" />
  </div>

  {/* Two stacked cards */}
  <div className="flex flex-col gap-4 flex-grow basis-[18%]">
    <div className="flex gap-4">
      <div className="h-48 w-33 bg-gray-400 rounded-xl">
        <img src="\images\explore\makeup.jpg" alt="Small Card1" className="w-full h-full object-cover rounded-xl" />
      </div>
      <div className="h-48 w-33 bg-gray-400 rounded-xl">
        <img src="\images\explore\perfume.jpg" alt="Small Card2" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
    <div className="h-48 bg-gray-400 rounded-xl">
      <img src="\images\explore\clothes.jpg" alt="Small Card3" className="w-full h-full object-cover rounded-xl" />
    </div>
  </div>

  {/* One large and one small card */}
  <div className="flex flex-col gap-4 flex-grow basis-[15%]">
    <div className="h-48 bg-gray-400 rounded-xl">
      <img src="\images\explore\Gadgets-speaker.jpeg" alt="Small Card4" className="w-full h-full object-cover rounded-xl" />
    </div>
    <div className="h-48 bg-gray-400 rounded-xl">
      <img src="\images\explore\gadgets-watch.jpeg" alt="Small Card5" className="w-full h-full object-cover rounded-xl" />
    </div>
  </div>

  {/* Final large card */}
  <div className="flex-grow basis-[30%] h-100 bg-gray-400 rounded-xl">
    <img src="\images\explore\laps.jpg" alt="Large Card2" className="w-full h-full object-cover rounded-xl" />
  </div>
   </div>
   </div>
  );
};

export default DesktopExplorePage;
