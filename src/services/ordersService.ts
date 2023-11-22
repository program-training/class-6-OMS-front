import axios from "axios";
import { BASE_URL } from "./usersServices";
import { OrderInterface } from "../interfaces/ordersInterface";
import { handleUnAxiosError } from "./usersServices";

export async function fetchOrders(): Promise<OrderInterface[] | void> {
  try {
    const fullUrl = `${BASE_URL}/orders`;
    const response = await axios.get(fullUrl);
    return response.data;
  } catch (error) {
    handleUnAxiosError(error);
  }
}
