import MyRouter from "./components/myrouter/MyRouter"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, sans-serif'
  }
})

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}> 
    <MyRouter/>
    </ThemeProvider>
    </>
  )
}

export default App
