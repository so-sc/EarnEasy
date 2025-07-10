import React, { useState } from 'react';
import {
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Container,
  Paper,
  Box,
  IconButton,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ExploreCard from '../../components/ExploreCard';

const Electronics = [
  {
    name: "Smartphone",
    type: "Mobile",
    price: 500,
    image: "/images/electronics/smartphone.png",
  },
  {
    name: "Laptop",
    type: "Computing",
    price: 1000,
    image: "/images/electronics/laptop.png",
  },
  {
    name: "Headphone",
    type: "Audio",
    price: 150,
    image: "/images/electronics/headphone.png",
  },
  {
    name: "Smartwatch",
    type: "Wearables",
    price: 250,
    image: "/images/electronics/smartwatch.png",
  },
  {
    name: "Speaker",
    type: "Audio",
    price: 100,
    image: "/images/electronics/speaker.png",
  },
  {
    name: "Power Bank",
    type: "Battery",
    price: 50,
    image: "/images/electronics/powerbank.png",
  },
  {
    name: "Tablet",
    type: "Mobile Computing",
    price: 300,
    image: "/images/electronics/tablet.png",
  },
  {
    name: "Smart TV",
    type: "Entertainment",
    price: 600,
    image: "/images/electronics/smarttv.png",
  },
  {
    name: "Game Console",
    type: "Entertainment",
    price: 400,
    image: "/images/electronics/gaming_console.png",
  },
  {
    name: "Camera",
    type: "Photography",
    price: 350,
    image: "/images/electronics/camera.png",
  },
];

const ElectronicsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const filteredItems = Electronics.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="xl">
      <Box py={4}>
        <Box display="flex" alignItems="center" justifyContent="center" position="relative" mb={3}>
          <IconButton
            onClick={() => navigate('/explore')}
            sx={{
              position: 'absolute',
              left: 0,
              color: 'white'
            }}
            aria-label="back to explore"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            Electronics
          </Typography>
        </Box>

        <Box mb={4} display="flex" justifyContent="center">
          <TextField
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            sx={{ maxWidth: 600 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="medium"
          />
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            '& .MuiGrid-item': {
              display: 'flex',
              justifyContent: 'center',
            }
          }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
                <Box sx={{ width: '100%', maxWidth: 320, height: '100%' }}>
                  <ExploreCard product={product} />
                </Box>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: theme.palette.background.paper
                }}
              >
                <Typography color="text.secondary">
                  No products found.
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ElectronicsPage;
