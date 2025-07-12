// import React from 'react'

// const CartPage = () => {

//     return (
//         <div className="flex flex-col items-center justify-center gap-5 p-5">
//             <h1 className="text-5xl">Cart</h1>
//         </div>
//     )
// }

// export default CartPage


import image from "../../public/images/order_not_found.png";
import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Box, Typography } from '@mui/material';
import CartCard from "../components/CartCard";
import ordersdata from "../dummyData/ordersdata.json";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    setProducts(ordersdata);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Box py={4}>
          {/* Header */}
          <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              textAlign="center"
              style={{ color: theme.palette.text.primary }}
            >
              Cart
            </Typography>
          </Box>

          {/* Content */}
          {products.length === 0 ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                minHeight: { xs: '60vh', md: '70vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src={image} alt="Cart Empty" className="w-64 mb-6" />
              <Typography
                variant="h6"
                style={{ color: theme.palette.text.secondary }}
              >
                Your Cart is empty!!!!
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 'auto', md: '70vh' },
                width: '100%'
              }}
            >
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                  '& .MuiGrid-item': {
                    display: 'flex',
                    justifyContent: 'center',
                  },
                  maxWidth: '100%',
                  margin: '0 auto'
                }}
              >
                {products.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={index}>
                    <Box sx={{ width: '100%', maxWidth: 320, height: '100%' }}>
                      <CartCard
                        img={product.image}
                        genre={product.genre}
                        productName={product.productName}
                        pricePerHour={product.pricePerHour}
                        quantity={product.quantity}
                        orderStatus={product.orderStatus}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}
