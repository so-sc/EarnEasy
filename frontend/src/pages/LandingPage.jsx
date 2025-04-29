import React from "react";
import {
    Container,
    Typography,
    Box,
    Grid,
    Button,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CategoriesBar from "../components/CategoriesBar.jsx";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/auth');
    };

    // const categories = [
    //     {
    //         name: "Power Bank",
    //         price: "₹150 per/hr",
    //         img: "/images/powerbank.jpeg",
    //     },
    //     {
    //         name: "Speakers",
    //         price: "₹120 per/hr",
    //         img: "/images/speaker.jpeg",
    //     },
    //     {
    //         name: "Smartwatches",
    //         price: "₹150 per/hr",
    //         img: "/images/watch.jpeg",
    //     },
    // ];

    return (
        <Box sx={{ bgcolor: "#fff", fontFamily: "'Poppins',sans-serif", color: "black" }}>
            {/* Header */}
            <Box sx={{
                background: "linear-gradient(to bottom,#7affff,#ffffff)",
                textAlign: "center",
                py: 6,
            }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h2"
                        fontWeight="bold"
                        textAlign="center"
                        mb={4}
                        sx={{ fontFamily: "'Playfair Display',serif" }}
                    >
                        Earn Easy
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 4,
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/hero.png"
                            alt="Hero"
                            sx={{
                                width: 200,
                                borderRadius: "50%",
                                boxShadow: 3,
                                background: "#2ff2fd",
                                mb: 10
                            }}
                        />
                    </Box>
                    <Typography variant="h4" fontWeight="bold">
                        Buy & Sell Anything, Anytime <br />– The Easy Way
                    </Typography>
                    <Typography variant="body1" mt={2}>
                        Welcome to Earn Easy, the ultimate marketplace where you can earn by
                        selling your stuff or save by buying pre-loved items at great prices.
                    </Typography>
                </Container>
            </Box>

            {/* How it works */}
            <Box py={6} bgcolor="#f7fbff">
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    mb={4}
                    sx={{ fontFamily: "'Playfair Display',serif" }}
                >
                    How It Works...
                </Typography>
                <Container maxWidth="md">
                    <Grid container spacing={3} justifyContent="center">
                        {["Create an Account", "List or Find Items", "Connect & Earn"].map(
                            (step, i) => (
                                <Grid key={i} item xs={12} sm={4}>
                                    <Box
                                        sx={{
                                            bgcolor: "#e3f2fd",
                                            p: 2,
                                            borderRadius: 2,
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            Step {i + 1}: {step}
                                        </Typography>
                                        <Typography variant="body2" mt={1}>
                                            {i === 0 && " Hildegard up in seconds and set up your profile."}
                                            {i === 1 &&
                                                "Post items for sale or browse through a variety of categories."}
                                            {i === 2 &&
                                                "Chat securely, finalize deals, and earn easy!"}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        )}
                    </Grid>

                    {/* Reasons */}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        mb={3}
                        mt={10}
                    >
                        3 reasons to choose us...
                    </Typography>
                    <Grid container spacing={6} alignItems="center" mb={10}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                Fast & Simple Listings
                            </Typography>
                            <Typography variant="body2">
                                Sell anything in under a minute.
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                                Local & Global Reach
                            </Typography>
                            <Typography variant="body2">
                                Sell to people nearby or ship nationwide.
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
                                Safe Transactions
                            </Typography>
                            <Typography variant="body2">
                                Verified users and in-app messaging for safety.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src="/images/3finger.png"
                                    alt="Why Us"
                                    sx={{
                                        borderRadius: "50%",
                                        width: 150,
                                        bgcolor: "#2ff2fd",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Categories */}
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        mb={3}
                    >
                        Categories We Support
                    </Typography>
                    <CategoriesBar />
                    {/* Optional: Uncomment to use Grid for categories with centered images */}
                    {/*
                    <Grid container spacing={2} mb={5} justifyContent="center">
                        {categories.map((item, i) => (
                            <Grid key={i} item xs={12} sm={4}>
                                <Card sx={{ borderRadius: 3, textAlign: "center" }}>
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <CardMedia
                                            component="img"
                                            image={item.img}
                                            alt={item.name}
                                            sx={{ height: 150, width: '100%', maxWidth: 200, objectFit: 'cover' }}
                                        />
                                    </Box>
                                    <CardContent>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    */}

                    {/* Call to Action */}
                    <Box
                        textAlign="center"
                        p={4}
                        borderRadius={4}
                        sx={{
                            background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            Ready to start earning the easy way?
                        </Typography>
                        <Typography variant="body1" mt={1}>
                            Join thousands of users already buying and selling smarter.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ mt: 2, px: 4, borderRadius: 5 }}
                            color="primary"
                            onClick={handleSignUpClick}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;