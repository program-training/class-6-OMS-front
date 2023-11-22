import { OrderInterface } from "../interfaces/ordersInterface";
export interface options {
    orderType: "express" | "regular" | "pickup";
    status: "processing" | "sent" | "accepted" | "cancelled";
    price: { minPrice: number; maxPrice: number };
    orderTime: string;
    userId: string;
  }
export  type tStatuses = options["status"][];
export  type tOrderTypes = options["orderType"][];
export  interface tSelectedOptions {
    orderType: tOrderTypes;
    status: tStatuses;
    price: { minPrice: number; maxPrice: number };
    orderTime: string;
  }
  
export const initialSelctedOptions: tSelectedOptions = {
    orderType: ["express", "regular", "pickup"],
    status: ["processing", "sent", "accepted", "cancelled"],
    price: { minPrice: 0, maxPrice: 2000 },
    orderTime: '0000-00-00',
  };
  
export const filterOrdersByDate = (
    orders: OrderInterface[],
    searchDate: string
  ): OrderInterface[] => {
    const filteredOrders = orders.filter((order) => {
      const dateObject = new Date(order.orderTime);
      const formattedDate = dateObject.toLocaleDateString('en-GB');
      return searchDate === '0000-00-00' ? true : formattedDate === searchDate;
      
    });
    return filteredOrders;
  };
export  const filterOrdersByStatus = (
    orders: OrderInterface[],
    statuses: tStatuses
  ): OrderInterface[] => {
    return orders.filter((order) => statuses.includes(order.status));
  };
export   const filterOrdersByOrderType = (
    orders: OrderInterface[],
    OrderTypes: tOrderTypes
  ): OrderInterface[] => {
    return orders.filter((order) =>
      OrderTypes.includes(order.shippingDetails.orderType)
    );
  }
export  const filterOrdersByPriceRange = (
    orders: OrderInterface[],
    minPrice: number,
    maxPrice: number
  ): OrderInterface[] => {
    return orders.filter(
      (order) => order.price >= minPrice && order.price <= maxPrice
    );
   
  };