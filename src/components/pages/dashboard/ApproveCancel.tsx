import { Box, Button, Modal, Typography } from '@mui/material'
import { OrderInterface } from '../../../interfaces/ordersInterface';
import { options } from '../../../utils/filtersFuncs';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'white',  
    borderRadius: '1em',
    pt: 2,
    px: 4,
    pb: 3,

};

interface pApproveCancel{
    open : boolean;
    handleClose: () => void;
    _order: OrderInterface
    handleChangeStatus: (order: OrderInterface, _status: options["status"]) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>

}
const ApproveCancel = ({open, handleClose, _order, handleChangeStatus}:pApproveCancel) => { 
    const handelClickClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleClose()
    }
    return (
        <React.Fragment>
        <Modal
            open={open}
            onClose={handelClickClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style }}>

                <Typography variant='h5' sx={{ margin: '1em' }}>Are you sure you want to cancel this order?</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '4em' }}>
                    <Button variant="contained" onClick={(e) => {
                        handleClose()
                        const func = handleChangeStatus(_order, 'cancelled')
                        func(e)}} sx={{ backgroundColor: '#26a69a', color: 'black', '&:hover': { backgroundColor: '#80cbc4' } }} >
                        yes!
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: '#26a69a', color: 'black', '&:hover': { backgroundColor: '#80cbc4' } }} onClick={handelClickClose}>
                        no
                    </Button>
                </Box>
            </Box>
        </Modal>
        </React.Fragment>
    )
}

export default ApproveCancel