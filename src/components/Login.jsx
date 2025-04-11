import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {   Button  , AppBar, Toolbar   } from "@mui/material";
import { Navigate, useNavigate,Link } from 'react-router-dom';
import Profile from '../pages/Profile';

const Login = () => {
    const Nav=useNavigate();
    const[email, setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [alert,setAlert]=useState("");
    const [emailAlert, setEmailAlert]=useState();
    const [passAlert, setPassAlert]=useState();
    const [success, setSuccess]=useState();
    const Navigate=useNavigate();
     



    let flag=false;
    let errorCount=0;
    const handleLogin=()=>
    {
        if(!email)
        {
            setEmailAlert("Email cannot be empty");
            errorCount++;
        }
        if(!pass)
        {
            setPassAlert("Password cannot be empty")
            errorCount++;
        }
        if(errorCount==0)
        {
            flag=true;
            letsLogin();
        }
        else{
            // setAlert("Something went wrong");
        }

    }
const letsLogin=()=>{
     const fetchedItem= localStorage.getItem(email);
     if(fetchedItem)
     {
        const parsedData = JSON.parse(fetchedItem);
        const tPass=JSON.parse(fetchedItem).password;
        const tEmail=JSON.parse(fetchedItem).email;

        if( email===tEmail &&  pass === tPass)
        {
            localStorage.setItem("isLoggedUser",true);
            localStorage.setItem("loggedInUser", JSON.stringify(parsedData));
            
            Nav("/profile");
            
        }
        else{
            setAlert("Invalid credentials");
        }
     }
     else{
        setAlert("Invalid user");
     }
}




















  return  (
     <>
       
       {/* Navbar */}
       {/* <AppBar position="static" sx={{ backgroundColor: "#212121" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        LOGO
                    </Typography>
                   
                    <Button color="inherit" onClick={() => Navigate("/")}>
                    Home
                    </Button>
                    <Button color="inherit" onClick={() => Navigate("/register")}>
                    Signup
                    </Button>
                </Toolbar>
            </AppBar> */}

          <Container component="main" maxWidth="xs">
              <Paper elevation={3} style={style.pages}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#fff' }}>
                      Login
                  </Typography>

                  {alert && <Alert sx={style.alert} severity="error">{alert}</Alert>}
                  {emailAlert && <Alert sx={style.alert} severity="error">{emailAlert}</Alert>}
                  {passAlert && <Alert sx={style.alert} severity="error">{passAlert}</Alert>}

                  <TextField
                      sx={{
                          color: 'white',
                          bgcolor:"#1212",
                          input: { color: 'white' },  
                          label: { color: 'gray' },   
                          '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                  borderColor: 'gray',  
                              },
                              '&:hover fieldset': {
                                  borderColor: 'white',  
                              },
                              '&.Mui-focused fieldset': {
                                  borderColor: '#f72585',}}
                      }}
                      id="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={email}
                      onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailAlert !== "") {
                              setEmailAlert("");
                              setAlert("");

                          }
                          if (setAlert !== "") {
                              setAlert("");

                          }
                      }} />

                  <TextField
                      id="password"
                      label="Password"
                      type="password"
                      sx={{
                          color: 'white',
                          bgcolor: "#1212",
                          input: { color: 'white' },  
                          label: { color: 'gray' },  
                          '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                  borderColor: 'gray', 
                              },
                              '&:hover fieldset': {
                                  borderColor: 'white',  
                              },
                              '&.Mui-focused fieldset': {
                                  borderColor: '#f72585',
                              }
                          }
                      }}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={pass}
                      onChange={(e) => {
                          setPass(e.target.value);
                          if (passAlert !== "") {
                              setPassAlert("");
                          }
                          if (setAlert !== "") {
                              setAlert("");

                          }
                      }}>
                  </TextField>

                  <Button
                      variant="contained"
                      fullWidth
                      onClick={handleLogin}
                      sx={style.button}
                  >
                      Login
                  </Button>

                  <Typography variant="body2" sx={style.cb}>
                      Don't have an account?{" "}
                      <Link to="/register" style={{ color: '#90caf9' }}>Signup</Link>
                  </Typography>
              </Paper>
          </Container>

    
     </>
  )
}
const style = {
    pages: {
        padding: "30px",
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        borderRadius: "12px",
    },
    cb: {
        marginTop: "10px",
        color: "#ccc",
    },
    button: {
        marginTop: "20px",
        backgroundColor: "#f72585",
        fontWeight: "bold",
        color: "#fff",
        '&:hover': {
            backgroundColor: "#c9184a",
        },
    },
    alert: {
        marginTop: "10px",
    },
    
     
    
};

export default Login