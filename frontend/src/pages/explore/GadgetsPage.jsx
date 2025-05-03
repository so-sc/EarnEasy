
import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Gadgets = [
  {
    name: "Mini Projector",
    type: "Entertainment",
    price: 3500,
    image: "/images/gadgets/projector.png",
  },
  {
    name: "VR Headset",
    type: "Entertainment",
    price: 4000,
    image: "/images/gadgets/vr.png",
  },
  {
    name: "Smart Plug",
    type: "Smart Home",
    price: 1500,
    image: "/images/gadgets/smartplug.png",
  },
  {
    name: "Portable Fan",
    type: "Personal Care",
    price: 800,
    image: "/images/gadgets/fan.png",
  },
  {
    name: "LED Lamp",
    type: "Home",
    price: 1000,
    image: "/images/gadgets/lamp.png",
  },
  {
    name: "Smart Scale",
    type: "Fitness",
    price: 2200,
    image: "/images/gadgets/smartscale.png",
  },
  {
    name: "USB Hub",
    type: "Accessories",
    price: 50,
    image: "/images/gadgets/usb.png",
  },
];

const GadgetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = Gadgets.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-blue-400 text-3xl font-bold">Gadgets</h1>
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
            <div className="w-full sm:w-48 h-72 mx-auto" key={index}>
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

export default GadgetsPage;
