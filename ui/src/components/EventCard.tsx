import styles from "./EventCard.module.scss";
import React from "react";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";

export interface Props {
  title: string;
  description: string;
  onClick?: () => void;
}

export const EventCard: React.FC<Props> = ({ onClick, title, description }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions className={styles.action}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClick && onClick()}
        >
          Im interested!
        </Button>
      </CardActions>
    </Card>
  );
};
