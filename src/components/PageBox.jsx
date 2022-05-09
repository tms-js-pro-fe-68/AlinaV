import { Box } from '@mui/material'

export default function PageBox(sx, ...otherProps){
    return(
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display:'flex',
                flexDirection: 'column',
                ...sx,
            }}
            {...otherProps}
        />
    )
}