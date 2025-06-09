import React from 'react';
import ProductCard from '../../components/ProductCard.jsx';

const Vehicles = [
  {
    name: "Activa",
    type: "Scooter",
    price: 300,
    image: "/images/vehicles/activa.png",
  },
  {
    name: "Hero Optima",
    type: "EV Scooter",
    price: 250,
    image: "/images/vehicles/heroElectric.png",
  },
  {
    name: "Tata Nexon",
    type: "Electric Car",
    price: 1500,
    image: "/images/vehicles/nexon.png",
  },
  {
    name: "Maruti Swift",
    type: "Car",
    price: 1200,
    image: "/images/vehicles/swift.png",
  },
  {
    name: "E-Bicycle",
    type: "E-Cycle",
    price: 200,
    image: "/images/vehicles/ecycle.png",
  },
  {
    name: "Bajaj Pulsar 150",
    type: "Bike",
    price: 400,
    image: "/images/vehicles/pulsar.png",
  },
  {
    name: "Bicycle",
    type: "Cycle",
    price: 100,
    image: "/images/vehicles/cycle.png",
  },
];

const VehiclesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = Vehicles.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-blue-400 text-3xl font-bold">Vehicles</h1>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
      </div>

      <div className="products grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {filteredItems.length > 0 ? (
          filteredItems.map((prod, index) => (
            <div className="w-52 h-72 mx-auto" key={index}>
              <ProductCard prod={prod} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No vehicles found.
          </p>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;
