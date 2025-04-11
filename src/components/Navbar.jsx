import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const navItem=[
        { label: "Home" , path:"/"},
        { label: "Dive deeper", path: "#dive" },
        { label: "Login", path: "/login" },
        { label: "Signup", path: "/register" },
        { label: "Shop", path: "/shop" },
        { label: "Profile", path: "/profile" },
    ]
    const [showProfile, setShowProfile]=useState(false);
    
    const location = useLocation();
    
    
    useEffect(()=>{
        const isAuth = localStorage.getItem("isLoggedUser");
        setShowProfile(!!isAuth); 
    }, [navigate])


    // console.log(showProfile);
    
    
    // console.log(location.pathname);

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#1e1e1e' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SHOPPE
                </Typography>

                {navItem.map((item, index) => {
                    if (showProfile ) 
                    {
                        if (item.label === 'Login'
                            || item.label === 'Signup'
                        )
                            return null;  
                    }
                    else{
                        if (item.label === 'Profile'
                            || item.label === 'Shop'
                        )
                            return null;  
                    }
                    if (location.pathname === '/profile' || location.pathname === '/shop' || location.pathname === '/cart')
                    {
                            if(item.label==='Dive deeper')
                            {
                                return null;
                            }
                    }
                    // else{

                    // }

                    return (
                        <Box key={index} sx={{ px: 2 }}>
                            <Typography
                                variant="body2"
                                color="info"
                                onClick={() =>{
                                    if (item.label==="Dive deeper") {
                                        const section = document.getElementById("dive");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    } else {
                                    navigate(item.path)       
                                    }
                                }}    
                                sx={{
                                    "&:hover": {
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    );
                })}


            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
