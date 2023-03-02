import { Box } from "@mui/material";
import React from "react";

//--------------Components--------------------
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";

const Home = (props) => {
  console.log("In Home", props.trendingData);
  console.log("In Home", props.coinListData);
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Banner data={props.trendingData} />

      <Box component={CoinsTable} data={props.coinListData} />
    </Box>
  );
};

export default Home;
