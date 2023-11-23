
import { Box, Typography } from "@mui/material"


function TableHeader() {


    return (
        <Box sx={{ height: '10vh', minHeight: '10vh', width: '100vw', display: 'flex', flexDirection: 'column', marginTop:'2em' }}>
            <Box sx={{ height: '3em', display: 'flex', width: '60vw'}}>
                <Box sx={{width:'60vw', display:'flex', marginLeft:'3em', justifyContent:'space-around'}}>
                    <Typography variant="h5" >price</Typography>
                    <Typography variant="h5" >date</Typography>
                    <Typography variant="h5" >delivery</Typography>
                    <Typography variant="h5" >status</Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default TableHeader


