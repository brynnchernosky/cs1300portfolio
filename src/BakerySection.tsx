import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const BakerySection = () => {
  return (
    <Section
      color={[152, 68, 158]}
      title={"Sweet Designs"}
      titleBackgroundImage={"BakeryBanner.jpeg"}
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
