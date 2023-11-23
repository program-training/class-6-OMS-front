import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
// import { useAuth } from "../../utils/useAuth";
//import { useAuth } from "../../utils/useAuth"; // Import your authentication context or hook



function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
          <Route path="/orders/login" element={<Login/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<DashBoard/>}></Route>
          <Route path="/orders/dashboard" element={<DashBoard/>} />  
      </Routes>
    </Router>
  );
}
export default MyRouter;
