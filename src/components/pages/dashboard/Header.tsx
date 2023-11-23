import { ExitToApp, PersonAdd } from "@mui/icons-material"
import { AppBar, Box, Button, Typography} from "@mui/material"



interface HeaderProps {
    openSignUp: () => void;
  }

    const Header: React.FC<HeaderProps> = ({ openSignUp }) => {
      
        

    return (
        <div> 

        <AppBar  sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center', width: '100vw', height: '10vh', top: '0',backgroundColor:'#4db6ac', position:'static'}}>
            <Box>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');
            </style>
                <Typography variant="h4" fontFamily={'Barlow'} fontStyle={'italic'}>ORDER MANAGEMENT SYSTEM </Typography>
            </Box>
            <Box>
                <Button size="large" sx={{backgroundColor:'#4db6ac', color:'white'}} onClick={openSignUp}><PersonAdd />  Add admin</Button>
                <Button size="large" sx={{backgroundColor:'#4db6ac', color:'white'}}><ExitToApp /> Sign out</Button>
            </Box>
        </AppBar>
        </div>
    )
}


export default Header