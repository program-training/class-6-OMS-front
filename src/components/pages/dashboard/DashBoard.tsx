import {Box} from "@mui/material";
import SuperHeader from "../register/Modal";
import Table from "./Table";
// import { useNavigate } from "react-router";
// import { useEffect } from "react";
// interface rProps{
//   isAuthenticated: boolean
// }

const DashBoard = () => {
  // const Navigate = useNavigate()
  // useEffect(()=>{
  //   if (!isAuthenticated) {
  //     Navigate('/orders/login')
  //   }
  // },[])
  return (
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <SuperHeader />
      <Table />
    </Box>
  )
}

export default DashBoard