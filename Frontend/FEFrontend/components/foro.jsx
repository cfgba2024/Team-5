import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography as MuiTypography, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Estilo para la barra de búsqueda
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// Datos de las cards
const cardsData = [
  { title: "Profesor Agricultura", subheader: "Septiembre 14, 2016", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" },
  { title: "Profesor Porcino", subheader: "Mayo 3, 2023", image: "https://th.bing.com/th/id/OIP.xl9qEEF5KSuu6h3vnDZP3AHaEP?rs=1&pid=ImgDetMain" },
  { title: "Profesor Bovino", subheader: "Agosto 22, 2022", image: "https://th.bing.com/th/id/OIP.R9TkAiIS08wnXjDgM9MvAAHaE8?rs=1&pid=ImgDetMain" },
  { title: "Profesor Vitinicultura", subheader: "Abril 11, 2019", image: "https://www.cursocatadelvino.com/wp-content/uploads/2020/10/convertirse-en-un-viticultor-.jpg" },
  { title: "Profesor Ovino", subheader: "Febrero 18, 2021", image: "https://th.bing.com/th/id/OIP.ufhjVlxdd6PLF-iYgBoe3AHaEb?rs=1&pid=ImgDetMain" },
  { title: "Profesor Apicultura", subheader: "Junio 7, 2020", image: "https://th.bing.com/th/id/R.9c82c6d1a9850a643afdb1741d4e855a?rik=VpUAZsykz3gdgQ&pid=ImgRaw&r=0" },
  { title: "Profesor Avícola", subheader: "Enero 15, 2018", image: "https://th.bing.com/th/id/OIP.roK1aSYRjU9oFqvKhxsFkgHaF7?rs=1&pid=ImgDetMain" },
  { title: "Profesor Agricultura", subheader: "Julio 23, 2019", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" },
  { title: "Profesor Agricultura", subheader: "Diciembre 30, 2022", image: "https://th.bing.com/th/id/OIP.QLBfSJEjj8dej_il_dW_rgHaE8?rs=1&pid=ImgDetMain" }
];

export default function Foro() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de navegación con color verde oscuro */}
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Foro
          </Typography>

          {/* Barra de búsqueda */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      {/* Grid de Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 3 }}>
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
                <MuiTypography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus nesciunt voluptatem veritatis placeat minima odit earum accusamus, aliquam ipsam nam excepturi impedit eveniet amet, esse doloremque provident! Suscipit, distinctio!
                </MuiTypography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <MuiTypography sx={{ marginBottom: 2 }}>Detalles:</MuiTypography>
                  <MuiTypography sx={{ marginBottom: 2 }}>
                    Detalles adicionales del informe o estudio.
                  </MuiTypography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
