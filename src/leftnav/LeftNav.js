import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./useStyles";

const LeftNav = () => {
  const styles = useStyles();
  return (
    <Grid container direction="column" className={styles.navBackground}>
      <Grid item>test 1</Grid>
      <Grid item> test 2</Grid>
    </Grid>
  );
};

export default LeftNav;
