import React, { useState } from "react";
import { Carousel } from "./Carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const PhysicsSection = () => {
  const physicsCarousel = [
    {
      caption: <div></div>,
      image: "FreeformScreenshot.png",
      altText: "simulation freeform mode",
    },
    {
      caption: <div></div>,
      image: "TutorialScreenshot.png",
      altText: "simulation tutorial mode",
    },
    {
      caption: <div></div>,
      image: "ReviewScreenshot.png",
      altText: "simulation review mode",
    },
  ];

  return (
    <Section
      color={[161, 0, 58]}
      title={"PhySims"}
      titleBackgroundImage={"PhysicsBanner.jpeg"}
      firstSectionContent={
        <div>
          <p>
            Physics simulations are common teaching tools for introductory
            physics teachers everywhere. They help students learn about
            everything from free body diagrams to Newton&apos;s laws, and bridge
            the gap between visual and mathematical representations. But many
            physics simulations only provide limited interactivity—they
            don&apos;t walk through each step of solving a problem or give
            students a chance to test their knowledge by solving problems
            themselves.
          </p>
          <br />
          <p>
            As an independent study project, I developed the physics simulation
            platform, PhySims, to bridge this gap, allowing students a choice
            between freeform mode, review mode, and tutorial mode to learn
            various introductory mechanics topics in algebra-based physics
            courses.
          </p>
          <div>
            <div
              style={{
                width: "80%",
                margin: "auto",
              }}
            >
              <Carousel
                height={577 * 0.7}
                width={1170 * 0.9}
                carouselElements={physicsCarousel}
              />
            </div>
          </div>
          <br />
          <p>
            This project gave me the chance to put my past experience with{" "}
            <b>video game development</b> into practice, as well as practice
            using <b>React</b>, <b>Typescript</b>, and <b>CSS</b>. I also got to
            practice <b>designing streamlined frontend experiences</b> and{" "}
            <b>targeting a young adult audience</b>.
          </p>
        </div>
      }
      secondSectionTitle={"Background Research"}
      secondSectionContent={
        <div>
          <p>
            {" "}
            I started by speaking with students to understand what their needs
            were, speaking to both students who have taken college-level physics
            in the past and who are actively taking college-level physics, as
            well as students that had only taken high school-level physics,
            since the goal of this project was to provide an introduction to
            algebra-based mechanics, which is taken at both levels.
          </p>
          <br />
          <p>
            Next, I completed a survey of existing work in this area, critically
            reviewing existing simulations from PhET, Algodoo, and other
            platforms, noting both features that I would want to incorporate in
            my own project and where they were lacking. I also reviewed research
            papers in this area and spoke to professors who had done work in the
            field.{" "}
          </p>
        </div>
      }
      thirdSectionTitle={"Design Process"}
      thirdSectionContent={
        <div>
          <p>Two major principles guided my design process:</p>
          <ul>
            <li>
              <b>Extensibility:</b> In structuring both the user interface and
              the code, my goal was to have an extensible design that would be
              easy to add additional features and types of problems to.{" "}
            </li>
            <li>
              <b>Flexibility</b>: My goal was to receive frequent feedback so
              that I could quickly change direction if something wasn&apos;t
              working out. I made a point of receiving feedback at every step of
              the design project, and continuously iterated on my design based
              on that feedback.
            </li>
          </ul>
          <br />
          <p>
            My original design was focused on creating interactive, physically
            correct simulations where students could set the parameters. After
            receiving initial feedback, I decided it would also be beneficial to
            also allow for students to control the forces acting on elements in
            the simulation in order to practice concepts. After receiving
            feedback on the modified design, I realized it would also be helpful
            to have a way of showing students how to correctly solve problems.
          </p>
          <br />
          <p>
            {" "}
            It quickly became clear that it would be impossible to accomplish
            everything I wanted to accomplish with a single mode, so I shifted
            focus to a three-mode model:{" "}
          </p>
          <ul>
            <li>
              <b>Freeform mode</b> would be used for students to get an initial
              understanding of how kinematics work by setting up their own
              problems that would be animated physically correctly
            </li>
            <li>
              <b>Tutorial mode</b> would be used to walk students through
              concepts like drawing free body diagrams and solving for various
              parameters
            </li>
            <li>
              <b>Review mode</b> would be used for students to practice their
              problem solving skills by solving semi-randomly generated problems
            </li>{" "}
          </ul>
        </div>
      }
      finalDesignContent={
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4>Freeform Mode</h4>
              <p>
                In Freeform Mode, students can explore pendulum problems,
                incline plane problems, and more, toggling parameters and
                running simulations that are animated mathematically correctly.
                Students can also visualize the force, acceleration, and
                velocity vectors.
              </p>
            </div>
            <div style={{ width: "50%" }}>
              <div
                style={{
                  height: 666 * 0.3 + "px",
                  width: 1205 * 0.3 + "px",
                  margin: "auto",
                }}
              >
                <img
                  src="Freeform.gif"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4>Tutorial Mode</h4>
              <p>
                In Tutorial Mode, students receive step-by-step guidance on how
                to solve different categories of problems, with visual
                depictions and written explanations accompanying each step.
                There are also links to helpful external resources related to
                the problem.
              </p>
            </div>
            <div style={{ width: "50%" }}>
              <div
                style={{
                  height: 666 * 0.3 + "px",
                  width: 1205 * 0.3 + "px",
                  margin: "auto",
                }}
              >
                <img
                  src="Tutorial.gif"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4>Review Mode</h4>
              <p>
                In Review Mode, students can practice their problem-solving
                skills by solving semi-randomly generated problems. Students can
                sketch out free body diagrams; solve for forces, angles, and
                coefficients; and run their own custom-designed simulations. If
                a question stumps them, they can click on the walkthrough link
                to go to the tutorial mode walkthrough for that problem.
              </p>
            </div>
            <div style={{ width: "50%" }}>
              <div
                style={{
                  height: 666 * 0.3 + "px",
                  width: 1205 * 0.3 + "px",
                  margin: "auto",
                }}
              >
                <img
                  src="Review.gif"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      }
      takeawaysContent={
        <div>
          <p>
            There are several key takeaways I took from this project as a
            designer and developer:
          </p>
          <ul>
            <li>
              <b>Iterative Design:</b> Working on this project reinforced how
              important it is to get feedback at all points in the design
              process, from before you have anything coded to after you have a
              working prototype and everywhere in between. My final design ended
              up much stronger than my initial mockups thanks to lots of great
              feedback from others.
            </li>
            <li>
              <b>Extensible Design:</b> I also learned about how important it is
              to create an extensible design. Because I wrote the simulation
              animation code to be entirely physically-based, it was super easy
              to add other types of simulations, and I plan to continue adding
              more simulation types in the future.
            </li>
            <li>
              <b>Well Written Code:</b> Finally, this project reinforced the
              importance of having clean, easily readable code. I experienced
              the classic problem with large codebases: as time went on, more
              and more of my time was spent on debugging rather than adding new
              features. Having organized, commented code made it much easier to
              isolate and resolve bugs.
            </li>
          </ul>
        </div>
      }
    />
  );
};
