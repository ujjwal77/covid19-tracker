import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css"

function InfoBox({ title, cases, total,image,isRed, ...props }) {
  return (
    <Card className="infoBox">
      <CardContent>
      <img className="" src={image} height={100} width={100} alt="Card image cap"/>
        <Typography className="infoBox__title" color="primary" >
          {title}
        </Typography>
        <h3  className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`} color="textSecondary">
          +{cases}
        </h3>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;