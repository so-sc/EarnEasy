import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function BottomNavbar() {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine the active tab based on current path
    const getActiveTab = (path) => {
        if (path.startsWith('/home')) return 0;
        if (path === '/explore' || path.startsWith('/explore/')) return 1;
        if (path === '/add') return 2;
        if (path === '/cart') return 3;
        if (path === '/profile') return 4;
        return 0; // Default to home if path doesn't match
    };

    const [value, setValue] = React.useState(getActiveTab(location.pathname));

    // Update the value whenever location changes
    React.useEffect(() => {
        setValue(getActiveTab(location.pathname));
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                navigate('/home');
                break;
            case 1:
                navigate('/explore');
                break;
            case 2:
                navigate('/add');
                break;
            case 3:
                navigate('/cart');
                break;
            case 4:
                navigate('/profile');
                break;
            default:
                break;
        }
    };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1300, cursor: 'pointer' }} elevation={3}>
            <Box sx={{ position: 'relative' }}>
                {/* Floating Plus Icon */}
                <Box
                    onClick={() => navigate('/add')}
                    sx={{
                        position: 'absolute',
                        top: -30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1300,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        display: location.pathname === '/add' ? 'none' : 'block'
                    }}
                >
                    <AddCircleRoundedIcon sx={{ fontSize: 60, color: '#2596be' }} />
                </Box>

                {/* Actual Nav Items */}
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
                    <BottomNavigationAction label="" />
                    <BottomNavigationAction label="Cart" icon={<ShoppingCartSharpIcon />} />
                    <BottomNavigationAction label="Profile" icon={<AccountCircleSharpIcon />} />
                </BottomNavigation>
            </Box>
        </Paper>
    );
}
