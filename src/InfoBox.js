import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css"

function InfoBox({ title, cases, total}) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="primary" >
          {title}
        </Typography>
        <h3 className="infoBox__cases" color="textSecondary">
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