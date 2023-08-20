import React from 'react'
import NavBar from './NavBar';
import useMediaQuery from "@mui/material/useMediaQuery";
import {Box} from '@mui/material';
import Blogs from './Blogs';


const Home = () => {
    const props = useMediaQuery("(min-width:600px)");
    return (
      
         
          <div style={{ width: '100%' }}>
            
            
            <Box sx={{paddingTop:'60', marginTop:'1'}} className="mt-16 ">
            <NavBar />
              {/* HEADER */}
              
              {/* <AddItem /> */}
              {/* <Test/> */}
             
              
              <Blogs/>
              
              </Box>
          
          </div>
        
      );
    };

export default Home