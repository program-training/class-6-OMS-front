import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/pageNotFound/PageNotFound";


function MyRouter(): JSX.Element {
  
  return (
    <Router>
      <Routes>
          <Route path="/orders/dashboard" element={<DashBoard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/orders/register" element={<Register />} />
          <Route path="/orders/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default MyRouter;
