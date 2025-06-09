
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({prod,index}) => {
    return (
        <Card className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <CardMedia
                component="img"
                height="140"
                width="140"
                image={prod.image}
                alt="speakers"
            />
            <CardContent className="p-4">
                <div className="flex justify-between items-baseline">
                    <Typography variant="h5" component="div" className="font-bold">
                      {prod.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ₹{prod.price} per/Hr
                    </Typography>
                </div>
                <Typography variant="body2" color="text.secondary" className="mt-1">
                    {prod.model}
                </Typography>
            </CardContent>
            <div className="flex justify-center mb-4">
                <Button variant="contained"  className="w-full bg-[#007C92]">
                    Order Now
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;