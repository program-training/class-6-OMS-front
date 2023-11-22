import { ChangeCircle, Clear, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'



function Orders() {

    const array = [1, 2, 3, 4, 5, 6, 7,8,9,10]
    const handleButtonClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <Box sx={{ width: '100vw', minHeight: '50vh', display: 'flex', justifyItems: 'center', flexDirection: 'column' }}>
            {array.map(() => (
                <Box sx={{ display: 'flex', width: '80vw', justifyItems: 'center', alignItems: 'center', marginLeft: '2em' }}>
                    <Accordion sx={{ minHeight: '5em', border: '0.1em #004d40 solid', backgroundColor: '#b2dfdb' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Box sx={{ display: 'flex', width: '70vw', justifyContent: 'space-around' }}>
                                <Typography >price</Typography>
                                <Typography >date</Typography>
                                <Typography >delivery</Typography>
                                <Typography >status</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', width: '20vw', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Button variant="outlined" onClick={handleButtonClick} sx={{ color: 'black', border: 'none' }} startIcon={<Clear sx={{ color: '#004d40', margin: '0.8px' }} />}>
                                        Details
                                    </Button>
                                </Box>
                                <Box>
                                    <Button variant="outlined" onClick={handleButtonClick} sx={{ color: 'black', border: 'none' }} startIcon={<ChangeCircle sx={{ color: '#004d40', margin: '0.8px' }} />}>
                                        exchange
                                    </Button>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    )
}

export default Orders