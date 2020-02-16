import React, { useEffect } from "react";
import { useGlobalState, useGlobalMutation } from "../utils/container";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import IndexCard from "./index/card";
import Celebritylist from "./landing-page/celebrityList";

const useStyles = makeStyles(() => ({
  container: {}
}));

const Index = () => {
  const stateCtx = useGlobalState();
  const mutationCtx = useGlobalMutation();
  const classes = useStyles();

  useEffect(() => {
    if (stateCtx.loading === true) {
      mutationCtx.stopLoading();
    }
  }, [stateCtx.loading, mutationCtx]);

  const mockCelebritylist = [{}, {}, {}, {}];

  return <Celebritylist celebrityList={mockCelebritylist} />;
};

export default Index;
