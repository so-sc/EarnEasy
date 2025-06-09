import React, { useState, useEffect } from "react";  
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CategoriesBar from "../components/CategoriesBar";
import PressableProductCard from '../components/PressableProductCard';

const HomePage = () => {
  // Step 2: Add state for products and loading
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Step 3: Fetch products from backend API
  useEffect(() => {
    fetch("http://localhost:3000/products") // Change this URL to your actual backend endpoint
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="font-sans min-h-screen px-4 pt-6 pb-28">
      {/*Search & Button */}
      <div className="flex justify-between items-center mb-6 mt-4">
        <div className="flex flex-row items-center gap-2 w-full">
          <TextField
            placeholder="Find your value"
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'primary.dark',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              },
              '&:active': {
                transform: 'scale(0.98)',
              },
            }}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>

      {/* Categories Bar Component*/ }
      <CategoriesBar />

     {/* You can keep your 'My Choice' static or remove it */}
      {/* I suggest replacing 'New one' section with fetched products */ }
      <h2 className="text-lg font-bold mb-3 text-teal-600">Top Deals</h2>

     { /* Show loading while fetching */ } 
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item, i) => (
            <PressableProductCard key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

