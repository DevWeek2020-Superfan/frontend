import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const DEFAULT_IMAGE_URL =
  "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/01/17/2313302648.jpg";

const useStyles = makeStyles({
  root: {
    width: "200px"
  }
});

const CelebrityCard = ({ celebrityData }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Celebrity image"
          height="200"
          width="200"
          image={celebrityData?.imageUrl || DEFAULT_IMAGE_URL}
          title="Celebrity Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {celebrityData?.name || "James & Agatha"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {celebrityData?.description || "James is single "}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Profile
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CelebrityCard;
