import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { isTemplateExpression } from "typescript";

function App() {
  const [section, setSection] = useState<string>("");
  const sectionList: {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
  }[] = [
    {
      projectTitle: "Todaylist",
      projectDescription:
        "Redesigning the Craislist webpage for the modern era",
      projectImage: "",
    },
    {
      projectTitle: "Avocademy",
      projectDescription: "Online learning modules to teach UI/UX design",
      projectImage: "",
    },
    {
      projectTitle: "Sweet Designs",
      projectDescription:
        "Bakery webpage highlighting the patisserie's sweet offerings",
      projectImage: "VanillaMacaron.png",
    },
    {
      projectTitle: "PhySims",
      projectDescription:
        "Teaching algebra-based mechanics to high school and college students",
      projectImage: "Cover4.png",
    },
    { projectTitle: "", projectDescription: "", projectImage: "" },
    { projectTitle: "", projectDescription: "", projectImage: "" },
  ];

  return (
    <div className="webpage">
      <div className="homepage">
        <header className="homepageHeader">
          <div>
            <h1>Jane Doe</h1>
            <p>
              Frontend developer creating streamlined solutions for any business
              need
            </p>
          </div>
          <nav className="homepageNavigation">
            <a href="" className="navBarElement">
              Work
            </a>
            <a href="" className="navBarElement">
              About
            </a>
          </nav>
        </header>
      </div>
      {section == "" && (
        <div className="sectionContainer">
          <div className="section">
            <div className="gridOfProjects">
              {sectionList.map((item, index) => {
                return (
                  <div
                    className="gridItem"
                    key={index}
                    onClick={() => setSection(item.projectTitle)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={item.projectImage}
                    />
                    <div
                      style={{
                        color: "white",
                        backgroundColor: `rgba(0,0,0,0.6)`,
                        position: "relative",
                        top: "-190px",
                        padding: "10px",
                        width: "80%",
                        margin: "auto",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <h2>{item.projectTitle}</h2>
                      </div>
                      <p>{item.projectDescription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {section == "PhySims" && (
        <div className="sectionContainer">
          <div className="section">
            <div className="sectionHeader">
              <h2>PhySims</h2>
            </div>
            <br />
            <p>
              Physics simulations are common teaching tools for introductory
              physics teachers everywhere. They help students learn about
              everything from free body diagrams to Newton&apos;s laws, and
              bridge the gap between visual and mathematical representations.
              But many physics simulations only provide limited
              interactivity—they don&apos;t walk through each step of solving a
              problem or give students a chance to test their knowledge by
              solving problems themselves.
            </p>
            <br />
            <p>
              I developed the physics simulation platform, PhySims, to bridge
              this gap, allowing students a choice between freeform mode, review
              mode, and tutorial mode to learn various introductory mechanics
              topics.
            </p>
            <br />
            <h3>Freeform Mode</h3>
            <br />
            <p>
              In Freeform Mode, students can explore pendulum problems, incline
              plane problems, and more, toggling parameters and running
              simulations with mathematically correct forces. They can also
              visualize force, acceleration, and velocity vectors alongside
              their mathematical representations.
            </p>
            insert gif of pendulum with force/acc/vel visible
            <br />
            <h3>Tutorial Mode</h3>
            <br />
            <p>
              In Tutorial Mode, students receive step-by-step guidance on how to
              solve different categories of problems, with visual depictions and
              mathematical notation accompanying each step.{" "}
            </p>
            insert gif going through steps of solving incline plane problem
            <br />
            <h3>Review Mode</h3>
            <br />
            <p>
              In Review Mode, students can practice their problem-solving skills
              by solving randomly generated problems. Students can sketch out
              free body diagrams; solve for forces, angles, and coefficients;
              and run their own custom-designed simulations.{" "}
            </p>
            insert gif, sketching forces, put in values, run simulation
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
