import { Typography, Box, Slider, FormGroup, FormControlLabel, Checkbox, Button, Stack, Modal } from "@mui/material";
import Orders from "./Orders";
import TableHeader from "./TableHeader";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchOrders } from "../../../services/ordersService";
import { OrderInterface } from "../../../interfaces/ordersInterface";
import { options, initialSelctedOptions, tSelectedOptions, filterOrdersByPriceRange, filterOrdersByDate, filterOrdersByOrderType, filterOrdersByStatus, } from "../../../utils/filtersFuncs";
import RotateLeftRoundedIcon from '@mui/icons-material/RotateLeftRounded';
import TuneIcon from '@mui/icons-material/Tune';
import DoneIcon from '@mui/icons-material/Done';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 500,
    bgcolor: '#e0f2f1',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


function valuetext(value: number) {
    return `${value}$`;
}

export default function Table() {
    const [priceValue, setPriceValue] = useState<number[]>([0, 2000]);
    const [dateValue, setDateValue] = useState("0000-00-00");
    const [orders, setOrders] = useState<OrderInterface[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<OrderInterface[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<tSelectedOptions>(
        initialSelctedOptions
    );

    async function getOrders() {
        const temp: void | OrderInterface[] = await fetchOrders();
        if (temp) {
            setOrders(temp);
        }
    }
    const filterOrders = (
        orders: OrderInterface[],
        selectedOptions: tSelectedOptions
    ) => {
        const updatedFilteredOrdersByStatus = filterOrdersByStatus(
            orders,
            selectedOptions.status
        );
        const updatedFilteredOrdersByType = filterOrdersByOrderType(
            updatedFilteredOrdersByStatus,
            selectedOptions.orderType
        );
        const updatedFilteredOrdersByDate = filterOrdersByDate(
            updatedFilteredOrdersByType,
            dateValue
        );
        const updatedFilteredOrdersByPrice = filterOrdersByPriceRange(
            updatedFilteredOrdersByDate,
            priceValue[0],
            priceValue[1]
        );
        setFilteredOrders(updatedFilteredOrdersByPrice);
    };
    useEffect(() => {
        getOrders();
    }, []);

    useEffect(() => {
        filterOrders(orders, selectedOptions);
    }, [priceValue, orders, selectedOptions, dateValue]);
    const handleStatusCheckboxChange =
        (_option: options["status"]) => (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked) {
                setSelectedOptions((prevState) => ({
                    ...prevState,
                    status: [...prevState.status, _option],
                }));
            } else {
                setSelectedOptions((prevState) => ({
                    ...prevState,
                    status: prevState.status.filter((opt) => opt !== _option),
                }));
            }
        };

    const handleTypeCheckboxChange =
        (_option: options["orderType"]) => (event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.checked) {
                setSelectedOptions((prevState) => ({
                    ...prevState,
                    orderType: [...prevState.orderType, _option],
                }));
            } else {
                setSelectedOptions((prevState) => ({
                    ...prevState,
                    orderType: prevState.orderType.filter((opt) => opt !== _option),
                }));
            }
        };
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (event) {
            setPriceValue(newValue as number[]);
        }
    };
    const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
        const dateObject = new Date(event.target.value);
        const formattedDate = dateObject.toLocaleDateString("en-GB");
        setDateValue(formattedDate);
    };
    const handleReset = () => {
        setDateValue(initialSelctedOptions.orderTime);
        setPriceValue([
            initialSelctedOptions.price.minPrice,
            initialSelctedOptions.price.maxPrice,
        ]);
        setSelectedOptions(initialSelctedOptions);
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 600 }}>

                        <Box
                            sx={{
                                height: "8em",
                                width: "100vw",
                                position: "relative",
                                display: "flex",
                                flexDirection: 'column'
                            }}
                        >
                            <Box sx={{ display: "flex", height: "10em", width: '25em' }}>
                                <Box sx={{ margin: "8px" }}>
                                    <Typography variant="h6" style={{ fontWeight: 900 }} sx={{ width: '2.5em' }}>price:</Typography>
                                    <Slider
                                        sx={{ width: "12em", color: "#009688", marginLeft: "1em", marginTop: '0.5em' }}
                                        getAriaLabel={() => "Temperature range"}
                                        value={priceValue}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext}
                                        max={2000}
                                        step={10}

                                    />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", height: "10em", width: '25em' }}>
                                <Box sx={{ margin: "8px" }}>
                                    <Typography variant="h6" style={{ fontWeight: 900 }} sx={{ width: '25em' }}>status:</Typography>
                                    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                                        {initialSelctedOptions.status.map(
                                            (option, index) =>
                                                option && (
                                                    <FormControlLabel
                                                        key={index}
                                                        control={
                                                            <Checkbox sx={{ color: "#009688" }}
                                                                checked={selectedOptions.status.some(
                                                                    (opt) => opt === option
                                                                )}

                                                                onChange={handleStatusCheckboxChange(option)}
                                                            />
                                                        }
                                                        label={option}
                                                    />
                                                )
                                        )}
                                    </FormGroup>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", height: "10em", width: '25em' }}>
                                <Box sx={{ margin: "8px" }}>
                                    <Typography noWrap variant="h6" style={{ fontWeight: 900 }} sx={{ width: '9em' }}>Delivery type:</Typography>
                                    <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                                        {initialSelctedOptions.orderType.map(
                                            (option, index) =>
                                                option && (
                                                    <FormControlLabel
                                                        key={index}
                                                        control={
                                                            <Checkbox
                                                                checked={selectedOptions.orderType.some(
                                                                    (opt) => opt === option
                                                                )}

                                                                onChange={handleTypeCheckboxChange(option)}
                                                            />
                                                        }
                                                        label={option}
                                                    />
                                                )
                                        )}
                                    </FormGroup>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", height: "10em", width: '25em', marginLeft: '0.5em' }}>
                                <Stack spacing={3}>
                                    <Typography variant="h6" style={{ fontWeight: 900 }} sx={{ width: '2.5em' }}>Date:</Typography>

                                    <input
                                        onChange={handleChangeDate}
                                        type="date"
                                        style={{ backgroundColor: "#009688", border: "none", borderRadius: "1em", height: "2em", width: "15em", marginLeft: '2em', padding: '0.3em' }}
                                    ></input>
                                </Stack>
                            </Box>
                            <Box sx={{marginTop:'3em'}}>
                                <Button startIcon={<DoneIcon />} sx={{ color: 'black', width: '9em', backgroundColor: '#009688', '&:hover': { backgroundColor: '#80cbc4' } }} onClick={handleClose}>Done</Button></Box>
                        </Box>
                    </Box>
                </Modal>
            </Box>
            <Box sx={{ width: '100vw', height: '3em', display: 'flex', alignItems: 'center', marginTop: '2em' }}>
                <TableHeader />
                <Box sx={{ display: 'flex', width: '40em' }}>
                    <Button onClick={handleOpen} sx={{ color: '#009688', border: 'none', width: '9em' }} startIcon={<TuneIcon />}>Filters</Button>
                    <Button variant="outlined" onClick={handleReset} sx={{ color: '#009688', border: 'none', marginRight: '10em', '&:hover': { border: 'none' } }} startIcon={<RotateLeftRoundedIcon sx={{ color: '#009688' }} />}>reset filters</Button>
                </Box>
            </Box>
            <Orders filteredOrders={filteredOrders} />
        </Box>
    );
}



