import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { isTemplateExpression } from "typescript";
import { PhysicsSection } from "./PhysicsSection";
import { CraigslistSection } from "./CraigslistSection";
import { BakerySection } from "./BakerySection";
import { AvocademySection } from "./AvocademySection";
import { SodaSection } from "./SodaSection";

function App() {
  const [section, setSection] = useState<string>("");
  const sectionList: {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
  }[] = [
    {
      projectTitle: "Avocademy",
      projectDescription: "Online learning modules to teach UI/UX design",
      projectImage: "AvocademyCover.png",
    },
    {
      projectTitle: "PhySims",
      projectDescription:
        "Teaching algebra-based mechanics to high school and college students",
      projectImage: "PhysicsCover.png",
    },
    // {
    //   projectTitle: "Sweet Shop",
    //   projectDescription:
    //     "Bakery webpage highlighting the patisserie's sweet offerings",
    //   projectImage: "RaspberryMacaron.png",
    // },
    {
      projectTitle: "Craigslist",
      projectDescription:
        "Redesigning the Craigslist webpage for the modern era",
      projectImage: "CraigslistCover.png",
    },
    {
      projectTitle: "Freestyle",
      projectDescription: "Researching use of soda machines in dining halls",
      projectImage: "SodaCover.png",
    },
  ];

  return (
    <div className="webpage">
      <div className="homepage">
        <header className="homepageHeader">
          <div>
            <h1 onClick={() => setSection("")} style={{ cursor: "pointer" }}>
              Jane Doe
            </h1>
            <p>Student at Brown University | Designer and Developer</p>
          </div>
          <nav className="homepageNavigation">
            <div className="navBarElement" onClick={() => setSection("")}>
              <p>Work</p>
            </div>
            <div className="navBarElement" onClick={() => setSection("About")}>
              <p>About Me</p>
            </div>
          </nav>
        </header>
      </div>
      {section == "About" && (
        <div className="sectionContainer">
          <div className="section">
            <div style={{ width: "70%" }}>
              <h2>Hi! I&apos;m Jane</h2>
              <p>
                I&apos;m a student at Brown University studying computer science
                and economics. I specialize in designing and building
                streamlined frontend experiences to meet any business need.
              </p>
              <br />
              <p>
                You can reach me at <a href="">myemail@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
      {section == "Avocademy" && <AvocademySection />}
      {section == "PhySims" && <PhysicsSection />}
      {section == "Sweet Shop" && <BakerySection />}
      {section == "Craigslist" && <CraigslistSection />}
      {section == "Freestyle" && <SodaSection />}
      <div className="sectionContainer">
        <div className="section">
          <div className="gridOfProjects">
            {sectionList
              .filter((item, index) => {
                return section != item.projectTitle;
              })
              .map((item, index) => {
                return (
                  <div
                    className="gridItem"
                    key={index}
                    onClick={() => {
                      setSection(item.projectTitle);
                      window.scrollTo(0, 0);
                    }}
                    style={{
                      cursor: "pointer",
                      borderStyle: "none",
                      width: "400px",
                      height: "300px",
                    }}
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
                        position: "relative",
                        top: "-300px",
                        padding: "10px",
                        width: "400px",
                        height: "300px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: `rgba(0,0,0,0.6)`,
                          width: "85%",
                          padding: "10px",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <h2>{item.projectTitle}</h2>
                        </div>
                        <p>{item.projectDescription}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
