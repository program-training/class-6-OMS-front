import { Typography, Box, Slider, TextField, FormGroup, FormControlLabel, Checkbox } from "@mui/material";


export default function Filters() {
  return (
    <Box sx={{ height: '8em', width: '100vw', position: 'relative', display: 'flex', justifyContent:'space-around'}}>
                <Box sx={{ display: 'flex', height:'10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>price:</Typography>
                        <Slider aria-label="Temperature" defaultValue={30} valueLabelDisplay="auto" step={50} marks min={50} max={300} sx={{ width: '100px', color: '#8d6e63',marginRight:'5px' }} />
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#795548', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height:'10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>user id:</Typography>
                        <TextField id="filled-basic" label="ID" variant="filled" sx={{ color: '#a1887f' }} />
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#795548', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height:'10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>status:</Typography>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="Cancelled" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="Accepted" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="Sent" />
                        </FormGroup>
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#795548', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height:'10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>Delivery type:</Typography>
                        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="Regular" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="Express" />
                            <FormControlLabel control={<Checkbox defaultChecked sx={{ color: '#795548' }} />} label="PickUp" />
                        </FormGroup>
                    </Box>
                    <div style={{ height: '90px', width: '0.5px', backgroundColor: '#795548', marginTop: '8px' }}></div>
                </Box>
                <Box sx={{ display: 'flex', height:'10em' }}>
                    <Box sx={{ margin: '8px' }}>
                        <Typography variant='h6'>Date:</Typography>
                        <input type="date" style={{backgroundColor:'#bcaaa4', border:'none', borderRadius:'1em', height:'2em', width:'10em'}}></input>
                    </Box>
                </Box>
            </Box>
  )
}
