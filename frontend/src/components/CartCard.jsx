import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function CartCard({ img, genre, productName, pricePerHour }) {
    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: '16px',
                boxShadow: theme.shadows[3],
                maxWidth: '280px',
                margin: '0 auto',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardMedia
                component="img"
                image={img}
                alt="Product"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/fallback.png";
                }}
                sx={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'contain',
                    padding: '8px',
                }}
            />
            <CardContent sx={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            color: theme.palette.text.primary
                        }}
                    >
                        {genre}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#30B0C7',
                            fontWeight: 'bold',
                            fontSize: '0.875rem'
                        }}
                    >
                        ${pricePerHour} per/Hr
                    </Typography>
                </div>
                <Typography
                    variant="body2"
                    sx={{
                        color: theme.palette.text.secondary,
                        fontSize: '0.875rem',
                        marginBottom: '16px'
                    }}
                >
                    {productName}
                </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px', padding: '0 16px' }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#30B0C7',
                        color: 'white',
                        fontWeight: 600,
                        padding: '8px 16px',
                        flex: 1,
                        borderRadius: '12px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#2a9bb5',
                            transform: 'scale(1.02)',
                        },
                        transition: 'all 0.2s ease',
                    }}
                >
                    Buy
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#30B0C7',
                        color: 'white',
                        fontWeight: 600,
                        padding: '8px 16px',
                        flex: 1,
                        borderRadius: '12px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#2a9bb5',
                            transform: 'scale(1.02)',
                        },
                        transition: 'all 0.2s ease',
                    }}
                >
                    Rent
                </Button>
            </div>
        </Card>
    );
}
