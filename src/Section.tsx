import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export interface ISectionProps {
  title: string;
  titleBackgroundImage: string;
  firstSectionContent: JSX.Element;
  firstSectionCarousel:
    | {
        name: string;
        image: string;
      }[]
    | null;
  secondSectionTitle: string;
  secondSectionContent: JSX.Element;
  thirdSectionTitle: string;
  thirdSectionContent: JSX.Element;
  finalDesignContent: JSX.Element;
  takeawaysContent: JSX.Element;
}

export const Section = (props: ISectionProps) => {
  const {
    title,
    titleBackgroundImage,
    firstSectionContent,
    firstSectionCarousel,
    secondSectionTitle,
    secondSectionContent,
    thirdSectionTitle,
    thirdSectionContent,
    finalDesignContent,
    takeawaysContent,
  } = props;

  return (
    <div className="sectionContainer">
      <div className="section">
        <div className="sectionHeader" style={{ height: "6em" }}>
          <div
            style={{
              width: "100%",
              height: "6em",
              backgroundColor: "rgba(0,51,102,1)",
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
          <h2
            style={{
              color: "white",
              position: "relative",
              top: "-2.5em",
              marginLeft: "1em",
            }}
          >
            {title}
          </h2>
        </div>
        <br />
        <h3>Overview</h3>
        {firstSectionContent}
        <br />
        {firstSectionCarousel && (
          <div
            style={{
              width: "80vw",
              height: "40vw",
              margin: "auto",
            }}
          >
            <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
              {firstSectionCarousel.map((item, i) => (
                <Paper key={i}>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <img src={item.image} style={{ width: "100%" }} />
                </Paper>
              ))}
            </Carousel>
          </div>
        )}
        <br />
        <br />
        <br />
        <h3>{secondSectionTitle}</h3>
        {secondSectionContent}
        <br />
        <h3>{thirdSectionTitle}</h3>
        {thirdSectionContent}
        <br />
        <h3>Final Design</h3>
        {finalDesignContent}
        <br />
        <h3>Takeaways</h3>
        {takeawaysContent}
      </div>
    </div>
  );
};
