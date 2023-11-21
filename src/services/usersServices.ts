import axios, { AxiosError } from "axios";
export const BASE_URL = 'http://localhost:8181/api'
import UserInterface from "../interfaces/userInterface";

export const handleUnAxiosError = (error: AxiosError | unknown): void | 401 => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        console.log("Unauthorized: you are not login.")
        return axiosError.response.status;
      }
      if (axiosError.response?.status === 400) {
        console.log("Unauthorized: Please login or provide valid credentials.");
      } else {
        // Handle other Axios errors
        console.error("Axios error:", axiosError.message);
      }
    } else {
      // Handle other non-Axios errors
      console.error("Error:", error);
    }
  };
export async function loginUser( user: Partial<UserInterface>): Promise<string | void> {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, user);
      if (response.status === 200 && response.data) {
        console.log(response.data);
        return response.data.access_token;
      } else {
        throw new Error('login failed token does not provided');
      }
    } catch (error) {
      handleUnAxiosError(error);
    }
  }
  export async function registerUser(
    user: UserInterface
  ): Promise<number | void> {
    try {
      const config = {
        headers: {
          'access_token': localStorage.getItem('access_token') || "token not found" 
        }
      };
      console.log("from services: ", user);
      const response = await axios.post(`${BASE_URL}/register`, user, config);
      console.log(response.data.message);
      return response.status;
    } catch (error) {
      handleUnAxiosError(error);
    }
  }
  
  