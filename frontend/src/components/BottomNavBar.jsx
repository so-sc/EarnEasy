import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1300}}
      elevation={3}
    >
      <Box sx={{ position: 'relative' }}>
        {/* Floating Plus Icon */}
        <Box
          sx={{
            position: 'absolute',
            top: -30, // lifts the icon out of the navbar
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1300,
            bgcolor: 'white',
            borderRadius: '50%',
          }}
        >
          <AddCircleRoundedIcon sx={{ fontSize: 60, color: '#2596be' }} />
        </Box>

        {/* Actual Nav Items */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
           label="Home"
           icon={<HomeIcon/>}
           />
          <BottomNavigationAction 
           label="Explore" 
           icon={<ExploreIcon />} 
           />
          <BottomNavigationAction 
          label="" 
          icon={<FavoriteIcon />} 
          />
          <BottomNavigationAction 
          label="Cart" 
          icon={<ShoppingCartSharpIcon />} 
          />
          <BottomNavigationAction 
          label="Profile" 
          icon={<AccountCircleSharpIcon />} 
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}