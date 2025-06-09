
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Fashion = [
  {
    name: "T-Shirt",
    type: "Clothing",
    price: 300,
    image: "/images/fashion/tshirt.png",
  },
  {
    name: "Jeans",
    type: "Clothing",
    price: 800,
    image: "/images/fashion/jeans.png",
  },
  {
    name: "Jacket",
    type: "Outerwear",
    price: 1500,
    image: "/images/fashion/jacket.png",
  },
  {
    name: "Sneakers",
    type: "Footwear",
    price: 1200,
    image: "/images/fashion/sneakers.png",
  },
  {
    name: "Hat",
    type: "Accessories",
    price: 400,
    image: "/images/fashion/hat.png",
  },
  {
    name: "Sunglass",
    type: "Accessories",
    price: 600,
    image: "/images/fashion/sunglass.png",
  },
  {
    name: "Watch",
    type: "Accessories",
    price: 1500,
    image: "/images/fashion/watch.png",
  },
  {
    name: "Handbag",
    type: "Accessories",
    price: 2000,
    image: "/images/fashion/handbag.png",
  },
];

const FashionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = Fashion.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-blue-400 text-3xl font-bold">Fashion</h1>
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

      <div className="products grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod, index) => (
            <div className="w-48 h-72 mx-auto" key={index}>
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

export default FashionPage;
