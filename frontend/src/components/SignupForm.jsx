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



const SignupForm = () => {
    const { setAuth } = UseAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const navigate = useNavigate();
  const colorblue = blue[900];

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleFormSubmit = (values, {resetForm}) => {
    console.log(values);
    UserService.save(values)
    .then((response)=>{
        console.log(response);
        setSuccessMessage("Verification link has been sent to your email")
    }).catch((error)=>{
        setErrorMessage("Invalid username or email address")
        console.log(error);
    })
    
      resetForm();
  };
  
  return (
    <Box m="10px">
      <Typography variant='h6' sx={{color:'#1a237e', fontWeight:'bold'}}>SIGNUP</Typography>
      
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
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="userName"
                error={touched.firstname && errors.firstname}
                helperText={touched.firstname && errors.firstname}
                sx={{ gridColumn: "span 4" }}
              />

            <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastname}
                name="lastname"
                error={touched.lastname && errors.lastname}
                helperText={touched.lastname && errors.lastname}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              
              
              
              
              
            </Box><br/>
            <Box display="grid" color="primary" variant="contained">
              <Button type="submit" color='secondary' variant='contained' >
            
                SignUp
              </Button>
            </Box>
          </form>
        )}
      </Formik>
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