import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const BakerySection = () => {
  return (
    <Section
      color={[152, 68, 158]}
      title={"Sweet Shop"}
      titleBackgroundImage={"BakeryBanner.jpeg"}
      firstSectionContent={
        <div>
          <p>
            A good webpage can make or break a restaurant these days, allowing
            restaurant owners to increase sales and avoid revenue lost to third
            party ordering services. I developed{" "}
          </p>
        </div>
      }
      secondSectionTitle={""}
      secondSectionContent={<div></div>}
      thirdSectionTitle={""}
      thirdSectionContent={<div></div>}
      finalDesignContent={<div></div>}
      takeawaysContent={<div></div>}
    />
  );
};
