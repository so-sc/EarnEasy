import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    { name: "Electronics", img: "/images/electronics.png", path: "/explore/electronics" },
    { name: "Study", img: "/images/study.png", path: "/explore/study" },
    { name: "Fashion", img: "/images/fashion.png", path: "/explore/fashion" },
    { name: "Vehicle", img: "/images/vehicles.png", path: "/explore/vehicles" },
    { name: "Gadgets", img: "/images/gadgets.png", path: "/explore/gadgets" },
    { name: "Beauty", img: "/images/beauty.png", path: "/explore/beauty" },
    { name: "Food", img: "/images/food.png", path: "/explore/food" }
];

const CategoriesBar = () => {
    const navigate = useNavigate();

    return (
        <div
            className="flex justify-evenly overflow-x-auto pb-2 mb-4 gap-20"
            style={{
                // Hide scrollbar but keep scrolling functionality
                scrollbarWidth: 'none', // Firefox
                '-ms-overflow-style': 'none', // IE and Edge
            }}
        >
            <style>
                {`
          div::-webkit-scrollbar {
            display: none; // Chrome, Safari, Opera
          }
        `}
            </style>
            {categories.map((cat, i) => (
                <button
                    key={i}
                    className="text-center text-sm text-gray-600 min-w-max focus:outline-none"
                    onClick={() => navigate(cat.path)}
                    style={{
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'scale(0.98)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
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
    );
};

export default CategoriesBar;