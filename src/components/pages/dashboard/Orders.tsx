import { ChangeCircle, Clear, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import { OrderInterface } from '../../../interfaces/ordersInterface';


interface oProps{
    filteredOrders : OrderInterface[]
}
function Orders({filteredOrders}:oProps) {

    const handleButtonClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <Box sx={{ width: '100vw', minHeight: '50vh', display: 'flex', justifyItems: 'center', flexDirection: 'column' }}>
            {filteredOrders.map((order) => (
                <Box key={order._id} sx={{ display: 'flex', width: '80vw', justifyItems: 'center', alignItems: 'center', marginLeft: '2em' }}>
                    <Accordion sx={{ minHeight: '5em', border: '0.1em #004d40 solid', backgroundColor: '#b2dfdb' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            <Box sx={{ display: 'flex', width: '70vw', justifyContent: 'space-around'}}>
                                <Typography >{order.price}</Typography>
                                <Typography >{new Date(order.orderTime).toLocaleDateString('en-GB')}</Typography>
                                <Typography >{order.shippingDetails.orderType}</Typography>
                                <Typography >{order.status}</Typography>
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
                                <Typography>shipping address: {order.shippingDetails.address}</Typography>
                                <Typography>contact number: {order.shippingDetails.contactNumber}</Typography>
                                <Typography> delivery type: {order.shippingDetails.orderType}</Typography>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    )
}

export default Orders