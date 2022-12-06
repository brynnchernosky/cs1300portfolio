import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export interface ISectionProps {
  color: number[];
  title: string;
  titleBackgroundImage: string;
  firstSectionContent: JSX.Element;
  secondSectionTitle: string;
  secondSectionContent: JSX.Element;
  thirdSectionTitle: string;
  thirdSectionContent: JSX.Element;
  fourthSectionTitle?: string;
  fourthSectionContent?: JSX.Element;
  finalDesignContent: JSX.Element;
  takeawaysContent: JSX.Element;
}

export const Section = (props: ISectionProps) => {
  const {
    color,
    title,
    titleBackgroundImage,
    firstSectionContent,
    secondSectionTitle,
    secondSectionContent,
    thirdSectionTitle,
    thirdSectionContent,
    fourthSectionTitle,
    fourthSectionContent,
    finalDesignContent,
    takeawaysContent,
  } = props;

  return (
    <div className="sectionContainer">
      <div className="section">
        <div className="sectionHeader" style={{ height: "9em" }}>
          <div
            style={{
              width: "100%",
              height: "9em",
              backgroundColor:
                "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")",
            }}
          >
            <img
              src={titleBackgroundImage}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                opacity: 0.3,
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "9em",
              padding: "1em",
              display: "flex",
              alignItems: "center",
              position: "relative",
              color: "white",
              top: "-9em",
            }}
          >
            <h2>{title}</h2>
          </div>
        </div>
        <br />
        <h3>Overview</h3>
        {firstSectionContent}
        <br />
        <h3>{secondSectionTitle}</h3>
        {secondSectionContent}
        <br />
        <h3>{thirdSectionTitle}</h3>
        {thirdSectionContent}
        <br />
        {fourthSectionContent != undefined && (
          <div>
            <h3>{fourthSectionTitle}</h3>
            {fourthSectionContent}
            <br />
          </div>
        )}
        <h3>Final Design</h3>
        {finalDesignContent}
        <br />
        <h3>Takeaways</h3>
        {takeawaysContent}
      </div>
    </div>
  );
};
