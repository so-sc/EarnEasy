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
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const navigate = useNavigate();

  const filteredItems = Vehicles.filter((item) =>
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
            Vehicles
          </Typography>
        </Box>

        <Box mb={4} display="flex" justifyContent="center">
          <TextField
            placeholder="Search vehicles..."
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
                  No vehicles found.
                </Typography>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default VehiclesPage;
