import { Button, Checkbox, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function StyledComponent({title}){
    const Container = styled(Box)({
        display: "flex", 
        justifyContent:"center", 
        height: '50px', 
        width: "100%",
    })

    const Input = styled(Checkbox)({
        marginLeft: '10px',  width: "10%"
    })

    const Title = styled(Typography)({
        color: 'black', 
        fontSize: '14px', 
        marginLeft: '10px',
        marginTop: '15px',
        width: "80%"
    })

    const Clicker = styled(Button)({
        height: "20px",
        background: '#85d8ce',
        marginRight: '10px',
        marginTop: '15px',
        width: "10%"
    })
    return(
        <Container>
            <Input/>
            <Title>{title}</Title>
            <Clicker />
        </Container>
    )

}