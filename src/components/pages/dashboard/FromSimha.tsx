import { useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Slider,
} from "@mui/material";
import { fetchOrders } from "../../../services/ordersService";
import { OrderInterface } from "../../../interfaces/ordersInterface";
import {options, initialSelctedOptions, tSelectedOptions, filterOrdersByPriceRange, filterOrdersByDate, filterOrdersByOrderType, filterOrdersByStatus } from "../../../utils/filtersFuncs";


function valuetext(value: number) {
  return `${value}$`;
}




const CategoryPage = (): JSX.Element => {
  const { category } = useParams();
  const [priceValue, setPriceValue] = useState<number[]>([0, 2000]);
  const [dateValue, setDateValue] = useState('0000-00-00');
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderInterface[]>([]);
  

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

  const [selectedOptions, setSelectedOptions] = useState<tSelectedOptions>(
    initialSelctedOptions
  );
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

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    filterOrders(orders, selectedOptions);
  }, [priceValue, orders, selectedOptions, dateValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (event) {
      setPriceValue(newValue as number[]);
    }
  };
  const handleChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    const dateObject = new Date(event.target.value);
    const formattedDate = dateObject.toLocaleDateString('en-GB')
    setDateValue(formattedDate)
  };
  const handleReset = () => {
        setDateValue(initialSelctedOptions.orderTime)
        setPriceValue([initialSelctedOptions.price.minPrice, initialSelctedOptions.price.maxPrice])
        setSelectedOptions(initialSelctedOptions)
  }
  return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box>
            <Button onClick={handleReset}>reset filters</Button>
        </Box>
        <Box>
        <input onChange={handleChangeDate} type="date" style={{backgroundColor:'#bcaaa4', border:'none', borderRadius:'1em', height:'2em', width:'10em'}}></input>
        </Box>
        
        <Box sx={{ width: 200 }}>
          <p>price range</p>
          <Slider
            sx={{color: "red"}}
            getAriaLabel={() => "Temperature range"}
            value={priceValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            max={2000}
            step={10}
          />
        </Box>
        <p>
          Between {priceValue[0]} and {priceValue[1]}
        </p>
        <Box>
          <h2>Properties</h2>
          <div>
          <FormGroup>
            {initialSelctedOptions.status.map(
              (option, index) =>
                option && (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
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
          </div>
          <div>
          <FormGroup>
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
          </div>
        </Box>
      <div>
        <h2>{category} Category</h2>
        <Container
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {filteredOrders.map((order) => (
            <div
              style={{ border: "1px blue solid", width: "300px" }}
              key={order._id}
            >
              <h3>userId: {order.userId}</h3>
              <h3>status: {order.status}</h3>
              <h3>orderType: {order.shippingDetails.orderType}</h3>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default CategoryPage;
