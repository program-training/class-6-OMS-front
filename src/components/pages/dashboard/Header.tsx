import { ExitToApp, PersonAdd } from "@mui/icons-material"
import { AppBar, Box, Button, Typography} from "@mui/material"
function Header() {
    return (
        <AppBar  sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center', width: '100vw', height: '10vh', top: '0',backgroundColor:'#4db6ac', position:'relative'}}>
            <Box>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap');
            </style>
                <Typography variant="h4" fontStyle={'italic'} fontFamily={'Barlow'} >ORDER MANAGEMENT SYSTEM </Typography>
            </Box>
            <Box >
                <Button size="large" sx={{backgroundColor:'#4db6ac', color:'white',marginLeft:'1em'}}><PersonAdd /></Button>
                <Button size="large" sx={{backgroundColor:'#4db6ac', color:'white',marginLeft:'1em'}}><ExitToApp /></Button>
            </Box>
        </AppBar>
    )
}
export default Header