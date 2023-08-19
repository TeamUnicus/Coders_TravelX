import React from 'react'
import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import UseAuth from './hooks/UseAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { blue } from '@mui/material/colors';
import LoginService from '../service/LoginService';

const LogInForm = () => {
    const { auth, setAuth } = UseAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const navigate = useNavigate();
  const colorblue = blue[900];

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleFormSubmit = (values, {resetForm}) => {
   
    console.log(values);
    LoginService.login(values)
    
    .then((response)=>{
        const accessToken = response.accessToken;
        const roles = response.roles;
        const name = response.email;
        const refreshToken = response.refreshToken;
        
        setAuth({ "userName": name, "roles": roles, "accessToken": accessToken , "refreshToken": refreshToken});
        const currentURL = window.location.href;
        const parts = from.split("/");
        const login = parts[1];
        console.log(response)
        const convertedRole = roles;
        const capitalRole = roles;
        if (convertedRole!=login){
            setErrorMessage(capitalRole+" dont have acces to "+login+" content");
          
        }if(accessToken){
            if (roles=="USER"){
              navigate("/")
            }else{
            navigate("/");
            }
        }
    }).catch((error)=>{
        setErrorMessage("Invalid username or email address")
        console.log(error);
    })
    
      resetForm();
  };
  
  return (
    <Box m="10px">
     {/* <Typography variant='h6' sx={{color:'#1a237e', fontWeight:'bold'}}>Login</Typography> */}
      
        {errorMessage && (
        <Box mt="50px">
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}


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
              gap="25px"
              gridTemplateColumns="repeat(4, minmax(0.4fr, 4fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : undefined},
              }}
            >
              
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
            
                LOGIN
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
const checkoutSchema = yup.object().shape({
    email: yup.string().required("User Name is required"),
    password: yup.string().required("Password is required"),
    
  
});
const initialValues = {
   
    email: "",
    password: "",
    
    
};


export default LogInForm