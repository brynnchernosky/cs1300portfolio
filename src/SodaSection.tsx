import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const SodaSection = () => {
  const sketchCarousel = [
    {
      caption: (
        <p key="1">
          <b>Figure 1: Interface sketch, start screen.</b> This interface is
          designed to allow users to dispense ice and their drink of choice.
          Drink buttons are circular and arranged by drink category, with
          colorful graphics for all but the water button. There are filter
          options to show all drinks (default), low calorie drinks, or no
          caffeine drinks.
        </p>
      ),
      image: "DrinkDispenserSketch.png",
    },
    {
      caption: (
        <p>
          <b>Figure 2: Interface sketch, selection screen.</b> This shows an
          example screen that appears after the user selects a drink option on
          the main screen.
        </p>
      ),
      image: "DrinkDispenserSketch2.png",
    },
    {
      caption: (
        <p key="3">
          <b>Figure 3: Interface photo, start screen.</b> Note the bright colors
          and prominent brand logos, as well as the greyed out buttons
          indicating a drink is not available. On clicking one of these buttons,
          the word &apos;Unavailable&apos; appears briefly. While the machine is
          idle, a fullscreen ad for Coke Zero Sugar will occasionally appear.{" "}
        </p>
      ),
      image: "DrinkDispenserPhoto.png",
    },
  ];

  return (
    <Section
      color={[152, 68, 158]}
      title={"Freestyle"}
      titleBackgroundImage={"SodaBanner.jpeg"}
      firstSectionContent={
        <div>
          <p>
            User research is critical to building good user interfaces. By
            understanding users, we can create experiences that streamline
            experiences, address frustrations, and meet needs they aren&apos;t
            even consciously aware of themselves.{" "}
          </p>
          <br />
          <p>
            For this project, I observed users interacting with a Coke Freestyle
            fountain drink dispenser at the Brown University dining hall known
            as &apos;The Ratty&apos; and interviewed several users on their
            experiences with it. From there, I developed two user personas, the
            soda-lover Kate and the water-lover Dylan, and drafted a storyboard
            based on the Kate persona.
          </p>
          <br />
          <p>
            {" "}
            Sketches and pictures of the interface in question are shown below:{" "}
          </p>
          <div>
            <div
              style={{
                width: "80%",
                margin: "auto",
              }}
            >
              <Carousel
                autoPlay={false}
                navButtonsAlwaysVisible={true}
                sx={{ minHeight: "700px" }}
              >
                {sketchCarousel.map((item, i) => (
                  <div key={i}>
                    <Paper elevation={0}>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={item.image}
                          style={{
                            maxHeight: "550px",
                            minHeight: "500px",
                          }}
                        />
                      </div>
                      <div style={{ overflowY: "scroll" }}>{item.caption}</div>
                    </Paper>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      }
      secondSectionTitle={"Observations"}
      secondSectionContent={<div></div>}
      thirdSectionTitle={"Interviews"}
      thirdSectionContent={<div></div>}
      fourthSectionTitle={"Personas"}
      fourthSectionContent={<div></div>}
      finalDesignContent={<div></div>}
      takeawaysContent={<div></div>}
    />
  );
};
