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
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = StudyItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-blue-400 text-3xl font-bold">Study</h1>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      <div className="products grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod, index) => (
            <div className="max-w-xs mx-auto" key={index}>
              <ProductCard prod={prod} index={index} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default StudyPage;
