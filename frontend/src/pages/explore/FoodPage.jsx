
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Foods = [
  {
    name: "Maggi Noodles",
    type: "Instant Noodles",
    price: 20,
    image: "/images/food/maggie.png",
  },
  {
    name: "Cup Noodles",
    type: "Instant Noodles",
    price: 45,
    image: "/images/food/noodle.png",
  },
  {
    name: "Oats Packet",
    type: "Instant Breakfast",
    price: 30,
    image: "/images/food/oats.png",
  },
  {
    name: "Biscuits",
    type: "Snacks",
    price: 10,
    image: "/images/food/biscuit.png",
  },
  {
    name: "Chips Packet",
    type: "Snacks",
    price: 20,
    image: "/images/food/chips.png",
  },
  {
    name: "Chocolate",
    type: "Dessert",
    price: 40,
    image: "/images/food/chocolate.png",
  },
  {
    name: "Peanut Butter",
    type: "Instant Spread",
    price: 50,
    image: "/images/food/peanutbtr.png",
  },
  {
    name: "Cup Cake",
    type: "Dessert",
    price: 25,
    image: "/images/food/cupcake.png",
  },
];

const FoodPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = Foods.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
    
      <div className="flex justify-center mb-4">
        <h1 className="text-blue-400 text-3xl font-bold">Food</h1>
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

     
      <div className="products grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod, index) => (
            <div className="w-48 mx-auto" key={index}>
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

export default FoodPage;
