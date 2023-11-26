import axios, { AxiosError, AxiosResponse } from "axios";
import UserInterface from "../interfaces/userInterface";
const HOST = import.meta.env.VITE_SERVER_HOST || "http://localhost:8181"
export const BASE_URL = `${HOST}/api`

export const handleUnAxiosError = (error: AxiosError | unknown): void | 401| AxiosResponse=> {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 401) {
        console.log("Unauthorized: you are not login.")
        return axiosError.response;
      }
      if (axiosError.response?.status === 400) {
        console.log("Unauthorized: Please login or provide valid credentials.");
        return axiosError.response;
      } else {
        // Handle other Axios errors
        console.error("Axios error:", axiosError.message);
      }
    } else {
      // Handle other non-Axios errors
      console.error("Error:", error);
    }
  };
export async function loginUser( user: Partial<UserInterface>): Promise<string | void| AxiosResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, user);
      if (response.status === 200 && response.data) {
        console.log(response.data);
        return response.data.access_token;
      } else {
        throw new Error('login failed token does not provided');
      }
    } catch (error) {
      const response = handleUnAxiosError(error) as AxiosResponse;
      return response
    }
  }
  export async function registerUser(
    user: UserInterface
  ): Promise<AxiosResponse| void> {
    try {
      const config = {
        headers: {
          'access_token': localStorage.getItem('access_token') || "token not found" 
        }
      };
      const response = await axios.post(`${BASE_URL}/register`, user, config);
      return response;
    } catch (error) {
      const response = handleUnAxiosError(error) as AxiosResponse;
      return response
    }
  }
  
  