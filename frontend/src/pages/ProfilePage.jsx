import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Avatar, Divider, Grid, IconButton } from '@mui/material';
import { Edit, Person, FavoriteBorder, ShoppingCart, CardGiftcard, ContactMail, Logout } from '@mui/icons-material';

const ProfilePage = ({ mode, setMode }) => {
    const navigate = useNavigate();
    const [userinfo, setUserinfo] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem('user-info');
        const finalUserData = JSON.parse(userData);
        setUserinfo(finalUserData);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user-info');
        setUserinfo(null);
        navigate('/');
    };

    const toggleTheme = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: theme => `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 50%)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '64px',
                position: 'relative',
            }}
        >
            {/* Profile Image */}
            <Avatar
                src={userinfo?.picture || "/images/default-profile.png"}
                alt={userinfo?.name}
                sx={{
                    width: 120,
                    height: 120,
                    border: theme => `4px solid ${theme.palette.background.paper}`,
                    position: 'absolute',
                    top: '64px',
                    zIndex: 2,
                }}
            />

            {/* Main Content Box */}
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    width: '90%',
                    maxWidth: '400px',
                    borderTopLeftRadius: '40px',
                    borderTopRightRadius: '40px',
                    marginTop: '80px',
                    padding: 3,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    flexGrow: 1,
                }}
            >
                {/* User Info */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography variant="h6" fontWeight="bold">
                        {userinfo?.name || 'user_name'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {userinfo?.email || 'user@gmail.com'}
                    </Typography>
                    <IconButton
                        size="small"
                        sx={{
                            mt: 1,
                            borderRadius: '20px',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                                transform: 'scale(1.05)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            },
                            '&:active': {
                                borderRadius: '8px', // Less rounded on click
                                transform: 'scale(0.98)',
                            },
                        }}
                    >
                        <Edit fontSize="small" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            Edit Profile
                        </Typography>
                    </IconButton>
                </Box>

                {/* My Inventories Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
                        My inventories
                    </Typography>
                    <Grid container spacing={2} sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<Person />}
                                sx={{
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    backgroundColor: 'background.paper',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    padding: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'primary.main',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                    },
                                }}
                            >
                                My Details
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<FavoriteBorder />}
                                sx={{
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    backgroundColor: 'background.paper',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    padding: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'primary.main',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                    },
                                }}
                            >
                                My Wishlist
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<ShoppingCart />}
                                sx={{
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    backgroundColor: 'background.paper',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    padding: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'primary.main',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                    },
                                }}
                            >
                                My Orders
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={<CardGiftcard />}
                                sx={{
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    backgroundColor: 'background.paper',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    padding: 2,
                                    color: 'text.primary',
                                    borderColor: 'divider',
                                    transition: 'all 0.2s ease-in-out',
                                    '&:hover': {
                                        backgroundColor: 'action.hover',
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderColor: 'primary.main',
                                    },
                                    '&:active': {
                                        transform: 'scale(0.98)',
                                    },
                                }}
                            >
                                My Products
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Other Section */}
                <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle1" fontWeight="medium" sx={{ mb: 2 }}>
                        Others
                    </Typography>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<ContactMail />}
                        sx={{
                            borderRadius: '12px',
                            textTransform: 'none',
                            backgroundColor: 'background.paper',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                            padding: 2,
                            color: 'text.primary',
                            mb: 2,
                            borderColor: 'divider',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                                transform: 'scale(1.02)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                borderColor: 'primary.main',
                            },
                            '&:active': {
                                transform: 'scale(0.98)',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                    <Button
                        variant="contained"
                        onClick={toggleTheme}
                        sx={{
                            width: '100%',
                            mb: 2,
                            borderRadius: '12px',
                            textTransform: 'none',
                            padding: 2,
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                                transform: 'scale(1.02)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            },
                            '&:active': {
                                transform: 'scale(0.98)',
                            },
                        }}
                    >
                        Toggle to {mode === 'light' ? 'Dark' : 'Light'} Mode
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Logout />}
                        onClick={handleLogout}
                        sx={{
                            borderRadius: '12px',
                            textTransform: 'none',
                            backgroundColor: 'background.paper',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                            padding: 2,
                            color: 'text.primary',
                            borderColor: 'divider',
                            transition: 'all 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                                transform: 'scale(1.02)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                borderColor: 'primary.main',
                            },
                            '&:active': {
                                transform: 'scale(0.98)',
                            },
                        }}
                    >
                        Log Out
                    </Button>
                </Box>
            </Box>

            {/* Footer Links */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                    PRIVACY POLICY
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    TERMS & CONDITIONS
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfilePage;