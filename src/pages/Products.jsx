import React from "react";
import { addCart } from "../redux/Slice";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Card, Box, CircularProgress, Paper,CardContent, CardMedia } from '@mui/material';
import useCustomFetch from "../customHook/useCustomFetch"; 
import useCF from "../customHook/useCF";

export default function Products(){


    const[data,setData]=useState([])
    const dispatch=useDispatch();
    const selector=useSelector((state)=>state);

    // console.log(selector.cart.cartArray);
    let countItems=0;

    selector.cart.cartArray.forEach(ele => {

        countItems+=ele.qty;
    });
//   console.log(countItems);
  

    
    const getData=async()=>{
        const response = await fetch("https://fakestoreapi.com/products");
        
        
        const result =await response.json();
        // console.log(result);

        // setData(result)
        // console.log(response)        
    }


    
        const {apiData, loading, error}=useCF("https://fakestoreapi.com/products")
        // console.log(response.apiData);
        
        
//    console.log(loading);
   
        
        useEffect(() => {
            if (apiData) {
                setData(apiData);  
            }

        }, [apiData]);
        
     

    // if (loading) {
    //     return <CircularProgress style={{ display: "block", margin: "20px auto" }} />;
    // }

    // if (error) return <Typography color="error">Error: {error}</Typography>;



    const sendData=(value)=>{
        dispatch(addCart(value));
    }



    useEffect(()=>{
        getData();
    },[]);


    return(<>

    {loading?(
            <CircularProgress style={{ display: "block", margin: "20px auto" }} />
    ):(
        <>
                <Container sx={{
                    // mt: 4,
                    pb: 5,
                    // backgroundColor: '#121212',
                    color: '#ffffff',
                    width: "100%",
                    // border:"2px solid red"
                }}
                    maxWidth={false}>





                    <Box

                        sx={{
                            pt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            // border:"2px solid red",

                        }}>
                        <Typography variant="h4" gutterBottom>
                            🛍️ Products
                        </Typography>

                        <Link to="/cart">
                            <Button variant="outlined" color="primary">
                                Go to Cart  {countItems}
                            </Button>
                        </Link>

                    </Box>


                    <Grid container spacing={2} sx={{
                        mt: 2,
                        // border: "2px solid red",
                        alignContent: "center",
                        justifyContent: "center",
                        // backgroundColor: '#121212',
                    }}>
                        {status === 'loading' ? (
                            <Typography>Loading...</Typography>
                        ) :

                            (
                                data.map((product, index) => (
                                    <Paper key={index}
                                        elevation={6}
                                        sx={{

                                            // backgroundColor: '#121212',
                                            backgroundColor: '#1e1e1e',

                                            color: 'white',

                                            borderRadius: 2,
                                        }}
                                    >

                                        <Card
                                            key={product.id || index}
                                            sx={{
                                                width: 300, height: 370, m: 2,
                                                // border: "3px solid white",
                                                position: "relative",
                                                backgroundColor: '#1e1e1e',
                                                color: '#ffffff',
                                                // boxShadow: '3px 2px 2px 6px rgba(130, 130, 130, 0.6)',
                                                // borderRadius: 3,


                                            }}>
                                            <CardMedia component="img" image={product.image} alt={product.title}
                                                sx={{
                                                    maxHeight: 200,
                                                    objectFit: 'contain',
                                                    width: '100%',
                                                    backgroundColor: '#2a2a2a',
                                                    color: '#ffffff',

                                                }} />
                                            <CardContent >
                                                <Typography variant="h6"
                                                    sx={{
                                                        color: '#ffffff',
                                                        overflow: 'hidden',
                                                        fontSize: "0.9rem",
                                                    }}>
                                                    {product.title}
                                                </Typography>
                                                <Typography variant="body1" sx={{
                                                    top: 325,
                                                    left: 20,
                                                    position: "absolute",
                                                    // color: '#ffffff',
                                                    color: '#90caf9',
                                                }}>${product.price}
                                                </Typography>


                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        top: 320,
                                                        right: 20,
                                                        backgroundColor: '#f72585',
                                                        fontWeight: 'bold',
                                                        position: "absolute",
                                                        '&:hover': {
                                                            backgroundColor: '#c9184a',
                                                        },

                                                    }}
                                                    onClick={() => (sendData(product))}
                                                >
                                                    Add to Cart
                                                </Button>


                                            </CardContent>


                                        </Card>

                                    </Paper>

                                ))
                            )}

                    </Grid>


                    {status === 'loading' ? (
                        <Typography>Loading...</Typography>
                    ) :

                        (

                            <Box sx={{
                                pt: 6,
                                display: "flex",
                                justifyContent: "center",
                                // border:"2px solid red",
                            }}>

                                <Button variant="contained" color="secondary">
                                    LOAD MORE
                                </Button>
                            </Box>)}
                </Container>
        </>
      )
    }
        
 

    </>)

 

}
