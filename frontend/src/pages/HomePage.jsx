import { Button, Card, CardMedia, CardContent, Typography, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CategoriesBar from "../components/CategoriesBar";
import PressableProductCard from '../components/PressableProductCard';

const myChoices = [
  { name: "Power Bank", price: "₹50 per/Hr", desc: "Realme 10000mAh", img: "/images/powerbank.jpeg" },
  { name: "Speakers", price: "₹30 per/Hr", desc: "boAt Stone 350 pro", img: "/images/speaker.jpeg" },
  { name: "Smartwatches", price: "₹50 per/Hr", desc: "Noise Halo 2", img: "/images/watch.jpeg" },
];

const baseItems = [
  { name: "Speakers", price: "₹30 per/Hr", desc: "boAt Stone 350 pro", img: "/images/earbuds.jpeg" },
  { name: "Mouse", price: "₹50 per/Hr", desc: "Zebronics Zeb-Rush", img: "/images/mouse.jpeg" }
];

const newItems = Array.from({ length: 20 }, (_, i) => baseItems[i % 2]);

const HomePage = () => {
  return (
      <div className="font-sans min-h-screen px-4 pt-6 pb-28">
        {/* Search & Button */}
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

        {/* Categories Bar Component */}
        <CategoriesBar />

        {/* My Choice Section */}
        <h2 className="text-lg font-bold mb-3 text-teal-600">My Choice</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {myChoices.map((item, i) => (
            <PressableProductCard key={i} item={item} />
          ))}
        </div>

        {/* New one Section */}
        <h2 className="text-lg font-bold mb-3 text-teal-600">New one</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newItems.map((item, i) => (
            <PressableProductCard key={i} item={item} />
          ))}
        </div>
      </div>
  );
};

export default HomePage;