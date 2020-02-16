import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CelebrityCard from "./celebrityCard";

const useStyles = makeStyles({
  root: {
    diplay: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});

const CelebrityList = ({ celebrityList }) => {
  const classes = useStyles();

  return (
    <div className={classes.useStyles}>
      {celebrityList.map(celebrity => (
        <CelebrityCard celebrityData={celebrity} />
      ))}
    </div>
  );
};

export default CelebrityList;
