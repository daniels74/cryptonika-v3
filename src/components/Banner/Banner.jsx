import React from "react";

//---------------UI------------
import { Box } from "@mui/system";

//-------------Components--------
import Carousel from "./Carousel"
//import CircleLoader from "react-spinners/CircleLoader";


const Banner = (props) => {
  console.log("In Banner",props.data);

  return (
    <Box sx={{
      backgroundColor: "black",
      height: "50%",
    }}>
      <Box sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // paddingTop: "25",
        justifyContent: "center",
        backgroundColor: "#2e4469"
      }}>
        <Box sx={{
          position: "relative",
          display: "flex",
          height: "50%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#0c1c36"
        }}>
          <Box
            component="h2"
            sx={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Cryptonika
          </Box>
          <Box
            component="subtitle2"
            sx={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            A crypto world for the physical one
          </Box>
        </Box>
        {props.data && <Box component={Carousel} sx={{
          position: "relative",
          height: "50%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#2e4469"
        }} 
        data={props.data} />}
      </Box>
    </Box>
  );
};

export default Banner;
