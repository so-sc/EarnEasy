import React, { useState, useRef, useEffect } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Modal,
  useTheme
} from '@mui/material';

/**
 * ExploreCard - A product card component specifically for explore pages
 * Combines styling from ProductCard.jsx and press-to-preview from PressableProductCard.jsx
 */
const ExploreCard = ({ product }) => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const pressTimer = useRef(null);
  const longPressThreshold = 500; // 500ms for long press

  // Handle press events for modal preview
  const handlePressStart = (e) => {
    e.preventDefault();
    pressTimer.current = setTimeout(() => {
      setModalOpen(true);
    }, longPressThreshold);
  };

  const handlePressEnd = (e) => {
    if (e) e.preventDefault();
    clearTimeout(pressTimer.current);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (pressTimer.current) {
        clearTimeout(pressTimer.current);
      }
    };
  }, []);

  return (
    <>
      {/* Product Card */}
      <Card
        elevation={3}
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: 6,
            transform: 'scale(1.02)',
            borderColor: 'primary.main',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
          height: '100%', // Ensures the card fills the container height
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: theme.palette.background.paper,
          // Make the card bigger with minimum height
          minHeight: { xs: 300, sm: 320, md: 340 },
          // Explicitly set margins to 0 to avoid any unexpected spacing
          m: 0,
        }}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        onTouchCancel={handlePressEnd}
        onClick={(e) => e.preventDefault()} // Prevent click behavior to match PressableProductCard
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            width: '100%',
            objectFit: 'cover',
            aspectRatio: '16/9', // Match the aspect ratio from PressableProductCard
            minHeight: { xs: 150, sm: 170, md: 180 }, // Ensure minimum height for the image
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {product.type}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            sx={{ mt: 0.5, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(product.price)}
            <Typography variant="caption" component="span" color="text.secondary" sx={{ ml: 0.5 }}>
              per/Hr
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            fontWeight="bold"
            sx={{ mt: 1, fontSize: { xs: '1rem', sm: '1.1rem' } }}
          >
            {product.name}
          </Typography>
        </CardContent>

        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark
              },
              borderRadius: 3,
              textTransform: 'none',
              fontWeight: 'bold',
              py: 1.2, // Increased padding to make the button taller
              fontSize: '1rem', // Larger font size for the button
            }}
          >
            Order Now
          </Button>
        </CardActions>
      </Card>

      {/* Modal Preview */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="product-modal"
        aria-describedby="product-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            p: { xs: 2, sm: 3 },
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            border: 'none',
            outline: 'none',
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, // Made modal wider
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{
              width: '100%',
              objectFit: 'cover',
              aspectRatio: '16/9',
              borderRadius: 2,
            }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.type}
            </Typography>
            <Typography variant="h4" color="primary">
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(product.price)}
              <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                per/Hr
              </Typography>
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.5,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark
                },
                borderRadius: 3,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ExploreCard;
