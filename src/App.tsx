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
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
    {
      projectTitle: "Avocademy",
      projectDescription: "Online learning modules to teach UI/UX design",
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
    {
      projectTitle: "Sweet Designs",
      projectDescription:
        "Bakery webpage highlighting the patisserie's sweet offerings",
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
    {
      projectTitle: "PhySims",
      projectDescription:
        "Teaching algebra-based mechanics to high school and college students",
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
    {
      projectTitle: "",
      projectDescription: "",
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
    {
      projectTitle: "",
      projectDescription: "",
      projectImage:
        "https://th.bing.com/th/id/R.fb8415118774a6ace2dda4eb4ad48779?rik=IAXXIjVJoy2XMA&pid=ImgRaw&r=0",
    },
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
            <div className="navBarElement" onClick={() => setSection("")}>
              <p>Work</p>
            </div>
            <div className="navBarElement" onClick={() => setSection("About")}>
              <p>About</p>
            </div>
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
                    <div style={{ width: "400px", height: "300px" }}>
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={item.projectImage}
                      />
                    </div>
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
            <h3>Overview</h3>
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
              As an independent study project, I developed the physics
              simulation platform, PhySims, to bridge this gap, allowing
              students a choice between freeform mode, review mode, and tutorial
              mode to learn various introductory mechanics topics in
              algebra-based physics courses.
            </p>
            <br />
            <h3>Research</h3>
            <p>
              {" "}
              I started by speaking with other students to understand what their
              needs were. I spoke to both students taking college-level physics
              and students that had only taken high school level physics, since
              the goal of this project was to provide an introduction to
              algebra-based mechanics, which can be taken at both levels.
            </p>
            <br />
            <p>
              Next, I completed a survey of existing work in this area,
              critically reviewing existing simulations from PhET, Algodoo, and
              other platforms, noting both features that I would want to
              incorporate in my own project and where they were lacking. I also
              reviewed research papers in this area and spoke to professors who
              had done work in the field.{" "}
            </p>
            <br />
            <h3>Planning</h3>
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
                working out. I made a point of receiving feedback at every step
                of the design project, and continuously iterated on my design
                based on that feedback.
              </li>
            </ul>
            <br />
            <p>
              My original design was focused on creating interactive, physically
              correct simulations where students could set the parameters. After
              receiving initial feedback, I decided it would also be beneficial
              to also allow for students to control the forces acting on
              elements in the simulation in order to practice concepts. After
              receiving feedback on the modified design, I realized it would
              also be helpful to have a way of showing students how to correctly
              solve problems.
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
                <b>Freeform mode</b> would be used for students to get an
                initial understanding of how kinematics work by setting up their
                own problems that would be animated physically correctly
              </li>
              <li>
                <b>Tutorial mode</b> would be used to walk students through
                concepts like drawing free body diagrams and solving for various
                parameters
              </li>
              <li>
                <b>Review mode</b> would be used for students to practice their
                problem solving skills by solving semi-randomly generated
                problems
              </li>{" "}
            </ul>
            <br />
            <h3>Designing</h3>
            <h4>Freeform Mode</h4>
            <p>
              In Freeform Mode, students can explore pendulum problems, incline
              plane problems, and more, toggling parameters and running
              simulations with mathematically correct forces. They can also
              visualize force, acceleration, and velocity vectors alongside
              their mathematical representations.
            </p>
            <div>
              <div
                style={{
                  height: 666 * 0.75 + "px",
                  width: 1205 * 0.75 + "px",
                  margin: "auto",
                }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1CBpg1Ilyp17G__no4GHvxQFi_mD9gdTo/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
            <br />
            <h4>Tutorial Mode</h4>
            <p>
              In Tutorial Mode, students receive step-by-step guidance on how to
              solve different categories of problems, with visual depictions and
              mathematical notation accompanying each step.{" "}
            </p>
            <br />
            <h4>Review Mode</h4>
            <p>
              In Review Mode, students can practice their problem-solving skills
              by solving semi-randomly generated problems. Students can sketch
              out free body diagrams; solve for forces, angles, and
              coefficients; and run their own custom-designed simulations. If a
              question stumps them, they can click on the walkthrough link to go
              to the tutorial mode walkthhrough for that problem.{" "}
            </p>
            <div>
              <div
                style={{
                  height: 666 * 0.75 + "px",
                  width: 1205 * 0.75 + "px",
                  margin: "auto",
                }}
              >
                <iframe
                  src="https://drive.google.com/file/d/1F5v1CtK4PW1zlC6shvMJfSmDYrEcybzw/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
