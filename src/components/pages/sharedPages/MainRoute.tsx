import {  useNavigate} from "react-router-dom";
import { useEffect} from "react";
import React from "react";
import { useAuth } from "../../../utils/useAuth";



export const MainRoute = () => {
  const navigate = useNavigate();
  const  isAuthenticated  = useAuth();
  console.log('from main route: ', isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/orders/login");
    }
    else{
      navigate("/orders/dashboard");
    }
  },[])
  return (
    <React.Fragment>
    </React.Fragment>
  );
};