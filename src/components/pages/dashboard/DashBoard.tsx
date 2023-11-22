import {Box} from "@mui/material";
import Filters from "./Filters";
import Header from "./Header"
import Header from "./Header"

const DashBoard = () => {

  return (
    <Box sx={{ bgcolor: '#d7ccc8', minHeight: '100vh', height: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <Header />
      <Filters />
      <hr color="#4e342e" style={{ width: '74em' }} />
    </Box>
  )
}

export default DashBoard