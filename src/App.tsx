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
            {window.matchMedia("(min-width: 500px)").matches && (
              <p>Student at Brown University | Designer and Developer</p>
            )}
          </div>
          <nav className="homepageNavigation">
            <div className="navBarElement" onClick={() => setSection("")}>
              <p>Projects</p>
            </div>
            <div
              className="navBarElement"
              onClick={() => {
                setSection("About");
                window.scrollTo(0, 0);
              }}
            >
              <p>About Me</p>
            </div>
          </nav>
        </header>
      </div>
      {section == "About" && (
        <div className="sectionContainer">
          <div className="section">
            <div
              className="sectionHeader"
              style={{ height: "9em", width: "100%" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "9em",
                  backgroundColor: "rgb(" + 161 + "," + 0 + "," + 58 + ")",
                }}
              >
                <img
                  src="AboutBanner.jpeg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    opacity: 0.5,
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
                <h2>About Me</h2>
              </div>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ width: "60%" }}>
                <h3>Hi! I&apos;m Jane</h3>
                <p>
                  I&apos;m a student at Brown University studying computer
                  science.
                </p>

                <br />
                <p>
                  {" "}
                  My designs are all informed by my experience with{" "}
                  <b>video game development</b>; I specialize in designing and
                  building <b>streamlined frontend experiences</b> with a focus
                  on <b>young adult audiences</b>.
                </p>
                <br />
                <p>
                  I&apos;m experienced with the <b>MERN stack</b>, as well as
                  design platforms <b>Figma</b> and <b>Balsamiq</b>. I also have
                  experience with <b>real time graphics</b> and creating
                  augmented reality effects in <b>SparkAR</b>.
                </p>
                <br />
                <p>
                  You can check out some of my designs below. For inquiries,
                  please reach out to me at <a href="">janedoe@gmail.com</a>
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <img
                  src="ProfilePhoto.jpeg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
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
        <div className="sectionGrid">
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
