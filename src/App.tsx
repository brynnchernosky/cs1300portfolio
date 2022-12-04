import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  const [section, setSection] = useState<string>("");

  return (
    <div className="webpage">
      <div className="homepage">
        <header className="homepageHeader">
          <div>
            <h1>Jane Doe</h1>
            <p>
              Frontend developer creating streamlined solutions for any business
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
              <p className="gridItem">Hello</p>
              <p className="gridItem">I</p>
              <p className="gridItem">Am</p>
              <p className="gridItem">Project</p>
              <p className="gridItem">Nice</p>
              <p className="gridItem">Met</p>
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
