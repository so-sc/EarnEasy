import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const StudyItems = [
  {
    name: "Pen",
    type: "Writing",
    price: 5,
    image: "/images/study/pen.png",
  },
  {
    name: "Notebook",
    type: "Stationery",
    price: 15,
    image: "/images/study/notebook.png",
  },
  {
    name: "Pencil",
    type: "Writing",
    price: 3,
    image: "/images/study/pencil.png",
  },
  {
    name: "Eraser",
    type: "Stationery",
    price: 2,
    image: "/images/study/eraser.png",
  },
  {
    name: "Sharpener",
    type: "Stationery",
    price: 4,
    image: "/images/study/sharpener.png",
  },
  {
    name: "Ruler",
    type: "Stationery",
    price: 7,
    image: "/images/study/ruler.png",
  },
  {
    name: "Highlighter",
    type: "Writing",
    price: 10,
    image: "/images/study/highlightner.png",
  },
  {
    name: "Calculator",
    type: "Electronics",
    price: 30,
    image: "/images/study/calculator.png",
  },
];

const StudyPage = () => {
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Study</h1>
      </div>

      <div className="products grid grid-cols-2 gap-2 mt-6 sm:grid-cols-3 lg:grid-cols-5">
        {StudyItems.map((prod, index) => (
          <div className="max-w-xs mx-auto" key={index}>
            <ProductCard prod={prod} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPage;
