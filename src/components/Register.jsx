import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { AppBar, Modal, Box, Toolbar, Container, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography,CircularProgress, Paper } from "@mui/material";
import GenderSlider from '../minis/GenderSlider';
 
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { padding, style } from '@mui/system';
import useCustomFetch from '../customHook/useCustomFetch';



const Register = () => {



    
    const Nav=useNavigate();
    const [name, setName]= useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [cpass, setCPass]=useState("");
    const [alert, setAlert]=useState("");
    const [nameAlert, setNameAlert]=useState("")
    const [emailAlert, setEmailAlert]=useState("")
    const [passAlert, setPassAlert]=useState("")
    const [cpassAlert, setCPassAlert]=useState("");
    const [tapCount,setTapCount]=useState(3);
    const [selectedGender, setSelectedGender] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const Navigate=useNavigate();
    let genderVal=1;
    const [genderChoice, setGenderChoice] = useState("");

    
    const other=()=>{
        let randomNum=Math.floor(Math.random()*10);
        genderVal+=randomNum;
        // console.log("GENDERVAL=", genderVal);
        
        return genderVal%2==0?"male":"female";
    }



    // console.log(selectedGender);
    const genderLabels = ["male", "female", other()];

    
    // console.log(typeof selectedGender);
    // console.log(genderLabels[selectedGender]);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
        // console.log(typeof event.target.value);
        
        // console.log("Selected Gender:", event.target.value);
    };



    
    useEffect(() => {
        if (!modalOpen) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev < 2) {
                    clearInterval(timer);
                    setModalOpen(false);
                    Nav("/login");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [modalOpen]);

    

    
   
    
    const { data, data2, loading, error } =useCustomFetch(`https://randomuser.me/api/?gender=${genderLabels[selectedGender]}`);
    

     if (loading) return <CircularProgress style={{ display: "block", margin: "20px auto" }} />;


        if (error) return <Typography color="error">Error: {error}</Typography>;
        
    
     const  user = data
        ? {
              gender: data.gender || "",
              name: {
                  title: data.name?.title || "",
                  name:name,
              },
              location: {
                  street: {
                      number: data.location?.street?.number || null,
                      name: data.location?.street?.name || ""
                  },
                  city: data.location?.city || "",
                  state: data.location?.state || "",
                  country: data.location?.country || "",
                  postcode: data.location?.postcode || null,
                  coordinates: {
                      latitude: data.location?.coordinates?.latitude || "",
                      longitude: data.location?.coordinates?.longitude || ""
                  },
                  timezone: {
                      offset: data.location?.timezone?.offset || "",
                      description: data.location?.timezone?.description || ""
                  }
              },
              email:  email  ,
              password:  password ,
              login: {
                  uuid: data.login?.uuid || "",
                  username: data.login?.username || "",
                  password: data.login?.password || "",
                  salt: data.login?.salt || "",
                  md5: data.login?.md5 || "",
                  sha1: data.login?.sha1 || "",
                  sha256: data.login?.sha256 || ""
              },
              dob: {
                  date: data.dob?.date || "",
                  age: data.dob?.age || null
              },
              registered: {
                  date: data.registered?.date || ""
              },
              cell: data.cell || "",
              id: {
                  name: data.id?.name || "",
                  value: data.id?.value || ""
              },
              picture: {
                  large: data.picture?.large || ""
              },
              seed: data2.info.seed || ""  
          }
        : null;  
    
    // console.log(user);
    


    
    console.log(user);
    
    
    // console.log(user);
    
    let flag=false;
    let errorCount=0;

    const handleUsernameEnquiry=()=>{

    }
    

    const handleRegister=()=>{
       
        if (!name?.trim()) 
            {
                setNameAlert("Name cannot be empty");
                errorCount++;
               
            }
            if (!email?.trim()) 
                {
                        setEmailAlert("Email cannot be empty");
                        errorCount++;
                            
                }  
                if (!password?.trim()) 
                    {
                            setPassAlert("Password cannot be empty");
                            errorCount++;
                    }if (!cpass?.trim()) 
                        {
                                setCPassAlert("Confirm password cannot be empty");
                                errorCount++;
                                return;
                        }
                        if (password !== cpass) {
                            setCPassAlert("Passwords do not match!");
                            setTapCount((prevTapCount)=>prevTapCount-1);
                            if(tapCount<3){

                                if( tapCount<1)
                                    {
                                            setAlert("Please try again after some hours")

                                        return;
                                    }

                            setAlert(`Remaining tries left:${tapCount}`)
                            }
                            
                            return;
                        }
                           

                    const emailFetch=localStorage.getItem(email);if (emailFetch) {  
                        const storedEmail = JSON.parse(emailFetch)?.email;  
                    
                        if (email?.trim() === storedEmail) { 
                            setEmailAlert("Email already exists");
                            errorCount++;
                             
                        }
                    }

            
             
                    if(errorCount===0){
                    flag=true;
                    letsCreateObj();}
                    else{
                       console.log("Something went rong");
                    }
       }

      
    const letsCreateObj= async ()=>{

        if(flag){
     
        localStorage.setItem(user.email,JSON.stringify(user));
        localStorage.setItem(user.login.username,JSON.stringify(user));
        localStorage.setItem(user.cell,JSON.stringify(user));
        // console.log("IDHAR TAK AYA ");

            await safalSignup();
         

    }
    else{
        console.log("something went rong bec flaf is untrue");
        
    }

}

 
const safalSignup=async()=>{
    
    setTimeLeft(3);        
    setModalOpen(true); 


//   const timer=  setInterval(() => {
//       setTimeLeft((prev)=>prev-1);
//       if (timeLeft <1)
//         {
//             clearInterval(timer);
//             Nav("/login");
//         }
//     }, 1000);

}

    

   







  return (
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
                    <Button color="inherit" onClick={() => Navigate("/login")}>
                    login
                    </Button>
                </Toolbar>
            </AppBar> */}

         

          <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
              <Paper
                  elevation={6}
                  sx={{
                      p: 4,
                    //   backgroundColor: '#121212',
                      backgroundColor: "#1a1a1a",
                      color: 'white',
                      textAlign: 'center',
                      borderRadius: 2,
                  }}
              >
                  <Typography variant="h5" gutterBottom>
                      Signup
                  </Typography>

                  {alert && <Alert sx={{ my: 1 }} severity="error">{alert}</Alert>}
                  {nameAlert && <Alert sx={{ my: 1 }} severity="error">{nameAlert}</Alert>}
                  {emailAlert && <Alert sx={{ my: 1 }} severity="error">{emailAlert}</Alert>}
                  {passAlert && <Alert sx={{ my: 1 }} severity="error">{passAlert}</Alert>}
                  {cpassAlert && <Alert sx={{ my: 1 }} severity="error">{cpassAlert}</Alert>}

                  <TextField
                      label="Name"
                      fullWidth
                      margin="normal"
                      value={name}
                      variant="outlined"
                      onChange={(e) => {
                          setName(e.target.value);
                          if (nameAlert !== '') setNameAlert('');
                      }}
                      sx={textFieldDarkStyle}
                  />

                  <TextField
                      label="Email"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      value={email}
                      onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailAlert !== '') setEmailAlert('');
                      }}
                      sx={textFieldDarkStyle}
                  />


                  {/* <GenderSlider gender={selectedGender} onChange={setSelectedGender} /> */}
                  <FormControl component="fieldset" sx={{ mt: 2, color: '#fff' }}>
                      <FormLabel component="legend" sx={{ color: '#fff' }}>Gender</FormLabel>
                      <RadioGroup
                          row
                          value={selectedGender}
                          onChange={handleGenderChange}
                          name="gender"
                      >
                          <FormControlLabel
                              value="0"
                              control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#f72585' } }} />}
                              label="Male"
                              sx={{ color: '#fff' }}
                          />
                          <FormControlLabel
                              value="1"
                              control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#f72585' } }} />}
                              label="Female"
                              sx={{ color: '#fff' }}
                          />
                          <FormControlLabel
                              value="2"
                              control={<Radio sx={{ color: '#fff', '&.Mui-checked': { color: '#f72585' } }} />}
                              label="Other"
                              sx={{ color: '#fff' }}
                          />
                      </RadioGroup>
                  </FormControl>






                  <TextField
                      label="Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      value={password}
                      onChange={(e) => {
                          setPassword(e.target.value);
                          if (passAlert !== '') setPassAlert('');
                          if (alert !== '') setAlert('');
                      }}
                      sx={textFieldDarkStyle}
                  />

                  <TextField
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      value={cpass}
                      onChange={(e) => {
                          setCPass(e.target.value);
                          if (cpassAlert !== '') setCPassAlert('');
                          if (alert !== '') setAlert('');
                      }}
                      sx={textFieldDarkStyle}
                  />

                  <Button
                      disabled={tapCount < 0}
                      variant="contained"
                      fullWidth
                      onClick={handleRegister}
                      sx={{
                          mt: 3,
                          py: 1.3,
                          fontWeight: 'bold',
                          backgroundColor: '#f72585',
                          '&:hover': {
                              backgroundColor: '#c9184a',
                          },
                      }}
                  >
                      Sign Up
                  </Button>

                  <Typography variant="body2" sx={{ mt: 2, color: 'gray' }}>
                      Already have an account? <Link to="/login" style={{ color: '#f72585' }}>Login</Link>
                  </Typography>
              </Paper>
          </Container>




<>
{/* yaha pe modal window add kar  */}
              <Modal open={modalOpen}    >
                  <Box
                      sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: '#1e1e1e',
                          color: '#fff',
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 2,
                          minWidth: 300,
                          textAlign: 'center',
                      }}
                  >
                      <Typography variant="h6" mb={2}>
                          Sign up successful 🎉
                      </Typography>
                      <Typography variant="h6" mb={2}>
                          You will be automatically redirected to the login page in just... {timeLeft}
                      </Typography>
                      {/* <Button variant="contained" onClick={handleClose}>
                          Close
                      </Button> */}
                  </Box>
              </Modal>

</>

    </>);
};
const textFieldDarkStyle = {
    '& label': {
        color: 'gray',
    },
    '& input': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#f72585',
        },
    },
};

export default Register