import {Box, createTheme, ThemeProvider}  from "@mui/material";
import {Box, createTheme, ThemeProvider}  from "@mui/material";
import Filters from "./Filters";
import Header from "./Header"
import Table from "./Table";
import SignUp from "../register/SignUp";
import { useState } from "react";



const theme = createTheme({
  typography: {
      fontFamily: 'Barlow, sans-serif'
  }
});
const DashBoard = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const openPopUp = () => {
    setOpenSignUp(true);
  };
 const closePopUp =() => {
  setOpenSignUp(false)
 }
 
 

  return (
    <ThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', height: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <Header openSignUp={openPopUp} />
      <Header openSignUp={openPopUp} />
      <Filters />
      <Table />
      <Table />
      <hr color="#009688" style={{ width: '74em' }} />
      <SignUp open={openSignUp} isAuthenticated handleClose={closePopUp} /> {/* Render SignUp component */}

      <SignUp open={openSignUp} isAuthenticated handleClose={closePopUp} /> {/* Render SignUp component */}

    </Box>
    </ThemeProvider>
    </ThemeProvider>
  )
}

export default DashBoard