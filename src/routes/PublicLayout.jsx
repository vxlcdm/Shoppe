import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'


 


const PublicLayout = () => {
  return (
    <>
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
          backgroundColor: '#121212',  
          color: '#fff',
        }}
      >
     
    <Navbar/>
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />

      </Box>
     
    <Footer />
    
      </Box>
    </>
  )
}

export default PublicLayout