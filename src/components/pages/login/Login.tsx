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
} from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { loginUser } from "../../../services/usersServices";
import loginValidation from "../../../utils/loginValidation";
import { useLocation, useNavigate } from "react-router-dom";

// interface dProps {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }
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

  //handle Submittion
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
      setFormValid("oops somthing get wrong try again");
    }
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" , width:'100vw' }}
    >
      <Grid item p={3} > <Typography variant="h3"> login as admin</Typography></Grid>
      <Grid item width='28%'>
        <Box boxShadow={3} p={4} borderRadius={1}>
          <Stack spacing={6} margin={4} >
            <TextField
              label="Email Address"
              fullWidth
              id="standard-basic"
              variant="standard"
              sx={{ width: "100%" }}
              value={emailInput}
              InputProps={{}}
              size="small"
              onChange={(event) => {
                setEmailInput(event.target.value);
              }}
            />

            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
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
              variant="contained"
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
              <Stack sx={{ width: "100%", paddingTop: "10px", alignItems: 'center'}} spacing={2}>
                <CircularProgress/>
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
  );
};

export default Login;
