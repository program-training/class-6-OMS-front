import { ExitToApp, PersonAdd } from "@mui/icons-material"
import { AppBar, Box, Button, Typography } from "@mui/material"

interface HeaderProps {
    openSignUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSignUp }) => {



    return (
        <AppBar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100vw', height: '10vh', top: '0', backgroundColor: '#4db6ac', position: 'relative' }}>
            <Box>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');
                </style>
                <Typography variant="h4" fontFamily={'Barlow'} fontStyle={'italic'}>ORDER MANAGEMENT SYSTEM </Typography>
            </Box>
            <Box>
                <Button size="large" variant="contained" sx={{ backgroundColor: '#4db6ac', color: 'white'  }} onClick={openSignUp}><PersonAdd />  Add admin</Button>
                <Button size="large" variant="contained"  sx={{ml:'1em', backgroundColor: '#4db6ac', color: 'white' }}><ExitToApp /> Sign out</Button>
            </Box>
        </AppBar>
    )
}
export default Header