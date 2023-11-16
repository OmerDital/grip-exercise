import { Stack, ThemeProvider, createTheme } from "@mui/material"
import Timer from "./components/Timer"

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0 214 159)'
    }
  }
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Stack width='100%' height='100%' alignItems='center' justifyContent='center'>
        <Timer />
      </Stack>
    </ThemeProvider>
  )
}

export default App
