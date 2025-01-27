import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'; // MUI Icon for a Pokémon theme

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* Logo and Title */}
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <CatchingPokemonIcon fontSize="large" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                        Pokémon Card Viewer
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box>
                    <Button color="inherit" component={Link} to="/" sx={{ mx: 1 }}>
                        Home
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
