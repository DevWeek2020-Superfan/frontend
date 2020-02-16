import { useEffect } from "react";
import React from "react";
import Celebritylist from "./celebrityList";

const LandingPage = ({}) => {
  // TODO: Load initial data from firebase
  useEffect(() => {}, []);

  const mockCelebritylist = [{}, {}, {}, {}];

  return (
    <div>
      <Celebritylist celebrityList={mockCelebritylist} />
    </div>
  );
};

export default LandingPage;
