import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";
import Login from "../pages/login/Login";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

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
