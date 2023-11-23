import {
    Typography,
    Box,
    Slider,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Stack,
  } from "@mui/material";
  import Orders from "./Orders";
  import TableHeader from "./TableHeader";
  import { ChangeEvent, useEffect, useState } from "react";
  import { fetchOrders, putOrder } from "../../../services/ordersService";
  import { OrderInterface } from "../../../interfaces/ordersInterface";
  import {
    options,
    initialSelctedOptions,
    tSelectedOptions,
    filterOrdersByPriceRange,
    filterOrdersByDate,
    filterOrdersByOrderType,
    filterOrdersByStatus,
  } from "../../../utils/filtersFuncs";
  import { useNavigate } from "react-router";
  
  function valuetext(value: number) {
    return `${value}$`;
  }
  
  export default function Table() {
      const Navigate = useNavigate()
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
      else{
         Navigate('/orders/login?notLoginPopup=true') 
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
      (_option: options["orderType"]) =>
      (event: ChangeEvent<HTMLInputElement>) => {
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
    const handleChangeStatusButton = (
      order: OrderInterface,
      _status: options["status"]
    ) => {
      return async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        const updatedOrder = await putOrder({ ...order, status: _status });
        if (updatedOrder?.status === _status) {
          const index = filteredOrders.findIndex((o) => o._id === order._id);
          if (index !== -1) {
            const updatedOrders = [...filteredOrders];
            updatedOrders[index] = updatedOrder;
            setFilteredOrders(updatedOrders);
          }
        }
        else{
          Navigate('/orders/login?notLoginPopup=true') 
        }
      };
    };
    return (
      <Box>
        <Box
          sx={{
            height: "8em",
            width: "100vw",
            position: "relative",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", height: "10em" }}>
            <Box sx={{ margin: "8px" }}>
              <Typography variant="h6">price:</Typography>
              <Slider
                sx={{ width: "100px", color: "#009688", marginRight: "5px" }}
                getAriaLabel={() => "Temperature range"}
                value={priceValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={2000}
                step={10}
              />
            </Box>
            <div
              style={{
                height: "90px",
                width: "0.5px",
                backgroundColor: "#009688",
                marginTop: "8px",
              }}
            ></div>
          </Box>
          <Box sx={{ display: "flex", height: "10em" }}>
            <Box sx={{ margin: "8px" }}>
              <Typography variant="h6">status:</Typography>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                {initialSelctedOptions.status.map(
                  (option, index) =>
                    option && (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            sx={{ color: "#009688" }}
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
            <div
              style={{
                height: "90px",
                width: "0.5px",
                backgroundColor: "#009688",
                marginTop: "8px",
              }}
            ></div>
          </Box>
          <Box sx={{ display: "flex", height: "10em" }}>
            <Box sx={{ margin: "8px" }}>
              <Typography variant="h6">Delivery type:</Typography>
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
            <div
              style={{
                height: "90px",
                width: "0.5px",
                backgroundColor: "#009688",
                marginTop: "8px",
              }}
            ></div>
          </Box>
          <Box sx={{ display: "flex", height: "10em" }}>
            <Stack spacing={3}>
              <Typography variant="h6">Date:</Typography>
  
              <input
                onChange={handleChangeDate}
                type="date"
                style={{
                  backgroundColor: "#009688",
                  border: "none",
                  borderRadius: "1em",
                  height: "2em",
                  width: "10em",
                }}
              ></input>
              <Button onClick={handleReset}>reset filters</Button>
            </Stack>
          </Box>
        </Box>
        <hr color="#009688" style={{ width: "74em" }} />
        <TableHeader />
        <Orders filteredOrders={filteredOrders} handleChangeStatus={handleChangeStatusButton} />
      </Box>
    );
  }
  