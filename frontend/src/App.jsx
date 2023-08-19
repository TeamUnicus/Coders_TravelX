import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, cyan, indigo } from '@mui/material/colors';
import RequireAuth from './components/RequireAuth';
import SignupLogInPage from './components/SignupLogInPage';
import Layout from './components/Layout';




function App() {

  const lightTheme = createTheme({
    palette: {
      primary: blue,
      secondary: indigo
    },
  });
  

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline/>
        <Routes>
    <Route path="/" element={<Layout />}> 
    <Route path ="/" element ={<SignupLogInPage props = "signup"/>}/>
    <Route path ="/signup" element ={<SignupLogInPage props = "signup"/>}/>

        </Route>

        </Routes>
    </ThemeProvider>
  )
}

export default App
