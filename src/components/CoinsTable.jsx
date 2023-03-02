import React, { useEffect, useState } from "react";
//import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@mui/material";
import {
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
// import axios from "axios";
// import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
//import CircleLoader from "react-spinners/CircleLoader";
//import { CryptoState } from "../CryptoContext";

//--------------------UI------------------------
import { Box } from "@mui/material";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable(props) {
  const [coins, setCoins] = useState(props.data);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const symbol = "$";

  console.log("In CoinsTable", props.data);

  const history = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#f56942",
      },
      type: "dark",
    },
  });

  //----------------DATA RETRIEVAL--------------------
  useEffect(() => {
    setCoins(props.data);
  }, [props.data]);
  //--------------------------------------------------------

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ height: "135vh", width: "100%", textAlign: "center", backgroundColor: "#0c1c36" , display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around"}}>
        {/* {props.CLData.length !== 0 ?  */}
        <Typography variant="h4" style={{ fontFamily: "Montserrat" }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Cryptocurrency Search . ."
          sx={{
            backgroundColor: "lightblue",
            width: "40%",
            borderStyle: "solid",
            borderColor: "blue",
            borderWidth: ".15rem",
            borderRadius: "1rem",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {Object.keys(props.data).length === 0 ? (
            <LinearProgress style={{ backgroundColor: "#0BE8DC" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "black" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "lightblue",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "justify" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => history(`/coins/${row.id}`)}
                        sx={{
                          color: "#ffff",
                          backgroundColor: "#2e4469",
                          cursor: "pointer",
                          "&:hover": {
                            backgroundColor: "#131111",
                          },
                          fontFamily: "Montserrat",
                        }}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "lightblue",
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </Box>
                            <span style={{ color: "lightblue" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right" sx={{ color: "white" }}>
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* {Object.keys(props.data).length !== 0 ?  */}
        <Pagination
          count={Number("(handleSearch()?.length / 10).toFixed(0)")}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#0BE8DC",
            },
          }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
        {/* //  : <p>Loading..</p> } */}
      </Box>
    </ThemeProvider>
  );
}
