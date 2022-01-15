import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./useStyles";
import ItemCard from "./ItemCard";
import { items } from "../dataBase/items.js";

const Body = () => {
  const styles = useStyles();
  return (
    <Grid container className={styles.bodyBackground} spacing={2}>
      {items.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ItemCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Body;
