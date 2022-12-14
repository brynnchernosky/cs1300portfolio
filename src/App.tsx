import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { isTemplateExpression } from "typescript";
import { PhysicsSection } from "./PhysicsSection";
import { CraigslistSection } from "./CraigslistSection";
import { BakerySection } from "./BakerySection";
import { AvocademySection } from "./AvocademySection";
import { SodaSection } from "./SodaSection";
import {
  IconButton,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [section, setSection] = useState<string>("");
  const sectionList: {
    projectTitle: string;
    projectDescription: string;
    projectImage: string;
  }[] = [
    {
      projectTitle: "Avocademy",
      projectDescription:
        "Teaching user interface design through learning modules",
      projectImage: "AvocademyCover.png",
    },
    {
      projectTitle: "PhySims",
      projectDescription:
        "Teaching algebra-based mechanics through physics simulations",
      projectImage: "PhysicsCover.png",
    },
    {
      projectTitle: "Craigslist",
      projectDescription:
        "Redesigning the Craigslist webpage for a modern audience",
      projectImage: "CraigslistCover.png",
    },
    {
      projectTitle: "Freestyle",
      projectDescription:
        "Researching college students' use of dining hall soda machines",
      projectImage: "SodaCover.png",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.scrollTo(0, 0);
  }, []);

  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="webpage">
      <div className="homepage">
        <div style={{ zIndex: 5001 }}>
          {(section == "Avocademy" || section == "Craigslist") && (
            <div>
              <IconButton
                color="inherit"
                onClick={(e) => {
                  setAnchor(e.currentTarget);
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        window.scroll(0, 0);
                        setAnchor(null);
                      }}
                    >
                      <ListItemText primary="Overview" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("secondSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Low-Fidelity Prototypes" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("thirdSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="High-Fidelity Prototype" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("finalSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Final Design" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("takeawaySection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Takeaways" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </div>
          )}
          {section == "PhySims" && (
            <div>
              <IconButton
                color="inherit"
                onClick={(e) => {
                  setAnchor(e.currentTarget);
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        window.scroll(0, 0);
                        setAnchor(null);
                      }}
                    >
                      <ListItemText primary="Overview" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("secondSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Research" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("thirdSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Design Process" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("finalSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Final Design" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("takeawaySection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Takeaways" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </div>
          )}
          {section == "Freestyle" && (
            <div>
              <IconButton
                color="inherit"
                onClick={(e) => {
                  setAnchor(e.currentTarget);
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Popover
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        window.scroll(0, 0);
                        setAnchor(null);
                      }}
                    >
                      <ListItemText primary="Overview" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("secondSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Observations" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("thirdSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Interviews" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("fourthSection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Personas" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (document) {
                          const el = document.getElementById("takeawaySection");
                          if (el) {
                            el.scrollIntoView();
                          }
                          window.scrollBy(0, -160);
                          setAnchor(null);
                        }
                      }}
                    >
                      <ListItemText primary="Takeaways" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
            </div>
          )}
        </div>
        <header className="homepageHeader">
          <div>
            {width < 575 && (
              <h1
                onClick={() => {
                  setSection("About");
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
              >
                Jane
              </h1>
            )}
            {width >= 575 && (
              <h1
                onClick={() => {
                  setSection("About");
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
              >
                Jane Doe
              </h1>
            )}

            {width >= 840 && (
              <p>Student at Brown University | Designer and Developer</p>
            )}
          </div>
          <nav className="homepageNavigation">
            <div
              className="navBarElement"
              onClick={() => {
                setSection("");
                window.scrollTo(0, 0);
              }}
            >
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
