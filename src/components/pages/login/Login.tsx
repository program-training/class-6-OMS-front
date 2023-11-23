import React, { useState } from "react";
import { CircularProgress, Typography } from '@mui/material';
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Alert,
  Stack,
  Grid,
  Box,
  createTheme,
  ThemeProvider
} from "@mui/material";
import { teal } from '@mui/material/colors';

// import CloseIcon from "@mui/icons-material/Close";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { loginUser } from "../../../services/usersServices";
import loginValidation from "../../../utils/loginValidation";
import { useLocation, useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
      fontFamily: 'Barlow, sans-serif'
  }
});

const Login = () => {
  const Navigate = useNavigate()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const popUpNotLogin = queryParams.get('notLoginPopup');
  console.log(popUpNotLogin);
  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  // Overall Form Validity
  const [formValid, setFormValid] = useState<null | string>();
  const [success, setSuccess] = useState<null | string>();
  const [loading, setLoading] = useState<boolean>(false);




  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  //handle Submission
  const handleSubmit = async () => {
    setSuccess(null);
    const { error } = loginValidation({
      email: emailInput,
      password: passwordInput,
    });
    if (error?.details[0].message) {
      setFormValid(error?.details[0].message);
      return;
    }
    setFormValid(null);
    setLoading(true)
    const token = await loginUser({
      email: emailInput,
      password: passwordInput,
    });
    if (token) {
      localStorage.setItem("access_token", token);
      setLoading(false)
      setSuccess("you are connected");
      setTimeout(async () => {
        Navigate('/orders/dashboard')
      }, 2000);
    }
    else {
      setLoading(false)
      setFormValid("oops something get wrong try again");
    }
  };
  return (

    <ThemeProvider theme={theme}>
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url(https://login.bankhapoalim.co.il/ng-portals/auth/he/login-bg.c481e68402934b4a.jpg)',
      backgroundSize: 'cover'
    }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Josefin+Sans:wght@700&family=Libre+Baskerville:wght@700&display=swap');
      </style>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh", width: '100vw' }}
      >
        <Typography variant="h1" fontFamily={'Barlow'}  color={teal[50]}> Welcome to OMS master </Typography>
        <Typography variant="h4" fontFamily={'Barlow'}  color={teal[50]}> Your premier OMS solution   </Typography>

        <Grid item width='28%' pt={'2.5em'}>
          <Box boxShadow={3} p={4} borderRadius={1} bgcolor={teal[50]} >
            <Grid item p={3} >
          
              <Typography variant="h3" fontFamily={'Barlow'} color={teal[800]}>
                Admin Login</Typography>
            </Grid>
            <Stack spacing={6} margin={4} >
              <TextField
                label="Email Address"
                fullWidth
                id="standard-basic"
                variant="standard"
                sx={{ width: "100%", fontFamily:'Barlow', color:'teal[800]'}}
                value={emailInput}
                InputProps={{}}
                size="small"
                onChange={(event) => {
                  setEmailInput(event.target.value);
                }}
              />

              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password" sx={{fontFamily: 'Barlow', color:'teal[800]'}}>
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => {
                    setPasswordInput(event.target.value);
                  }}
                  value={passwordInput}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                sx={{ bgcolor: 'teal', color: 'white', fontFamily: 'Barlow' ,'&:hover':{
                   backgroundColor: '#80cbc4'
                }}}
                fullWidth
                startIcon={<LoginIcon />}
                onClick={handleSubmit}
                
              >
                LOGIN
              </Button>

              {formValid && (
                <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                  <Alert severity="error">{formValid}</Alert>
                </Stack>
              )}
              {loading && (
                <Stack sx={{ width: "100%", paddingTop: "10px", alignItems: 'center' }} spacing={2}>
                  <CircularProgress />
                </Stack>
              )}

              {success && (
                <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
                  <Alert severity="success">{success}</Alert>
                </Stack>
              )}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
  );
};

export default Login;
