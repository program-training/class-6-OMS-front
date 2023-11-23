import { Cancel, ExpandMore } from "@mui/icons-material"
import { Box, Button, Collapse, Typography } from "@mui/material"


function Table() {


    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


    return (
        <Box sx={{ height: '100vh', minHeight: '80vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ height: '3em', display: 'flex', justifyContent: "space-around", width: '75em' }}>
                <Typography variant="h5">Id</Typography>
                <Typography variant="h5">Price</Typography>
                <Typography variant="h5">Date</Typography>
                <Typography variant="h5">Delivery</Typography>
                <Typography variant="h5">Status</Typography>
            </Box>
            <Box sx={{ border: 'black solid 1px', width: '90vw', minHeight: '50vh' }}>
                {array.map(() => (
                    <Box sx={{ display: 'flex'}}>
                        <Box sx={{ height: '3em', display: 'flex', justifyContent: "space-around", width: '75%' }}>
                            <Typography variant="h6">id</Typography>
                            <Typography variant="h6">price</Typography>
                            <Typography variant="h6">date</Typography>
                            <Typography variant="h6">delivery</Typography>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{ color: '#6d4c41', border: 'none' }} startIcon={<ExpandMore sx={{ color: '#6d4c41' }} />}>
                            Details
                            </Button>
                            <Collapse> 
                            </Collapse>
                        </Box>
                        <Box>
                            <Button variant="outlined" sx={{ color: '#6d4c41', border: 'none' }} startIcon={<Cancel sx={{ color: '#6d4c41' }} />}>
                                Cancel
                            </Button>
                        </Box>
                        
                        
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Table


