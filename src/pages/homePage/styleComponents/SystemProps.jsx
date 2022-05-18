import { Button, Checkbox, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SystemProps({title}){
    return(
        <Box style={{display: "grid"}}>
        <Box style={{display: "flex", justifyContent:"center", height: '50px', width: "100%"}}>
            <Checkbox style={{marginLeft: '10px',  width: "10%"}}/>

            <Typography style={{color: 'black', 
            fontSize: '14px', 
            marginLeft: '10px',
            marginTop: '15px',
            width: "80%"}}>
                {title}
            </Typography>

            <Button style={{
                        height: "20px",
                        borderRadius: '25%',
                        background: '#8169b3',
                        marginRight: '10px',
                        marginTop: '15px',
                        width: "10%"
                    }}></Button>
        </Box>
        </Box>
    )
}