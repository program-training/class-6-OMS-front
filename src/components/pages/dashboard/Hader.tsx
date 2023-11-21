import { ExitToApp, PersonAdd } from "@mui/icons-material"
import { AppBar, Box, Button, Typography} from "@mui/material"



function Hader() {
    return (
        <AppBar  sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center', width: '100vw', height: '10vh', top: '0',backgroundColor:'#a1887f', position:'relative'}}>
            <Box>
                <Typography variant="h4" fontStyle="italic">inventory managment</Typography>
            </Box>
            <Box>
                <Button size="large" sx={{backgroundColor:'#a1887f', color:'white'}}><PersonAdd /></Button>
                <Button size="large" sx={{backgroundColor:'#a1887f', color:'white'}}><ExitToApp /></Button>
            </Box>
        </AppBar>
    )
}

export default Hader