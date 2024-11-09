import {SeriesFormatter, AxisFormatter} from "../components/Informes.jsx";
import Images from "../components/IMAGES.JSX";
import Box from "@mui/material/Box"
export function PaginaInformes(){
    return(
        <>
            <Images />  
            <Box style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                <AxisFormatter />
                <SeriesFormatter />
            </Box> 
            
        </>
);
}