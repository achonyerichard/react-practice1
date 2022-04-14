import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";


const theme = createTheme({
  palette: {
    primary: {
      main: "#070808",
    },
    secondary: {
      main: "#1966D1",
    },
  },
});
theme.typography.h1 = {
  fontSize: "6rem",
  "@media (max-width:600px)": {
    fontSize: "4rem",
    fontFamily: "BIZ UDGothic",
  },
};
theme.typography.h4 = {
  fontSize: "2rem", 
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "BIZ UDGothic",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </ThemeProvider>
    
  );
}

export default App;
