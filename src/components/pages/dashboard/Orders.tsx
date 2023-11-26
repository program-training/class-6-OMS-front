import { ChangeCircle, Clear, ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material'
import { OrderInterface } from '../../../interfaces/ordersInterface';
import { options } from '../../../utils/filtersFuncs';


interface oProps {
    filteredOrders: OrderInterface[]
    handleChangeStatus: (order: OrderInterface, _status: options["status"]) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>

}



function Orders({ filteredOrders, handleChangeStatus }: oProps) {


    return (
        <Box sx={{ width: '100vw', minHeight: '50vh', display: 'flex', justifyItems: 'center', flexDirection: 'column' }}>
            {filteredOrders.map((order) => (
                <Box key={order._id} sx={{ display: 'flex', width: '80vw', justifyItems: 'center', alignItems: 'center', marginLeft: '2em' }}>
                    <Accordion sx={{ minHeight: '5em', border: '0.1em #004d40 solid', backgroundColor: '#b2dfdb' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                        >
                            {/* Table row and Accordion */}
                            <Box sx={{ display: 'flex', width: '71vw', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Typography sx={{ width: '20%', flexShrink: 0, textAlign: 'center', fontSize: '1.2rem' }}>{order._id}</Typography>
                                <Typography sx={{ width: '12%', flexShrink: 0, textAlign: 'center', fontSize: '1.2rem' }}>{order.price}</Typography>
                                <Typography sx={{ width: '12%', flexShrink: 0, textAlign: 'center', fontSize: '1.2rem' }}>{new Date(order.orderTime).toLocaleDateString('en-GB')}</Typography>
                                <Typography sx={{ width: '12%', flexShrink: 0, textAlign: 'center', fontSize: '1.2rem' }}>{order.shippingDetails.orderType}</Typography>
                                <Typography sx={{ width: '12%', flexShrink: 0, textAlign: 'center', fontSize: '1.2rem' }}>{order.status}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', width: '20vw', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Button variant="contained" disabled={order.status !== 'processing'} onClick={handleChangeStatus(order, 'cancelled')} sx={{ color: 'black', border: 'none', marginLeft: '-0.5em', backgroundColor: '#26a69a', '&:hover': { border: 'none', backgroundColor: '#4db6ac' } }} startIcon={<Clear sx={{ color: '#004d40' }} />}>
                                        cancel
                                    </Button>
                                </Box>
                                <Box>
                                    <Button variant="contained" disabled={order.shippingDetails.orderType !== 'pickup' || order.status !== 'processing'} onClick={handleChangeStatus(order, 'accepted')} sx={{ color: 'black', border: 'none', marginLeft: '0.5em', backgroundColor: '#26a69a', '&:hover': { border: 'none', backgroundColor: '#4db6ac' } }} startIcon={<ChangeCircle sx={{ color: '#004d40' }} />}>
                                        complete
                                    </Button>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}> User ID: {order.userId}</Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}> Order ID: {order._id}</Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}>shipping address: {order.shippingDetails.address}</Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}>contact number: {order.shippingDetails.contactNumber}</Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}> delivery type: {order.shippingDetails.orderType}</Typography>
                                <Typography style={{ fontWeight: 500, fontSize: '1.2rem' }}> products in order:</Typography>
                                {order.cartItems.map((item) =>
                                    (<Typography style={{ fontSize: '1.1rem' }}>name:  {item.name}, price:  {item.price}, quantity:  {item.quantity}</Typography>)

                                )}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    )
}

export default Orders