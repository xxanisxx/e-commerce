import Grid from "@material-ui/core/Grid";
import React from "react";
import useStyles from "./useStyles";

const Footer = () => {
  const styles = useStyles();
  return (
    <Grid container className={styles.footerBackground}>
      test
    </Grid>
  );
};

export default Footer;
