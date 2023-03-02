import React from "react";
import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

import { numberWithCommas } from "../CoinsTable";
import { Box } from "@mui/material";

const Carousel = (props) => {
  const [trending, setTrending] = useState([]);
  const symbol = "$";

  //---------------DATA ACCESS-----------------
  React.useEffect(() => {
    setTrending(props.data);
  }, [props.data]);


  //--------------organize items-------------------
  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    console.log("In carousel: coin : ", coin);

    return (
      <Box
      component={Link} 
      sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      textDecoration: "none",
      color: "white",
      }} 
      to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <Box component="span">
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
              textDecoration: "none"
            }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </Box>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Box>
    );
  });

  console.log("Carousel items: ", items);
  
  //How will it show?
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <Box sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {trending.length !== 0 ? (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      ) : (
          <CircleLoader color="#00FFCC" size={150} />
      )}
    </Box>
  );
};

export default Carousel;
