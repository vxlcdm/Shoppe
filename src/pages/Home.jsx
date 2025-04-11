import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Grid, Box, AppBar, Toolbar, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";



import bgimage from '../assets/bg.jpg'









const products = [
    {
        id: 1,
        title: 'Dark Edition Headphones',
        price: 129.99,
        image: 'https://picsum.photos/seed/headphones/400/300',
    },
    {
        id: 2,
        title: 'Blackout Smartwatch',
        price: 199.99,
        image: 'https://picsum.photos/seed/watch/400/300',
    },
    {
        id: 3,
        title: 'Midnight Sneakers',
        price: 89.99,
        image: 'https://picsum.photos/seed/sneakers/400/300',
    },
];
const Home = () => {
    const navigate = useNavigate();

    const [isAuth,setIsAuth]=useState(false);
    const [userData,setUserData]=useState(null);


  useEffect(()=>{
        const isAauth = localStorage.getItem("isLoggedUser");

        setIsAuth(!!isAauth);
        if(isAauth)
        {
            setUserData(JSON.parse(localStorage.getItem("loggedInUser")));
        }
        
    }, [navigate])
// console.log(isAuth);

// console.log(userData.name.name);



    return (
        <>
            

            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    backgroundColor: '#0f0f0f',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${bgimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    px: 4,
                    py: 8,
                }}
            >
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 'bold',
                            mb: 1,
                            color: '#ffffff',
                            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                        }}
                    >
                        {isAuth ?`Welcome back ${userData.name.name} `: "Welcome to SHOPPE" }
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 6,
                            color: '#cccccc',
                        }}
                    >
                        {isAuth ? `We are pleased to see you back ` : "Deals that you will find nowhere but here."}
                        
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 4,
                            color: '#cccccc',
                        }}
                    >{isAuth ? `We have personalised our store with items of your liking` : "Premium electronics & apparel. Designed for night lovers."}
                        
                    </Typography>
                    <Button
                        variant="contained"
                        component={Link}
                        to="/shop"
                        size="large"
                        sx={{
                            backgroundColor: '#f72585',
                            color: '#fff',
                            px: { xs: 3, sm: 4, md: 5 },
                            py: { xs: 1.2, sm: 1.5, md: 1.8 },
                            fontWeight: 'bold',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            '&:hover': {
                                backgroundColor: '#c9184a',
                            },
                            textTransform: 'none',
                        }}
                        
                    >
                        
                        {isAuth ? "Yes Show Me" : "Start Shopping"}
                    </Button>
                </Box>
            </Box>



            <Box
                id="dive"
                sx={{
                    backgroundColor: '#1a1a1a',
                    py: 6,
                    px: { xs: 2, md: 10 },
                    minHeight: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                
                <Grid container spacing={3} alignItems="center"
                sx={{

                }}>
                    <Grid item xs={12} md={6}sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "49%"
                        },

                    }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                color: '#ffffff',
                                textShadow: '1px 1px 4px rgba(255,255,255,0.1)',
                            }}
                        >
                            Dive Into the Latest Styles
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                color: '#cccccc',
                            }}
                        >
                            Explore our newest arrivals and shop the trendiest collections at unbeatable prices.
                        </Typography>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/shop"
                            size="large"
                            sx={{
                                backgroundColor: '#f72585',
                                '&:hover': {
                                    backgroundColor: '#c9184a',
                                },
                                color: '#fff',
                                px: { xs: 2, sm: 3, md: 4 },
                                py: { xs: 1, sm: 1.2, md: 1.5 },
                                fontWeight: 'bold',
                                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                                textTransform: 'none',
                            }}
                        >
                            {isAuth?"Continue shopping":"Shop Now"}
                        </Button>

                    </Grid>

                    <Grid item xs={12} md={6}
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "49%"
                        },

                    }}>
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            sx={{
                                width: '100%',
                                height: { xs: 250, md: 400 },
                                objectFit: 'cover',
                                borderRadius: 3,
                                boxShadow: '0 0 20px rgba(255,255,255,0.08)',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>



            <Box sx={{
                 backgroundColor: '#121212',
                // backgroundColor: '#1a1a1a',
                 color: '#fff', pt:4, pb: 8 }}>
                {/* Hero Section */}
                <Container sx={{ textAlign: 'center', mb: 6 }}>
                  
                     
                </Container>

                {/* Featured Products */}
                <Container>
                    <Typography variant="h3" sx={{ mb: 8, textAlign: 'center' }}>
                        🖤 Featured Products
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.image}
                                        alt={product.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{product.title}</Typography>
                                        <Typography variant="body1">${product.price.toFixed(2)}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
 
                <Container sx={{ textAlign: 'center', mt: 10 }}>
                    <Typography variant="h5" sx={{ mb: 4 }}>
                        Premium electronics & apparel. Designed for night lovers.
                    </Typography>

                    {!isAuth ? (
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ color: '#fff', borderColor: '#fff' }}
                            component={Link}
                            to="/register"
                        >
                            Join Now
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: '#f72585',
                                color: '#fff',
                                px: { xs: 3, sm: 4 },
                                py: { xs: 1, sm: 1.4 },
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#c9184a',
                                },
                            }}
                            component={Link}
                            to="/shop"
                        >
                            Continue shopping
                        </Button>
                    )}
                </Container>
            </Box>




 


          

                <Box sx={{
                    backgroundColor: '#1a1a1a',

                    // backgroundColor: '#1a1a1a',
                    color: '#fff',  py: 1
                }}>


                <Container sx={{ textAlign: 'center', mt: 12, mb: 8 }}>
                    <Typography
                        variant="h3"
                        sx={{

                            fontWeight: 'bold',
                            color: '#ffffff',
                            mb: 3,
                            textShadow: '1px 1px 5px rgba(255,255,255,0.2)'
                        }}
                    >
                        ⚡ Why Shop With Us?
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#bbbbbb',
                            maxWidth: 800,
                            margin: '0 auto',
                            mb: 6,
                        }}
                    >
                        Thousands of happy customers. Sleek tech. Lightning-fast delivery.
                        Join the dark side — where style meets innovation.
                    </Typography>
                    

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Box
                                sx={{
                                    backgroundColor: '#1e1e1e',
                                    p: 4,
                                    borderRadius: 3,
                                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    🚚 Fast & Free Shipping
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#aaaaaa' }}>
                                    Get your gear in record time. No hidden fees. No waiting games.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box
                                sx={{
                                    backgroundColor: '#1e1e1e',
                                    p: 4,
                                    borderRadius: 3,
                                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    🛡️ 24/7 Customer Support
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#aaaaaa' }}>
                                    Questions? Issues? Our dark knights are ready to help you anytime.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box
                                sx={{
                                    backgroundColor: '#1e1e1e',
                                    p: 4,
                                    borderRadius: 3,
                                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                                }}
                            >
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    🌟 Trusted by Thousands
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#aaaaaa' }}>
                                    Rated 4.9+ by real users. We're not just selling — we're building loyalty.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Container>
           </Box>

















            









        </>
    );
};

export default Home;
