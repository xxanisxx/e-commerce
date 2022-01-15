import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./navbar.css";
import Avatar from "@material-ui/core/Avatar";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Grid container xs={12}>
        <Grid container xs={3} alignItems="center">
          <Grid item>
            {/* <img alt="" src={Logo} className="logo" /> */}
            <Avatar className="logo">H</Avatar>
          </Grid>
          <Grid item>
            <Typography
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                fontSize: "32px",
              }}
            >
              website name
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={4} />
        <Grid container xs={4} alignItems="center">
          <input type="text" className="inputSearch" />
        </Grid>
        <Grid container xs={1} alignItems="center">
          login
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
