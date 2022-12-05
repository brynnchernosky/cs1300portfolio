import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const AvocademySection = () => {
  return (
    <Section
      color={[81, 119, 89]}
      title={"Avocademy"}
      titleBackgroundImage={"AvocademyBanner.jpeg"}
      firstSectionContent={<div></div>}
      firstSectionCarousel={null}
      secondSectionTitle={""}
      secondSectionContent={<div></div>}
      thirdSectionTitle={""}
      thirdSectionContent={<div></div>}
      finalDesignContent={<div></div>}
      takeawaysContent={<div></div>}
    />
  );
};
