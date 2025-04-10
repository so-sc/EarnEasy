import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LabelBottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = React.useState(location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(newValue); // navigate to the selected route
    };

    return (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-0 z-50 rounded-xl sm:bottom-5 max-w-screen">
            <BottomNavigation
                sx={{ width: 500 }}
                value={value}
                onChange={handleChange}
                showLabels
            >
                <BottomNavigationAction
                    label="Home"
                    value="/home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="Explore"
                    value="/explore"
                    icon={<ExploreIcon />}
                />
                <BottomNavigationAction
                    label="Cart"
                    value="/cart"
                    icon={<ShoppingCartIcon />}
                />
                <BottomNavigationAction
                    label="Profile"
                    value="/profile"
                    icon={<AccountCircleIcon />}
                />
            </BottomNavigation>
        </div>
    );
}
