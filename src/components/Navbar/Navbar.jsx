import React from "react";

//----------------UI-----------------------
import logo from "../../logo.svg";
import "./Navbar.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Box } from "@mui/material";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Box
        component="a"
        href="/"
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <Box
          component="img"
          src={logo}
          sx={{
            height: "7vmin",
            pointerEvents: "none",
            position: "relative",
            top: "0",
          }}
          alt="logo"
        />
        <Box component="h1">Cryptonika</Box>
      </Box>
      <Box
        component="ul"
        sx={
          toggleMenu
            ? {
                position: "absolute",
                right: "0px",
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                alignItems: "center",
                width: "100%",
                top: "4rem",
                backgroundColor: "rgb(13, 11, 18)",
                fontSize: "32px",
                /* transform: translateX(100%); */
                transition: "transform 0.5s ease-in",
                /* transform: translateX(0%); */
                zIndex: "999",
                gap: "4rem",
              }
            : {
                display: "flex",
                gap: "2rem",
              }
        }
      >
        <li>
          <a href="Visuals" className={toggleMenu ? "item-hamburger" : "item"}>
            Visuals
          </a>
        </li>
        <li>
          <a href="Insights" className={toggleMenu ? "item-hamburger" : "item"}>
            Insights
          </a>
        </li>
      </Box>
      <div
        className="hamburger"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}
      >
        <TiThMenuOutline />
      </div>
    </Box>
  );
};

export default Navbar;
