import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CelebrityCard from "./celebrityCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "60%",
    margin: "auto"
  }
});

const CelebrityList = ({ celebrityList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {celebrityList.map(celebrity => (
        <CelebrityCard celebrityData={celebrity} />
      ))}
    </div>
  );
};

export default CelebrityList;
