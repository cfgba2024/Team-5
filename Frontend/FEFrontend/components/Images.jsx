import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "../components/Styles/images.css";

import Grid from '@mui/material/Grid2';

export default function Images() {
  return (
    <Grid container spacing={2} alignItems="flex-start">
      {/* Contenedor de imágenes */}
      <Grid item xs={8} sx={{ padding: 2 }}>
        <ImageList 
          sx={{ 
            width: '100%', 
            height: 200,
          }} 
          cols={3} 
          rowHeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>

      {/* Contenedor de texto */}
      <Grid item xs={4} sx={{ padding: 2 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt repudiandae placeat ea eum error eius iure minima modi suscipit, deserunt maiores, sit molestiae voluptate facilis autem nam dicta cum.
        </p>
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  }
];
