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
  return (
    <div className="p-4">
      <div className="heading flex justify-center">
        <h1 className="text-blue-400 mt-2 ml-4 text-3xl font-bold">Vehicles</h1>
      </div>

      <div className="products grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 lg:grid-cols-5">
        {Vehicles.map((prod, index) => (
          <div className="w-52 h-72 mx-auto" key={index}>
            <ProductCard prod={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;

