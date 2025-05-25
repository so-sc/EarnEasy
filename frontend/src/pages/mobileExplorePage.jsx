import { useState, useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function ExplorePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollRef = useRef(null);

  const categories = [
    {id:1, name: "Electronics", img: "/images/electronics.png" },
    {id:2, name: "Study", img: "/images/study.png" },
    {id:3, name: "Fashion", img: "/images/fashion.png" },
    {id:4, name: "Vehicle", img: "/images/vehicles.png" },
    {id:5, name: "Gadgets", img: "/images/gadgets.png" },
    {id:6, name: "Beauty", img: "/images/beauty.png" },
    {id:7, name: "Food", img: "/images/food.png" }
];

  const featuredItems = [
    {id: 1, title: 'Music', image: '/images/explore/headphones.jpg'},
    {id: 2, title: 'Perfumes', image: '/images/explore/perfume-flex.jpg'},
    {id: 3, title: 'Grocery', image: '/images/explore/grocery.jpg'}
  ];

  // Handle automatic scrolling
  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [featuredItems.length]);

  // Handle manual navigation
  const handleSlideChange = (index) => {
    setActiveSlide(index);
    // Reset the automatic scrolling timer
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % featuredItems.length);
      }, 5000);
    }
  };

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setActiveSlide((prev) => (prev + 1) % featuredItems.length);
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setActiveSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
    }
  };

  return (
    <div className="bg-white max-w-md mx-auto h-full pb-8">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <ArrowBackIosIcon size={24} />
        <h1 className="text-lg font-medium flex-1 text-center">Explore More</h1>
      </div>

      {/* Featured Slide Carousel */}
      <div 
        className="relative mx-4 mt-4 rounded-xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {featuredItems.map((item) => (
            <div key={item.id} className="relative min-w-full">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl" />
                </div>
              ))}
        </div>

        {/* Left and Right Controls */}
        <button 
  className="absolute top-1/2 left-1 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-2 flex items-center justify-center"
  onClick={() =>
    handleSlideChange((activeSlide - 1 + featuredItems.length) % featuredItems.length)
  }
>
  <ArrowBackIosIcon className="text-black" fontSize="small" />
</button>


       <button 
  className="absolute top-1/2 right-1 -translate-y-1/2 bg-white/40 hover:bg-white/60 rounded-full p-2 flex items-center justify-center"
  onClick={() =>
    handleSlideChange((activeSlide + 1) % featuredItems.length)
  }
>
  <ArrowForwardIosIcon className="text-black" fontSize="small" />
</button>



        {/* Pagination dots */}
        <div className="flex justify-center mt-2">
          {featuredItems.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full mx-0.5 cursor-pointer ${
                activeSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>

      {/* Categories section */}
      <div className="mt-4 px-4">
        <div className="flex justify-between items-center">
          <button className="text-white bg-blue-500 text-xs px-3 py-1 rounded-full">Categories</button>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-100 p-3 rounded-xl flex flex-col items-center">
              <img src={category.img} alt={category.name} className="w-16 h-16 bg-white rounded-full mb-2" />
              <span className="text-xs mt-1">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

 {/* Trending section */}
      <div className="mt-4 px-4">
        <div className="flex justify-between items-center">
          <button className="text-white bg-blue-500 text-xs px-3 py-1 rounded-full">Trending</button>
        </div>
        <div className="flex flex-wrap gap-2 pt-2 pb-4"> 
          {/* Large card */}
          <div className="flex-grow basis-[28%] h-58 bg-gray-400 rounded-xl">
             <img src="\images\explore\bags.jpg" alt="Large Card" className="w-full h-full object-cover rounded-xl" />
          </div>
          {/* Two stacked cards */}
          <div className="flex flex-col gap-2 flex-grow basis-[18%]">
           <div className="flex gap-2">
             <div className="h-28 w-21 bg-gray-400 rounded-xl">
              <img src="\images\explore\makeup.jpg" alt="Small Card1" className="w-full h-full object-cover rounded-xl" />
           </div>
            <div className="h-28 w-21 bg-gray-400 rounded-xl">
             <img src="\images\explore\perfume.jpg" alt="Small Card2" className="w-full h-full object-cover rounded-xl" />
           </div>
           </div>
          <div className="h-28 bg-gray-400 rounded-xl">
           <img src="\images\explore\clothes.jpg" alt="Small Card3" className="w-full h-full object-cover rounded-xl" />
          </div>
         </div>
       </div>

       <div className="flex flex-wrap gap-3 pt-2">
       {/* Two stacked small cards */}
       <div className="flex flex-col gap-3 flex-grow basis-[18%]">
          <div className="h-28 bg-gray-400 rounded-xl overflow-hidden">
          <img
          src="/images/explore/Gadgets-speaker.jpeg"
          alt="Small Card 1"
          className="w-full h-full object-cover"
          />
         </div>
           <div className="h-28 bg-gray-400 rounded-xl overflow-hidden">
           <img
           src="/images/explore/gadgets-watch.jpeg"
           alt="Small Card 2"
           className="w-full h-full object-cover"
           />
         </div>
       </div>

        {/* One large card */}
       <div className="flex-grow basis-[28%] h-60 bg-gray-400 rounded-xl overflow-hidden">
        <img
        src="\images\explore\laps.jpg"
        alt="Large Card"
        className="w-full h-full object-cover"
        />
      </div>
      </div>

      </div>
    </div>
  );
}