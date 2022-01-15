import React from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "./navbar/NavBar";
import LeftNav from "./leftnav/LeftNav";
import Body from "./body/Body";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <>
      <Grid container item xs={12}>
        <NavBar />
      </Grid>
      <Grid container item xs={12} spacing={2}>
        <Grid container item xs={3}>
          <LeftNav />
        </Grid>
        <Grid container item xs={9}>
          <Body />
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Footer />
      </Grid>
    </>
  );
};

export default App;
