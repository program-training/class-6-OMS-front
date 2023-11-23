import { Box, Typography} from "@mui/material"


function TableHeader() {


    return (
        <Box sx={{ height: '10vh', minHeight: '10vh', width: '100vw', display: 'flex', flexDirection: 'column', marginTop:'2em' }}>
            <Box sx={{ height: '3em', display: 'flex', width: '74.4vw'}}>
                <Box sx={{width:'70vw', display:'flex', marginLeft:'3em', justifyContent:'space-around'}}>
                    <Typography variant="h5"  sx={{fontFamily: 'Barlow, sans-serif'}}>Price</Typography>
                    <Typography variant="h5" sx={{fontFamily: 'Barlow, sans-serif'}}>Date</Typography>
                    <Typography variant="h5" sx={{marginLeft:'0.8em',fontFamily: 'Barlow, sans-serif'}} >Delivery</Typography>
                    <Typography variant="h5" sx={{marginLeft:'-0.6em',fontFamily: 'Barlow, sans-serif'}}>Status</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TableHeader


