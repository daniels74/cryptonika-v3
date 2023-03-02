import React from 'react';
import { Routes, Route} from 'react-router-dom'

//-------------Pages-----------------------------
import Home from "./Pages/Home"
// import Visuals from './pages/Visuals'
// import Insights from "./pages/Insights"
// import CoinPage from "./pages/CoinPage"

//-------------Components--------------------------
import Navbar from "./components/Navbar/Navbar"
// import {makeStyles} from "@material-ui/core"

//-------------UI------------------------------
import './App.css'
import { Box, createTheme, ThemeProvider } from "@mui/material";

//--------------Packages---------------------------
import {useDispatch, useSelector} from 'react-redux';
import {getTrending} from "./redux/reducers/trendingSlice"
import {getAllCoins} from "./redux/reducers/allCoinsSlice"


const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#224173",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  // const classes = useStyles();

  const dispatch = useDispatch();
  //--------Get data-----------------------------
  const  trending  = useSelector((state) => state.trending);
  const  allCoins  = useSelector((state) => state.allCoins);
  React.useEffect(() => {
    dispatch(getTrending());
    dispatch(getAllCoins());
  }, [dispatch]);
  
  console.log("In App-trending", trending);
  const trendingData = Object.values(trending)
  
  const coinList = Object.values(allCoins)
  console.log("In App", coinList)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        // position: "absolute",
        backgroundColor: "#14161a",
        color: "white",
        height: "100%",
        width: "100%",
        minHeight: "100vh",
      }}>
        <Box sx={{
          position: "relative",
          height: "10%",
          width: "100%"
        }}>
          <Navbar/>
        </Box>
        <Box sx={{
          position: "relative",
          height: "90%",
          width: "100%"
        }}>
        <Routes>
          <Route exact path="/" element={Object.keys(allCoins).length ? <Home trendingData={trendingData} coinListData={coinList}/> : <p>Loading...</p>} />
          {/* <Route exact path="/Visuals" element={<Visuals/>}/>
          <Route exact path="/Insights" element={<Insights/>}/>
          <Route exact path="/coins/:id" element={<CoinPage/>}/> */}
        </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
