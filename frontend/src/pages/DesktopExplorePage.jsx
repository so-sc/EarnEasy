import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
    {id:1, name: "Electronics", img: "/images/electronics.png", path: "/explore/electronics" },
    {id:2, name: "Study", img: "/images/study.png", path: "/explore/study" },
    {id:3, name: "Fashion", img: "/images/fashion.png", path: "/explore/fashion" },
    {id:4, name: "Vehicle", img: "/images/vehicles.png", path: "/explore/vehicles" },
    {id:5, name: "Gadgets", img: "/images/gadgets.png", path: "/explore/gadgets" },
    {id:6, name: "Beauty", img: "/images/beauty.png", path: "/explore/beauty" },
    {id:7, name: "Food", img: "/images/food.png", path: "/explore/food" }
];

const banner = [
  { id: 1, image: "/images/explore/headphones.jpg", title: "Music" },
  { id: 2, image: "/images/explore/perfume-flex.jpg", title: "Perfumes" },
  { id: 3, image: "/images/explore/grocery.jpg", title: "Grocery" },
];

const DesktopExplorePage = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    if (selectedCategory && selectedCategory.path) {
      navigate(selectedCategory.path);
    }
  };

  const handleBannerChange = (index) => {
    setActiveBanner(index);
  };

  return (
    <div className="px-4 md:px-8 lg:px-12 py-8 min-h-screen" style={{
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    }}>
      {/* Header - Back button removed as requested */}
      <div className="flex items-center mb-10">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
          Explore More
        </Typography>
      </div>

      {/* Carousel with indicators - keeping the existing implementation */}
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {banner.map((item) => (
            <div
              key={item.id}
              className="aspect-[16/7] w-full rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
              style={{ backgroundColor: theme.palette.mode === 'light' ? '#e5e7eb' : '#374151' }}
              onClick={() => console.log(`Clicked banner: ${item.title}`)}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm"
                  style={{ color: theme.palette.text.secondary }}>
                  {item.title}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <span className="px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block text-white"
          style={{ backgroundColor: theme.palette.primary.main }}>
          Categories
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl shadow flex flex-col items-center py-4 hover:shadow-md transition-shadow cursor-pointer"
              style={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1]
              }}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img src={category.img} alt={category.name} className="w-16 h-16 bg-white rounded-full mb-2"/>
              <Typography variant="body2" sx={{
                color: theme.palette.primary.main,
                textAlign: 'center'
              }}>
                {category.name}
              </Typography>
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
