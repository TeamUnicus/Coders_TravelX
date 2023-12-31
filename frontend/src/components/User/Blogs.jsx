import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Typography } from '@mui/material';
import BlogService from '../../service/BlogService'
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Blogs = () => {
const [itemData, setItemData] = useState([]);
const [url, seturl] = useState();
const navigate = useNavigate();
//const itemData = []
const handleDetail =(id)=>{
  navigate(`/blog/?id=${id}`)
  
}




useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await BlogService.getall();
    
    const newItems = response.data.map(e => ({
      title: e.title,
      img: byteArrayToImage(e.data)
    }));

    setItemData(newItems);
            
       
            
       
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }console.log(itemData)
      
      
    };
    fetchData();
  }, []);
  function byteArrayToImage(byte) {
    const decodedData = atob(byte);

      // Create a Uint8Array from the decoded data
      const byteArray = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      seturl(imageUrl);
      return imageUrl;
  }


  return (
    <div style={{ height: '100vh', overflow: 'auto' }}>
    <ImageList sx={{ width: '100%'}} rowHeight={250} gap={10}cols={3}>
    
      {/* <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem> */}
      {itemData.map((item) => (
    
        <ImageListItem key={item.img}>
          <img
            src={item.img} 
            style={{height:'200px'}}
           
            alt={item.title}
            loading="la"
          />
          <ImageListItemBar
           title={
            <Typography variant="subtitle1" sx={{ color: '#212121' }}>
              {item.title}
            </Typography>
          }
            subtitle={item.title}

            
          
            sx={{backgroundColor:'#e8eaf6'}}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Button onClick={()=>handleDetail(item.title)} color='secondary' variant='contained'>
            
            Details
          </Button>
              </IconButton>
            }
          />
        </ImageListItem>
       
    
      ))}
      </ImageList>
    
    </div>
  )
}

export default Blogs