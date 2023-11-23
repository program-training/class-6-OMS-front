import {Box, createTheme, ThemeProvider}  from "@mui/material";
import Filters from "./Filters";
import Header from "./Header"
import Table from "./Table";
// import { useNavigate } from "react-router";
// import { useEffect } from "react";
// interface rProps{
//   isAuthenticated: boolean
// }

const theme = createTheme({
  typography: {
      fontFamily: 'Barlow, sans-serif'
  }
});
const DashBoard = () => {
  // const Navigate = useNavigate()
  // useEffect(()=>{
  //   if (!isAuthenticated) {
  //     Navigate('/orders/login')
  //   }
  // },[])
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', height: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <Header openSignUp={openPopUp} />
      <Filters />
      <Table />
      <hr color="#009688" style={{ width: '74em' }} />
      <SignUp open={openSignUp} isAuthenticated handleClose={closePopUp} /> {/* Render SignUp component */}

    </Box>
    </ThemeProvider>
  )
}

export default DashBoard