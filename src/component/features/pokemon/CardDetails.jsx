import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Card, CardContent, CardMedia, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const CardDetails = () => {
    const { id } = useParams();
    const card = useSelector((state) =>
        state.cards.cards.find((card) => card.id === id)
    );

    if (!card) return <Typography variant="h6" color="error" align="center">Card not found</Typography>;

    return (
        <Box sx={{ maxWidth: '1200px', margin: 'auto', padding: '20px' }}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 5, borderRadius: '10px', overflow: 'hidden' }}>
                {/* Card Image */}
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {card.images?.large && (
                        <CardMedia
                            component="img"
                            image={card.images.large}
                            alt={card.name}
                            sx={{
                                maxHeight: '450px',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: 3,
                            }}
                        />
                    )}
                </Grid>

                {/* Card Details */}
                <Grid item xs={12} md={7}>
                    <CardContent sx={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', color: '#3f51b5' }}>
                            {card.name}
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: '20px', fontStyle: 'italic' }}>
                            <strong>Set:</strong> {card.set.name}
                        </Typography>

                        {/* Set Logo */}
                        {card.set?.images?.logo && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                                <Typography variant="body1" sx={{ marginRight: '10px', fontWeight: 'bold' }}>
                                    <strong>Set Logo:</strong>
                                </Typography>
                                <img
                                    src={card.set.images.logo}
                                    alt={`Logo for ${card.name}`}
                                    style={{
                                        maxWidth: '120px',
                                        maxHeight: '60px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        )}

                        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                            <strong>Release Date:</strong> {card.set.releaseDate || 'N/A'}
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                            <strong>Supertype:</strong> {card.supertype}
                        </Typography>

                        {/* Card Types */}
                        {card.types && (
                            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                <strong>Types:</strong> {card.types.join(', ')}
                            </Typography>
                        )}

                        {/* Card HP */}
                        {card.hp && (
                            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                <strong>HP:</strong> {card.hp}
                            </Typography>
                        )}

                        {/* Abilities */}
                        {card.abilities && card.abilities.length > 0 && (
                            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                                <strong>Abilities:</strong> {card.abilities.map((ability) => ability.name).join(', ')}
                            </Typography>
                        )}

                        {/* Button to go back */}
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '20px',
                                borderRadius: '8px',
                                '&:hover': {
                                    backgroundColor: '#3f51b5',
                                },
                            }}
                            onClick={() => window.history.back()}
                        >
                            Go Back
                        </Button>
                    </CardContent>
                </Grid>
            </Card>
        </Box>
    );
};

export default CardDetails;
