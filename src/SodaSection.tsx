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
      color={[227, 55, 55]}
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
          <p>
            This project gave me the chance to practice using <b>Balsamiq</b>{" "}
            and <b>Canva</b>. I also got to practice{" "}
            <b>performing user research</b> and{" "}
            <b>targeting a young adult audience</b>.
          </p>
        </div>
      }
      secondSectionTitle={"Observations"}
      secondSectionContent={
        <div>
          <p>
            I observed 20+ users interacting with the drink dispenser during
            popular meal times at The Ratty and noted the following:
          </p>
          <ul>
            <li className="keyFindingsEmphasis">
              Users used the machine to fill both reusable cups and water
              bottles
            </li>
            <ul>
              <li>
                Users pressed their container against the levers to dispense ice
                or the drink{" "}
              </li>
              <li>
                Cups fit comfortably, but the space wasn&apos;t large enough for
                most water bottles
              </li>
            </ul>
            <li className="keyFindingsEmphasis">
              Users primarily used the machine for soft drinks with ice
            </li>
            <ul>
              <li>
                A significant number of users also used the machine for ice
                water or just ice
              </li>
            </ul>
            <li className="keyFindingsEmphasis">
              Users were fast and accurate when selecting and dispensing drinks
            </li>
            <ul>
              <li>
                Uses rarely spent longer than 1 second between actions, e.g. to
                make a decision or to locate a button
              </li>
            </ul>
            <li className="keyFindingsEmphasis">
              Users spent more time on and were less accurate when dispensing
              ice{" "}
            </li>
            <ul>
              <li>
                Users tended to press the ice lever multiple times versus using
                a single long press for drinks
              </li>
              <li>Ice frequently missed the intended container</li>
            </ul>
            <li className="keyFindingsEmphasis">
              Several features went unused (QR code, drink filters, etc.)
            </li>
          </ul>
        </div>
      }
      thirdSectionTitle={"Interviews"}
      thirdSectionContent={
        <div>
          <p>
            After observing users, I interviewed three users on their
            experiences interacting with the drink dispenser at The Ratty.
          </p>
          <br />
          <h4>Questions</h4>
          <ol>
            <li>
              How often have you used the soda machine at this dining hall in
              the past week?
            </li>
            <li>What do you normally get from the machine?</li>
            <ul>
              <li>
                {" "}
                If you wanted to get water, would you use the soda machine or
                the water machine? Why?{" "}
              </li>
            </ul>
            <li>Can you walk me through how you normally use the machine?</li>
            <li>What do you like about using the machine?</li>
            <li>
              {" "}
              Is there anything that frustrates you about using the machine?
            </li>
            <ul>
              <li>Do you have any difficulty with the ice dispenser?</li>
            </ul>
            <li>
              What, if anything, would you change about this user interface?
            </li>
            <li>
              Is there anything about the interface we haven&apos;t covered that
              you&apos;d like to mention?
            </li>
          </ol>
          <br />
          <h4>Key Findings</h4>
          <ol>
            <li>
              The typical user used the machine several times a week; one set of
              users used it primarily for ice and soft drinks, while the other
              set used it primarily for ice and water
            </li>
            <li>
              Users typically had a go-to drink but appreciated having all of
              the drink options available, even if they never chose them
            </li>
            <li>
              One user noted that they usually have a plate of food with them
              when getting a drink, and they have to put down their food to have
              both hands free to use the machine
            </li>
            <li>
              One user was frustrated that there&apos;s no indication that the
              ice is out and that users have to find out through (literal) trial
              and error{" "}
            </li>
            <li>
              Two users noted occasional issues with touch screen
              responsiveness, but each had a different solution: one user uses a
              different part of their hand; the other user repeats the same
              motion but harder
            </li>
          </ol>
        </div>
      }
      fourthSectionTitle={"Personas"}
      fourthSectionContent={
        <div>
          <p>
            From observing and speaking to users, I developed the following two
            personas: Kate and Dylan, creating graphics for each of them in{" "}
            <b>Canva</b>.
          </p>
          <div className="empathyMapWrapper">
            <p className="personaQuote">&quot;Please work.&quot; </p>
            <p className="personaHeader">
              <b>Kate</b> is a college junior that has soda a few times a week,
              with a clear favorite but a backup in case it&apos;s out.
              (It&apos;s always out.)
            </p>
            <img
              className="personaEmpathyMap"
              src="KatePersona.png"
              alt="Empathy map for the Kate persona. In the Thinks category, Kate thinks: Hm, maybe I should get something different this time? Nah.; Why are they always out of Diet Coke?; Ugh, it's impossible to get the right amount of ice. In the Feels category, Kate feels: Frustrated she can't tell if the ice machine is broken, empty, or slow; annoyed at ice falling everywhere; elated when she gets her drink of choice. In the Does category, Kate: presses harder if the first press doesn't work; tries to get the right amount of ice with one press; has slipped on ice from the machine at least once; tried mixing soft drinks a couple times. In the Says category, Kate says: Why doesn't it just say that it's out of ice?; Please just work, damn it!; Hm, maybe it's just slow and not empty? Nope, it's empty."
            />
            <p className="personaCaption">
              <ul>
                <li>
                  Kate represents soda machine users that frequently use the
                  machine for its intended purpose: soda with ice. Like them,
                  she&apos;s an expert user that is familiar with the interface
                  and its quirks, and she gets annoyed at repeat frustrations,
                  like not knowing if the ice is broken, empty, or just slow to
                  come out.
                </li>
                <li>
                  Her top interface problems are the lack of feedback during and
                  lack of control over ice dispensing.{" "}
                </li>
              </ul>
            </p>
            <div className="line">
              <hr />
            </div>
          </div>

          <div className="empathyMapWrapper">
            <p className="personaQuote">
              &quot;I just want ice water in my water bottle — is that too much
              to ask for?&quot;
            </p>
            <p className="personaHeader">
              <b>Dylan</b> is a college sophomore that doesn&apos;t like soda,
              but does like cold drinks and often fills his water bottle at the
              soda machine.
            </p>
            <img
              className="personaEmpathyMap"
              src="DylanPersona.png"
              alt="Empathy map for the Dylan persona. In the Thinks category, Dylan thinks: There's gotta be a better way; Why can't they just make the ice easier to control?; Better not slip on all the spilled ice. In the Feels category, Dylan feels: mildly annoyed he has to wait in the soda line despite not liking soda; pressured by people waiting in line behind him while he's filling his water bottle; disappointed at ice falling everywhere. In the Does category, Dylan: switches fingers if the first press doesn't work; smiles awkwardly at the person in line behind him while waiting for water bottle to fill; carefully presses ice lever multiple times to get the right amount. In the Says category, Dylan says: there should be a separate ice machine; we need better water bottle fill station on campus; one day, someone's gonna slip on the ice and sue."
            />
            <p className="personaCaption">
              <ul>
                <li>
                  Dylan represents soda machine users that use the machine for
                  its other purpose: ice water and water bottle filling. Like
                  them, he&apos;s frustrated at the lack of compatibility
                  between the machine and his water bottle, but it&apos;s his
                  only option if he wants ice.{" "}
                </li>
                <li>
                  His top interface problems are lack of control over ice
                  dispensing and poor water bottle fit.
                </li>
              </ul>
            </p>
          </div>
        </div>
      }
      finalDesignContent={null}
      takeawaysContent={
        <div>
          <p>
            Through observation, interviews, and personas, and I identified the
            following key areas for improvement for the soda machine user
            interface and user experience:
          </p>
          <ol>
            <li>
              Improved feedback on ice machine status (empty, broken, or
              working)
            </li>
            <li>Finer control over ice dispensing</li>
            <li>Improved touchscreen responsiveness</li>
          </ol>
          <br />
          <p>
            There were also several key takeaways I took from this project as a
            designer:
          </p>
          <ul>
            <li>
              <b>Product Understanding</b> Working on this project reinforced
              how important it is to understand the product that you&apos;re
              studying. Because I did preliminary research into the product, I
              was able to ask more detailed questions about how users interacted
              with it.
            </li>
            <li>
              <b>User Understanding</b> Working on this project also reinforced
              how important it is to both observe users&apos; natural
              interactions and to speak with them in order to understand both
              their behaviors and their thought processes.
            </li>
          </ul>
        </div>
      }
    />
  );
};
