import { BrowserRouter as Router, Routes, Route , useNavigate} from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
//import { useAuth } from "../../utils/useAuth"; // Import your authentication context or hook
import { useEffect, useState } from "react";
import React from "react";


export const MainRoute = () => {
  const navigate = useNavigate();
  const  isAuthenticated  = true;
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
function MyRouter(): JSX.Element {
  const [isAuthenticated] = useState(true);
  return (
    <Router>
      <Routes>
          <Route path="/orders/login" element={<Login/>} />
          <Route path="/orders/register" element={<Register isAuthenticated={isAuthenticated}/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<MainRoute />}></Route>
          <Route path="/orders/dashboard" element={<DashBoard />} />  
      </Routes>
    </Router>
  );
}
export default MyRouter;
