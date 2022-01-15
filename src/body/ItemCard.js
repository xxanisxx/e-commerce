import React from "react";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ItemCard = ({ image, title, description }) => {
  return (
    <Card style={{ maxWidth: 345, height: "100%" }}>
      <CardMedia style={{ height: 145 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
