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

const Gadgets = [
  {
    name: "Mini Projector",
    type: "Entertainment",
    price: 3500,
    image: "/images/gadgets/projector.png",
  },
  {
    name: "VR Headset",
    type: "Entertainment",
    price: 4000,
    image: "/images/gadgets/vr.png",
  },
  {
    name: "Smart Plug",
    type: "Smart Home",
    price: 1500,
    image: "/images/gadgets/smartplug.png",
  },
  {
    name: "Portable Fan",
    type: "Personal Care",
    price: 800,
    image: "/images/gadgets/fan.png",
  },
  {
    name: "LED Lamp",
    type: "Home",
    price: 1000,
    image: "/images/gadgets/lamp.png",
  },
  {
    name: "Smart Scale",
    type: "Fitness",
    price: 2200,
    image: "/images/gadgets/smartscale.png",
  },
  {
    name: "USB Hub",
    type: "Accessories",
    price: 50,
    image: "/images/gadgets/usb.png",
  },
];

const GadgetsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const filteredItems = Gadgets.filter((item) =>
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
            Gadgets
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

export default GadgetsPage;
