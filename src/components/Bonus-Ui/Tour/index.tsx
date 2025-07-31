import React, { Fragment, useEffect } from "react";
import { useTour } from "@reactour/tour";
import Profile from "./Profile";

const TourMain = () => {
  const { setIsOpen, isOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Fragment>
      <Profile />
    </Fragment>
  );
};

export default TourMain;
