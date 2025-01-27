import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CircularProgress, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { fetchCards } from './features/pokemon/slice/PokemonSlice';

const CardList = () => {
    const dispatch = useDispatch();
    const { cards, status, error } = useSelector((state) => state.cards);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCards());
        }
    }, [dispatch, status]);

    if (status === 'loading') return <CircularProgress style={{ margin: 'auto', display: 'block' }} />;
    if (status === 'failed') return <Typography color="error">{error}</Typography>;

    return (
        <Grid container spacing={4} style={{ padding: '20px' }}>
            {cards.map((card) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                    <Card
                        sx={{
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                            },
                        }}
                        elevation={3}
                    >
                        {/* Display the card's image */}
                        {card.images?.large && (
                            <CardMedia
                                component="img"
                                height="300"
                                image={card.images.large}
                                alt={card.name}
                                sx={{ borderRadius: '8px 8px 0 0' }}
                            />
                        )}
                        <CardContent>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#333',
                                    textAlign: 'center',
                                    marginBottom: '8px',
                                }}
                            >
                                {card.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#777', textAlign: 'center', marginBottom: '8px' }}
                            >
                                Release Date: {card.set.releaseDate || 'N/A'}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}
                            >
                                <Link
                                    to={`/card/${card.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#1976d2',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = '#004ba0')}
                                    onMouseLeave={(e) => (e.target.style.color = '#1976d2')}
                                >
                                    View Details
                                </Link>
                            </Typography>
                        </CardContent>

                        {/* Display the logo below the card's image */}
                        {card.set?.images?.logo && (
                            <CardContent sx={{ textAlign: 'center', marginTop: '10px' }}>
                                <img
                                    src={card.set.images.logo}
                                    alt={`Logo for ${card.name}`}
                                    style={{ maxWidth: '100px', maxHeight: '50px' }}
                                />
                            </CardContent>
                        )}
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default CardList;
