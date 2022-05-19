import { Box, Button, Checkbox, Typography } from "@mui/material";

export default function SxProp({title}){
    return (
    <Box sx={{display: "grid"}}>
        <Box sx={{display: "flex", justifyContent:"center", height: '50px', width: "100%"}}>
            <Checkbox sx={{ml: '10px',  width: "10%"}}/>

            <Typography sx={{color: 'black', 
            fontSize: '14px', 
            ml: '10px',
            mt: '15px',
            width: "80%"}}>
                {title}
            </Typography>

            <Button sx={{
                        height: "20px",
                        background: '#d06e73',
                        mr: '10px',
                        mt: '15px',
                        width: "10%"
                    }}></Button>
        </Box>
        </Box>)
}