import {Box} from "@mui/material";
import Header from "./Header";
import Table from "./Table";


const DashBoard = () => {

  return (
    <Box sx={{ bgcolor: '#e0f2f1', minHeight: '100vh', width: '100vw', margin: '0', position: 'absolute' }}>
      <Header />
      <Table />
    </Box>
  )
}

export default DashBoard