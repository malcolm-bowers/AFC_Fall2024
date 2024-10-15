import * as React from 'react';
import { useState } from 'react';
import {
    alpha,
    AppBar,
    Box,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'Now Playing', path: '/results' },
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function NavBar({ onSearchResults }) {
    const navigate = useNavigate();
    const [searchData, setSearchData] = useState('');
    const [anchorElNav, setAnchorElNav] = useState(null);

    const { VITE_TMDB_API_TOKEN } = process.env;

    // Handle search submit when user presses Enter
    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: {
                        query: searchData,
                        include_adult: 'false',
                        language: 'en-US',
                        page: 1
                    },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
                    }
                });
                onSearchResults(response.data.results);
                setSearchData(''); // Clear search input
            } catch (err) {
                console.log("Search error: ", err);
                navigate('../Error'); // Navigate to error page
            }
        }
    };

    // Handle mobile navigation menu open/close
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'black', color: 'red', borderRadius: 3 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            color: 'inherit',
                            fontWeight: 700,
                        }}
                    >
                        Powered by TMDB
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                component={Link} // Use Link as component for Button
                                to={page.path} // Set path for navigation
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Search Bar */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchData}
                            onChange={(e) => setSearchData(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
