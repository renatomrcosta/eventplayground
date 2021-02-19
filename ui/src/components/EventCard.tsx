import React from "react";
import { Card, Button, Typography } from "@material-ui/core";

export interface Props {
  onClick?: () => void;
}

export const EventCard: React.FC<Props> = ({ onClick }) => {
  return (
    <Card>
      <Typography>Hello! I am an event card</Typography>
      <Button color={"secondary"} onClick={() => onClick && onClick()}>
        Sample Button
      </Button>
    </Card>
  );
};
