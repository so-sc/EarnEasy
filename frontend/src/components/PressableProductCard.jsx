import { useState, useEffect, useRef } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Modal,
  Box
} from "@mui/material";

const PressableProductCard = ({ item }) => {
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
    e.preventDefault();
    clearTimeout(pressTimer.current);
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (pressTimer.current) {
        clearTimeout(pressTimer.current);
      }
    };
  }, []);

  return (
    <>
      <Card
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
        }}
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onMouseLeave={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        onClick={(e) => e.preventDefault()} // Prevent click behavior
      >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.name}
          sx={{
            width: '100%',
            objectFit: 'cover',
            aspectRatio: '16 / 9',
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {item.desc}
          </Typography>
         <Typography variant="h5" color="teal">
         {new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          }).format(item.price)}
         </Typography>

        </CardContent>
      </Card>

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
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // darker shadow
            p: 2,
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            border: 'none', // remove border
            outline: 'none', // remove outline
          }}
        >
          <CardMedia
            component="img"
            image={item.img}
            alt={item.name}
            sx={{
              width: '100%',
              objectFit: 'cover',
              aspectRatio: '16 / 9',
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
            <Typography variant="h4" color="teal">
              {item.price}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PressableProductCard;