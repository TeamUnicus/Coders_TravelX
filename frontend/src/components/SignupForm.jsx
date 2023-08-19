import React from 'react'
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import UseAuth from './hooks/UseAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';


import { blue } from '@mui/material/colors';
import UserService from '../service/UserService';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const SignupForm = () => {
    const { setAuth } = UseAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const navigate = useNavigate();
  const colorblue = blue[900];

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
const [successSubmit, setSuccessSubmit] = useState(false);

const handleSubmitDialogClose = () => {
    setSuccessMessage(false);
}

const handleLogin = ()=>{
    navigate("/login")
}

  const handleFormSubmit = (values, {resetForm}) => {
    console.log(values);
    UserService.save(values)
    .then((response)=>{
        console.log(response);
        setSuccessMessage("Verification link has been sent to your email");
        setSuccessSubmit(true);
        setErrorMessage("");
    }).catch((error)=>{
        setErrorMessage("Invalid username or email address")
        setSuccessMessage("")
     
        console.log(error);
    })
    
      resetForm();
  };
  
  return (
    <Box m="10px" >
        <div className="my-5 flex items-center justify-center">
      <Typography variant='h6' sx={{color:'#212121', fontWeight:'bold', margin: 'auto'}}>Create Your Account</Typography>
      </div>
      
         {errorMessage && (
        <Box mt="50px">
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </Box>
        
      )}{/*
      {successMessage && (
            <Box mt="50px">
              <Typography variant="body1" color="error">
                {successMessage}
              </Typography>
            </Box>
      )} */}


      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstname}
                name="firstname"
                error={touched.firstname && errors.firstname}
                helperText={touched.firstname && errors.firstname}
                sx={{ gridColumn: "span 4", backgroundColor:"#f3e5f5", borderRadius: "15px",
                border: "1px solid #f3e5f5", height: isNonMobile ? "55px" : "48px", paddingLeft:'10px',
                
            }}
            InputProps={{
                disableUnderline: true,
              }}
                
              />

            <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
                name="lastname"
                error={touched.lastname && errors.lastname}
                helperText={touched.lastname && errors.lastname}
                sx={{ gridColumn: "span 4", backgroundColor:"#f3e5f5", borderRadius: "15px",
                border: "1px solid #f3e5f5", height: isNonMobile ? "55px" : "48px", paddingLeft:'10px',
                
            }}
            InputProps={{
                disableUnderline: true,
              }}
              />

              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4", backgroundColor:"#f3e5f5", borderRadius: "15px",
                border: "1px solid #f3e5f5", height: isNonMobile ? "55px" : "48px", paddingLeft:'10px',
                
            }}
            InputProps={{
                disableUnderline: true,
              }}
              />
              <TextField
                fullWidth
                variant="standard"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4", backgroundColor:"#f3e5f5", borderRadius: "15px",
                border: "1px solid #f3e5f5", height: isNonMobile ? "55px" : "48px", paddingLeft:'10px',
                
            }}
            InputProps={{
                disableUnderline: true,
              }}
              />
              
              
              
              
              
            </Box><br/>
           
            <Box display="grid" color="primary" variant="contained">
              <Button type="submit" color='secondary' variant='contained' >
            
                SignUp
              </Button>
              
            </Box>
            <div className="flex items-center justify-center">
      <Typography variant='subtitle2' sx={{color:'#212121', fontWeight:'bol', margin: 'auto'}}>Already have an Account? 
      <Link href="http://localhost:5173/login" underline="always">
        {' LogIn"'}
      </Link>
      </Typography>
      </div>
          </form>
          
        )}
      </Formik>

      {/* for popup dialog */}
    <Dialog
        open={successSubmit}
        onClose={handleSubmitDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Check your mail"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Verification link has been sent to your mail address. 
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleLogin} autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>


    </Box>


    


  );
};
const checkoutSchema = yup.object().shape({
    firstname: yup.string().required("First Name is required"),
    lastname: yup.string().required("Last Name is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().email("Invalid email format").required("Email is required")

 
  
});
const initialValues = {
   
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    roles: "USER"
    
};

export default SignupForm