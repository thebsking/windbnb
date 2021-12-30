import React from "react";
import { CardMedia, Card } from "@mui/material";
import { Star } from "@mui/icons-material";

const PropertyCard = (props) => {
  return(
  <Card>
    <CardMedia
      component="img"
      alt="property image"
      height="140"
      image={props.image}
    />
    <h2>{props.title}</h2>
    <p>
      Location:{" "}
      <em>
        {props.city}, {props.country}
      </em>
    </p>
    <p>
      Type: <em>{props.type}</em>
    </p>
    <p>
      Rating: <em>{props.rating} <Star /></em>
    </p>
  </Card>
  )
};

export default PropertyCard;
