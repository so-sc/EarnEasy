import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function MobileExplorePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const categories = [
    {id:1, name: "Electronics", img: "/images/electronics.png", path: "/explore/electronics" },
    {id:2, name: "Study", img: "/images/study.png", path: "/explore/study" },
    {id:3, name: "Fashion", img: "/images/fashion.png", path: "/explore/fashion" },
    {id:4, name: "Vehicle", img: "/images/vehicles.png", path: "/explore/vehicles" },
    {id:5, name: "Gadgets", img: "/images/gadgets.png", path: "/explore/gadgets" },
    {id:6, name: "Beauty", img: "/images/beauty.png", path: "/explore/beauty" },
    {id:7, name: "Food", img: "/images/food.png", path: "/explore/food" }
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

  const handleCategoryClick = (categoryId) => {
    const selectedCategory = categories.find(cat => cat.id === categoryId);
    if (selectedCategory && selectedCategory.path) {
      navigate(selectedCategory.path);
    }
  };

  return (
    <div className="min-h-screen pb-16" style={{
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    }}>
      {/* Header - Back button removed as requested */}
      <div className="flex items-center p-4 border-b sticky top-0 z-10" style={{
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider
      }}>
        <Typography variant="h6" className="flex-1 text-center" sx={{ fontWeight: 500 }}>
          Explore More
        </Typography>
      </div>

      {/* Featured Slide Carousel - keeping existing implementation */}
      <div
        className="relative mx-4 mt-4 rounded-xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="relative min-w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <h3 className="text-white font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Left and Right Controls */}
        <button 
          className="absolute top-1/2 left-1 -translate-y-1/2 rounded-full p-1 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }
          }}
          onClick={() =>
            handleSlideChange((activeSlide - 1 + featuredItems.length) % featuredItems.length)
          }
        >
          <ArrowBackIosIcon className="text-black" fontSize="small" />
        </button>

        <button
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full p-1 flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }
          }}
          onClick={() =>
            handleSlideChange((activeSlide + 1) % featuredItems.length)
          }
        >
          <ArrowForwardIosIcon className="text-black" fontSize="small" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1`}
              style={{
                backgroundColor: activeSlide === index ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.6)'
              }}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories section */}
      <div className="mt-6 px-4">
        <div>
          <span className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }}>
            Categories
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="p-3 rounded-xl flex flex-col items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              style={{
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[1]
              }}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-12 h-12 bg-white rounded-full mb-2"
                loading="lazy"
              />
              <Typography variant="caption" sx={{
                color: theme.palette.primary.main,
                textAlign: 'center',
                marginTop: '4px'
              }}>
                {category.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Trending section */}
      <div className="mt-6 px-4">
        <div>
          <span className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }}>
            Trending
          </span>
        </div>

        {/* First row */}
        <div className="flex flex-wrap gap-2 pt-4 pb-2">
          {/* Large card */}
          <div className="flex-grow basis-[48%] h-48 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src="/images/explore/bags.jpg"
              alt="Bags"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Two stacked cards */}
          <div className="flex flex-col gap-2 flex-grow basis-[48%]">
            <div className="flex gap-2 h-23">
              <div className="flex-1 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src="/images/explore/makeup.jpg"
                  alt="Makeup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src="/images/explore/perfume.jpg"
                  alt="Perfume"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="h-23 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img
                src="/images/explore/clothes.jpg"
                alt="Clothes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-wrap gap-2 pt-2 pb-4">
          {/* Two stacked small cards */}
          <div className="flex flex-col gap-2 flex-grow basis-[48%]">
            <div className="h-23 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img
                src="/images/explore/Gadgets-speaker.jpeg"
                alt="Speakers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-23 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img
                src="/images/explore/gadgets-watch.jpeg"
                alt="Smartwatch"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* One large card */}
          <div className="flex-grow basis-[48%] h-48 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src="/images/explore/laps.jpg"
              alt="Laptops"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}