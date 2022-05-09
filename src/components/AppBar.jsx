import { AccountCircle } from '@mui/icons-material'
import { AppBar as MuiAppBar, Box, Toolbar, Typography, IconButton, Menu  } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AppBar(){

    const navigate = useNavigate()

    const navigateToLogin = () => navigate('/login', {replace: true})

    const [anchorEl, setAnchorEl] = useState(null)
    const handleMenu = (event) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null);

    const handleLogOut = () => {
        sessionStorage.token = ''
        sessionStorage.email = ''
        navigateToLogin()
        handleClose()
    }

    return(
        <AppBar position='fixed'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, width: 200 }}>
                    HomePage
                </Typography>
            
                <Box>
                    <IconButton
                        size="large"
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleMenu}
                        color='inherit'
                    >
                        <AccountCircle/>
                    </IconButton>

                        <Menu 
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorDrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={Boolean{anchorEl}}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
                        </Menu>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        <Box sx={{ minHeight: {xs: 56, sm: 64}}}/>
    )
}