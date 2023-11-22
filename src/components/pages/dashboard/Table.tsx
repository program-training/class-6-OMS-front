import { Typography, Box, Slider, TextField, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Orders from "./Orders";
import TableHeader from "./TableHeader";







export default function Table() {








    return (
        <Box>
            <Box sx={{ height: '8em', width: '100vw', position: 'relative', display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ display: 'flex', height: '10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>price:</Typography>
                        <Slider aria-label="Temperature" defaultValue={30} valueLabelDisplay="auto" step={50} marks min={50} max={300} sx={{ width: '100px', color: '#009688', marginRight: '5px' }} />
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#009688', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height: '10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>user id:</Typography>
                        <TextField label="ID" variant="filled" />
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#009688', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height: '10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>status:</Typography>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="Cancelled" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="Accepted" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="Sent" />
                        </FormGroup>
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#009688', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height: '10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>Delivery type:</Typography>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="Regular" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="Express" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#009688' }} />} label="PickUp" />
                        </FormGroup>
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#009688', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height: '10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>Date:</Typography>
                        <input type="date" style={{ backgroundColor: '#009688', border: 'none', borderRadius: '1em', height: '2em', width: '10em' }}></input>
                    </Box>
                </Box>
            </Box>
            <hr color="#009688" style={{ width: '74em' }} />
            <TableHeader />
            <Orders />
        </Box>
    )
}
