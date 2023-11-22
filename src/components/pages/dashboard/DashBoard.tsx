import {Box} from "@mui/material";
import Filters from "./Filters";
import Hader from "./Hader";

const DashBoard = () => {

  return (
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', height: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <Hader />
      <Filters />
      <hr color="#009688" style={{ width: '74em' }} />
      
    </Box>
  )
}

export default DashBoard