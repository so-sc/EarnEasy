
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';


const BeautyItems = [
  {
    name: "Lipstick",
    type: "Makeup",
    price: 300,
    image: "/images/beauty/lipstick.png",
  },
  {
    name: "Foundation",
    type: "Makeup",
    price: 800,
    image: "/images/beauty/foundation.png",
  },
  {
    name: "Nail Polish",
    type: "Makeup",
    price: 150,
    image: "/images/beauty/nailpolish.png",
  },
  {
    name: "Mascara",
    type: "Makeup",
    price: 500,
    image: "/images/beauty/mascara.png",
  },
  {
    name: "Moisturizer",
    type: "Skincare",
    price: 400,
    image: "/images/beauty/moisturizer.png",
  },
  {
    name: "Shampoo",
    type: "Hair Care",
    price: 250,
    image: "/images/beauty/shampoo.png",
  },
  {
    name: "Hair Serum",
    type: "Hair Care",
    price: 600,
    image: "/images/beauty/hairserum.png",
  },
  {
    name: "Perfume",
    type: "Fragrance",
    price: 1200,
    image: "/images/beauty/perfume.png",
  },
];

const BeautyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = BeautyItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-blue-400 text-3xl font-bold mb-4">Beauty</h1>

        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      <div className="products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 mt-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod, index) => (
            <div className="w-52 h-80 mx-auto" key={index}>
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

export default BeautyPage;
