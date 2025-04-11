import React from "react";
import {Box,Grid,Typography,Card,CardContent,CardMedia,Button,Container,Divider,List,ListItem,ListItemText,} from "@mui/material";
import { data, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, decQty,incQty } from "../redux/Slice";



export default function Cart() {

    const selector = useSelector((state) => state.cart.cartArray);

    const dataToRepresent= useSelector((state)=>state.cart);
        const dispatch   =useDispatch();
    let shippingPrice = Math.ceil(dataToRepresent.total * 0.04);
    let shippingPrice1 = Math.floor(dataToRepresent.total * 0.13);
    
    // console.log(dataToRepresent);
    





    const deleteFromCart=(id)=>{
        dispatch(removeCart(id))
    }
    const incrementOfQty = (value) => {
        dispatch(incQty(value))
    }
    const decrementOfQty = (value) => {
        dispatch(decQty(value))
    }
// console.log(selector);



    return (
        <Box sx={{ background: "linear-gradient(to right, #434343, #000000)", minHeight: "100vh", py: 5 }}>

            
 
            <Container>






                <Grid container 
                sx={{pb:2,
                    // border: "5px solid lightblue"
                }}>
                    <Box sx={{
                        my: 2,
                        // border: "solid red 2px",
                        width: "100%"
                    }}>
                        <Link to="/shop">
                            <Button variant="outlined" color="primary">
                                SHOP MORE
                            </Button>
                        </Link>
                    </Box>



                    <Grid item xs={12} sm={8} md={8} lg={8}
                    sx={{
                        width: {
                            xs: "100%",   
                            sm: "100%",  
                            md:"49%"  
                        },
                    }}>
                     



                        <Card sx={{ mb: 5,
                            
                         }}>

                         





                            <CardContent>
                                <Typography variant="h5" gutterBottom
                                sx={{
                                    mb:2,
                                    p:2,
                                    border:"1px solid #ccc",
                                    borderRadius:2,
                                }}>
                                    Cart - {selector.length} items 
                                </Typography>
                                <Divider sx={{ mb: 5 }} />

                                {selector.map((value, index) => (
                                    <React.Fragment key={index}>
                                        <Grid container spacing={5} alignItems="center" sx={{
                                            // height: "360px"

                                        }}>
                                            <Grid item xs={12} sm={3} 
                                            sx={{
                                                width: "40%",
                                            }}>
                                                <CardMedia
                                                    component="img"
                                                    image={value.image}
                                                    alt="Product"
                                                    sx={{ borderRadius: 2,
                                                        width:"200px"
                                                     }}
                                                />
                                            </Grid>

                                            <Grid item xs={12} sm={5}
                                            sx={{
                                                width:"50%",
                                            }}>
                                                <Typography variant="subtitle1" fontWeight="bold">
                                                   {value.title}
                                                </Typography>
                                                <Typography variant="h6">Quantity: <strong>{selector[index].qty}</strong> </Typography>
                                                <Typography variant="body2">Rating: <strong>{selector[index].rating.rate} </strong></Typography>
                                                <Typography variant="body2">People purchased: <strong>{selector[index].rating.count*100}</strong></Typography>

                                                <Box mt={2}>
                                                    <Button variant="contained" size="small" sx={{ mr: 1 }} color="primary"
                                                    onClick={()=>{deleteFromCart(value)}}
                                                    >
                                                        🗑️
                                                    </Button>
                                                    <Button variant="contained" size="small" color="error">
                                                        ❤️
                                                    </Button>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={12} sm={4}>
                                                <Box display="flex" alignItems="center" maxWidth={300}>
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => decrementOfQty(value)}
                                                        sx={{ px: 2, mr: 1 }}
                                                    >
                                                        ➖
                                                    </Button>
                                                    <input
                                                        type="number"
                                                        defaultValue={1}
                                                        min={0}
                                                        style={{ width: 60, textAlign: "center" }}
                                                    />
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => incrementOfQty(value)   }
                                                        
                                                        
                                                        // onClick={() => (sendData(product))}
                                                        sx={{ px: 2, ml: 1 }}
                                                    >
                                                        ➕
                                                    </Button>
                                                </Box>
                                                <Typography align="center" mt={2}>
                                                    <strong>${value.price}</strong>
                                                </Typography>
                                            </Grid>

                                            {/* {console.log(value.id)} */}




                                        </Grid>
                                        {index !== selector.length - 1 && <Divider sx={{ my: 3 }} />}
                                    </React.Fragment>
                                ))}
                            </CardContent>
                        </Card>   
                    </Grid>










                    <Grid item sx={{
                        ml: { xs: 0, sm: "auto" },
                        width: "49%",
                    }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Summary
                                </Typography>
                                <List disablePadding>


                                    <ListItem disableGutters>
                                        <ListItemText primary="Products" />
                                        <Typography>${dataToRepresent.total}</Typography>
                                    </ListItem>



                                    <ListItem disableGutters>
                                       <ListItemText primary="Shipping Domestic : 4%" />
                                        <Typography>${shippingPrice}</Typography>
                                    </ListItem>


                                    <ListItem disableGutters>
                                        <ListItemText primary="Shipping International : 13%" />

                                        <Typography>${shippingPrice1}</Typography>
                                    </ListItem>
                                        



                                    <ListItem disableGutters sx={{ mt: 2 }}>
                                        
                                        <ListItemText>
                                            <Typography fontWeight="bold">Total amount</Typography>
                                            <Typography variant="body2">(including VAT)</Typography>
                                        </ListItemText>
                                        
                                        <Typography fontWeight="bold">${
                                            dataToRepresent.total + shippingPrice
                                        } / ${
                                                dataToRepresent.total + shippingPrice1
                                            } 
                                        </Typography>

                                    </ListItem>




                                </List>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    sx={{ mt: 3 }}
                                >
                                    Go to checkout
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>




                                            </Grid>







                   



















                    <Card   sx={{
                        my:2
                    }}>
                        <CardContent>
                            <Typography variant="body1" fontWeight="bold">
                                We accept
                            </Typography>
                            <Box display="flex" gap={2} mt={1}>
                                {[
                                    "visa.svg",
                                    "amex.svg",
                                    "mastercard.svg",
                                    
                                ].map((src, i) => (
                                    <img
                                        key={i}
                                        width={45}
                                        alt={src.split(".")[0]}
                                        src={`https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/${src}`}
                                    />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>








<br />






                    <Card sx={{ mb: 4 }}>
                        <CardContent>
                            <Typography variant="body1" fontWeight="bold">
                                Expected shipping delivery
                            </Typography>
                            <Typography variant="body2">12.12.2030 - 12.12.2050</Typography>
                        </CardContent>
                    </Card>












            </Container>
        </Box>
    );
}
