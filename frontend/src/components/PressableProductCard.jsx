import { useState, useEffect, useRef } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Modal,
  Box,
  Button,
  useTheme
} from "@mui/material";

/**
 * PressableProductCard - Shows product cards on the home page
 * Styled to match ExploreCard.jsx but without the Order Now button
 */
const PressableProductCard = ({ item }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const pressTimer = useRef(null);
  const longPressThreshold = 500; // 500ms for long press

  const handlePressStart = (e) => {
    e.preventDefault();
    pressTimer.current = setTimeout(() => {
      setOpen(true);
    }, longPressThreshold);
  };

  const handlePressEnd = (e) => {
    if (e) e.preventDefault();
    clearTimeout(pressTimer.current);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (pressTimer.current) {
        clearTimeout(pressTimer.current);
      }
    };
  }, []);

  // Return null if item data is missing
  if (!item || !item.img) {
    return null;
  }

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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: theme.palette.background.paper,
          // Consistent sizing with ExploreCard
          minHeight: { xs: 300, sm: 320, md: 340 },
          m: 0,
        }}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        onTouchCancel={handlePressEnd}
        onClick={(e) => e.preventDefault()} // Prevent click behavior
      >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.name}
          sx={{
            width: '100%',
            objectFit: 'cover',
            aspectRatio: '16/9',
            minHeight: { xs: 150, sm: 170, md: 180 },
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {item.desc}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            sx={{ mt: 0.5, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
          >
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(item.price)}
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
            {item.name}
          </Typography>
        </CardContent>

        {/* Add to Cart Button */}
        <Box sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            sx={{
              width: '100%',
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'scale(1.02)',
              },
              transition: 'all 0.2s ease',
            }}
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart functionality here
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>

      {/* Modal Preview */}
      <Modal
        open={open}
        onClose={handleModalClose}
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
            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
          }}
        >
          <CardMedia
            component="img"
            image={item.img}
            alt={item.name}
            sx={{
              width: '100%',
              objectFit: 'cover',
              aspectRatio: '16/9',
              borderRadius: 2,
            }}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {item.desc}
            </Typography>
            <Typography variant="h4" color="primary">
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(item.price)}
              <Typography variant="body1" component="span" sx={{ ml: 1 }}>
                per/Hr
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PressableProductCard;