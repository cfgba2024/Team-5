import * as React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, IconButton, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Foro() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Datos de las cards (esto lo puedes modificar según necesites)
  const cardsData = [
    { title: "Profesor Agricultura", subheader: "Septiembre 14, 2016", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" },
    { title: "Profesor Porcino", subheader: "Mayo 3, 2023", image: "https://th.bing.com/th/id/OIP.xl9qEEF5KSuu6h3vnDZP3AHaEP?rs=1&pid=ImgDetMain" },
    { title: "Profesor Bovino", subheader: "Agosto 22, 2022", image: "https://th.bing.com/th/id/OIP.R9TkAiIS08wnXjDgM9MvAAHaE8?rs=1&pid=ImgDetMain" },
    { title: "Profesor Vitinicultura", subheader: "Abril 11, 2019", image: "https://www.cursocatadelvino.com/wp-content/uploads/2020/10/convertirse-en-un-viticultor-.jpg" },
    { title: "Profesor Ovino", subheader: "Febrero 18, 2021", image: "https://th.bing.com/th/id/OIP.ufhjVlxdd6PLF-iYgBoe3AHaEb?rs=1&pid=ImgDetMain" },
    { title: "Profesor Apucultura", subheader: "Junio 7, 2020", image: "https://th.bing.com/th/id/R.9c82c6d1a9850a643afdb1741d4e855a?rik=VpUAZsykz3gdgQ&pid=ImgRaw&r=0" },
    { title: "Profesor Avícola", subheader: "Enero 15, 2018", image: "https://th.bing.com/th/id/OIP.roK1aSYRjU9oFqvKhxsFkgHaF7?rs=1&pid=ImgDetMain" },
    { title: "Profesor Agricultura", subheader: "Julio 23, 2019", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" },
    { title: "Profesor Agricultura", subheader: "Diciembre 30, 2022", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" }
  ];

  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Mapeamos sobre el array de datos para crear las cards */}
      {cardsData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
              title={card.title}
              subheader={card.subheader}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt="Informe"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus nesciunt voluptatem veritatis placeat minima odit earum accusamus, aliquam ipsam nam excepturi impedit eveniet amet, esse doloremque provident! Suscipit, distinctio!
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Detalles:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  Detalles adicionales del informe o estudio.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
