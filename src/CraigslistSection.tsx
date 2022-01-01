import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const CraigslistSection = () => {
  const [showStandardLabels, setShowStandardLabels] = useState<boolean>(false);
  const [showSmallLabels, setShowSmallLabels] = useState<boolean>(false);
  const [showMediumLabels, setShowMediumLabels] = useState<boolean>(false);

  const [showStandardHighLabels, setShowStandardHighLabels] =
    useState<boolean>(false);
  const [showStandardHighDivs, setShowStandardHighDivs] =
    useState<boolean>(false);
  const [showSmallHighLabels, setShowSmallHighLabels] =
    useState<boolean>(false);
  const [showSmallHighDivs, setShowSmallHighDivs] = useState<boolean>(false);
  const [showMediumHighLabels, setShowMediumHighLabels] =
    useState<boolean>(false);
  const [showMediumHighDivs, setShowMediumHighDivs] = useState<boolean>(false);

  const [clutterOpen, setClutterOpen] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [discoverOpen, setDiscoverOpen] = useState<boolean>(false);
  const [profOpen, setProfOpen] = useState<boolean>(false);
  const [accOpen, setAccOpen] = useState<boolean>(false);

  const listDropdown = {
    width: "60vw",
    bgcolor: "background.paper",
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "0px",
    marginBottom: "-1px",
  };
  const dropdownContent = {
    padding: "10px",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
  };
  const listDropdownText = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3em",
    width: "60vw",
  };
  return (
    <Section
      color={[0, 51, 102]}
      title={"Craigslist"}
      titleBackgroundImage={"CraigslistBanner.jpeg"}
      firstSectionContent={
        <div>
          <p>
            <a
              href="https://providence.craigslist.org"
              target="_blank"
              rel="noreferrer"
            >
              Craigslist
            </a>{" "}
            has been around since 1995 as a place for users to post and respond
            to classified advertisements, and its notorious user interface today
            is reminiscent of classic 90s web design (or lack thereof).{" "}
          </p>
          <br></br>
          <div style={{ borderStyle: "solid", borderWidth: "1px" }}>
            <img
              src="original.png"
              alt="screenshot of the Craigslist homepage for Providence, Rhode Island"
            />
          </div>
          <br></br>
          <h4>Usability Issues</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <List
              sx={listDropdown}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setClutterOpen(!clutterOpen)}>
                <div style={listDropdownText}>
                  <p>
                    <b>Clutter</b>
                  </p>
                  {clutterOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
              <Collapse in={clutterOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={dropdownContent}>
                  <ul>
                    <li>
                      The homepage for a given location is cluttered and
                      overwhelming, with far too much content.
                    </li>
                    <li>
                      Although this allows users to only make a limited number
                      of clicks to reach their intended section, it comes at the
                      expense of organization, and efficiency gained by having
                      fewer clicks is likely lost in the amount of time users
                      take to find their destination.
                    </li>
                    <li>
                      This issue is compounded by a too small font and
                      insufficient whitespace.
                    </li>
                  </ul>
                </List>
              </Collapse>
            </List>
            <List
              sx={listDropdown}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setNavOpen(!navOpen)}>
                <div style={listDropdownText}>
                  <p>
                    <b>Navigability</b>
                  </p>
                  {navOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
              <Collapse in={navOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={dropdownContent}>
                  <ul>
                    <li>
                      Navigation is also difficult. There are insufficient cues
                      to tell users where to look, with attention being drawn
                      alternatively between bolded section headers in the
                      center, the event calendar on the top left, and bolded
                      other locations on the bottom right.
                    </li>
                    <li>
                      Within a given section, there are arbitrarily one, two, or
                      three columns of content.
                    </li>
                    <li>
                      For experienced users who only come to the site for a
                      single purpose, this isn&apos;t a big deal, but for new
                      users or users wishing to go to unfamiliar sections of the
                      webpage, this makes navigation a pain.
                    </li>
                    <li>
                      Memorability is also limited due to a lack of visual
                      landmarks aside from the calendar in the upper left.
                    </li>
                  </ul>
                </List>
              </Collapse>
            </List>
            <List
              sx={listDropdown}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setDiscoverOpen(!discoverOpen)}>
                <div style={listDropdownText}>
                  <p>
                    <b>Discoverability</b>
                  </p>
                  {discoverOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
              <Collapse in={discoverOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={dropdownContent}>
                  <ul>
                    <li>
                      Navigation is also difficult. There are insufficient cues
                      to tell users where to look, with attention being drawn
                      alternatively between bolded section headers in the
                      center, the event calendar on the top left, and bolded
                      other locations on the bottom right.
                    </li>
                    <li>
                      Within a given section, there are arbitrarily one, two, or
                      three columns of content.
                    </li>
                    <li>
                      For experienced users who only come to the site for a
                      single purpose, this isn&apos;t a big deal, but for new
                      users or users wishing to go to unfamiliar sections of the
                      webpage, this makes navigation a pain.
                    </li>
                    <li>
                      Memorability is also limited due to a lack of visual
                      landmarks aside from the calendar in the upper left.
                    </li>
                  </ul>
                </List>
              </Collapse>
            </List>
            <List
              sx={listDropdown}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setProfOpen(!profOpen)}>
                <div style={listDropdownText}>
                  <p>
                    <b>Professionalism</b>
                  </p>
                  {profOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
              <Collapse in={profOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={dropdownContent}>
                  <ul>
                    <li>
                      There&apos;s a general lack of professionalism in the
                      design. While blue text and all lowercase letters is a
                      branding strategy, it makes the webpage look less
                      professional and less trustworthy.{" "}
                    </li>
                    <li>
                      Rather than being an issue of only aesthetic importance,
                      this directly influences usability—users that don&apos;t
                      trust a webpage won&apos;t be inclined to use it.
                    </li>
                  </ul>
                </List>
              </Collapse>
            </List>
            <List
              sx={listDropdown}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={() => setAccOpen(!accOpen)}>
                <div style={listDropdownText}>
                  <p>
                    <b>Accessibility</b>
                  </p>
                  {accOpen ? <ExpandLess /> : <ExpandMore />}
                </div>
              </ListItemButton>
              <Collapse in={accOpen} timeout="auto" unmountOnExit>
                <List component="div" sx={dropdownContent}>
                  <ul>
                    <li>
                      <strong>Elements</strong>
                    </li>
                    <ul>
                      <li>
                        The search bar is missing a label, which means it may
                        not be properly presented to screen reader users.{" "}
                      </li>
                      <li>
                        The document language also isn&apos;t identified, which
                        can cause issues for screen readers and automatic
                        translation.
                      </li>
                      <li> The h2 heading level is skipped.</li>
                    </ul>
                    <li>
                      <strong>Styling</strong>
                    </li>
                    <ul>
                      <li>
                        The default font is small; this can be addressed
                        externally by changing the browser&apos;s default font
                        size, but this messes up the webpage styling, with the
                        rightmost column pushed awkwardly to the bottom left.{" "}
                      </li>
                      <li>
                        Almost all of the elements are links, so the small font
                        size and lack of whitespace mean that users could easily
                        click the wrong link by accident.
                      </li>
                    </ul>
                    <li>
                      <strong>Content</strong>
                    </li>
                    <ul>
                      <li>
                        Because there&apos;s so much content, it takes a long
                        time to tab through everything when navigating the
                        webpage without a mouse.
                      </li>
                      <li>
                        The tab ordering iterates through the left column first,
                        whereas most users probably care more about the center
                        area.
                      </li>
                    </ul>
                  </ul>
                </List>
              </Collapse>
            </List>
          </div>
          <br></br>
          <h4>Redesign</h4>
          <p>
            {" "}
            I redesigned the Craigslist homepage for Providence, RI to address
            all of these issues. The redesign was particularly inspired by the
            user interfaces for social media platforms like Reddit and Twitter
            and news platforms like <em>The Wall Street Journal</em> and{" "}
            <em>The New York Times</em>.
          </p>
          <br />
          <p>
            This project gave me the chance to practice using <b>Balsamiq</b>,{" "}
            <b>Figma</b>, <b>HTML</b>, and <b>CSS</b>. I also got to practice{" "}
            <b>designing streamlined frontend experiences</b> and{" "}
            <b>targeting a young adult audience</b>.
          </p>
        </div>
      }
      secondSectionTitle={"Low-Fidelity Prototypes"}
      secondSectionContent={
        <div>
          <div>
            <p>
              I developed the following low-fi prototypes for laptop/desktop,
              tablet, and mobile layouts. You can click the &quot;Toggle
              labels&quot; button above each sketch to toggle on and off the
              user interface component labels.
            </p>
            <br></br>
            <h4>Base Design (Laptops and Desktops)</h4>
            <button
              onClick={() => {
                setShowStandardLabels(!showStandardLabels);
              }}
              style={{ marginLeft: "5px", marginBottom: "10px" }}
            >
              Toggle labels
            </button>
            <div id="standardLowFidelityPrototypeImageContainer">
              {showStandardLabels && (
                <img
                  src="LabeledStandardLowFidelityPrototype.png"
                  alt="labeled standard low fidelity prototype"
                  className="prototype"
                />
              )}
              {!showStandardLabels && (
                <img
                  src="StandardLowFidelityPrototype.png"
                  alt="standard low fidelity prototype"
                  className="prototype"
                />
              )}
            </div>
            <br></br>
            <p>
              This base interface is intended for laptop and desktop computers.
              The main components of the redesigned interface are as follows:
            </p>
            <ol>
              <li>
                <strong>Hamburger Menu</strong>: When clicked, this opens up a
                sidebar menu containing the general information in the leftmost
                column of the original interface. This helps reduce content on
                the homepage.
              </li>
              <li>
                <strong>Search Bar</strong>: Similar to the original search bar,
                but with reduced text and the addition of an icon. This helps
                reduce content on the homepage, and the new location draws
                attention to the search bar more easily.
              </li>
              <li>
                <strong>Title and Subtitle</strong>: Both elements are centered
                to help direct the user&apos;s attention. Clicking on the
                subtitle will now lead to a landing page with the location
                options in the rightmost column of the original interface, which
                helps reduce content on the homepage.
              </li>
              <li>
                <strong>Login Button</strong>: Text changed from &quot;My
                Account&quot; to &quot;Login&quot; to better represent its
                function. New location emphasizes importance. Much larger, which
                aids in accessibility and reduces the chance of mis-clicks.
              </li>
              <li>
                <strong>Language Menu</strong>: Much larger, which aids in
                accessibility and reduces the chance of mis-clicks.
              </li>
              <li>
                <strong>Menu Bar</strong>: The buttons represent the major
                sections. Clicking on the button will take the user to a landing
                page for that section where additional filtering can be done.
                This helps drastically reduce content on the homepage.
              </li>
              <li>
                <strong>Recent Posts</strong>: This is a new addition to the
                webpage to increase the ability for users to explore and
                discover new content. Recent/popular posts from various
                categories will appear and scroll infinitely. If the post
                includes a picture, it will be shown to increase user
                interest/engagement and break up the text.
              </li>
              <li>
                <strong>Upcoming Events</strong>: This is a new addition to the
                webpage to increase the ability for users to explore and
                discover new events. Upcoming popular events in the area will
                appear and scroll.
              </li>
              <li>
                <strong>Popular Forums</strong>: Clicking on a forum category
                will expand the section to list forums within that category.
                This helps reduce content on the homepage.
              </li>
            </ol>
            <br></br>
            <h4>Tablet Design</h4>
            <button
              onClick={() => {
                setShowMediumLabels(!showMediumLabels);
              }}
              style={{ marginLeft: "5px", marginBottom: "10px" }}
            >
              Toggle labels
            </button>
            <div id="mediumLowFidelityPrototypeImageContainer">
              {showMediumLabels && (
                <img
                  src="LabeledMediumLowFidelityPrototype.png"
                  alt="labeled tablet low fidelity prototype"
                  className="prototype"
                />
              )}
              {!showMediumLabels && (
                <img
                  src="MediumLowFidelityPrototype.png"
                  alt="tablet low fidelity prototype"
                  className="prototype"
                />
              )}
            </div>
            <br></br>
            <p>
              This design is intended for tablets. The changes from the base
              design are to account for the smaller amount of screen space and
              are as follows:
            </p>
            <ul>
              <li>
                <strong>Content</strong>: The events block and forums block
                disappear in favor of emphasizing classified advertisement
                posts, the website&apos;s focus.
              </li>
            </ul>
            <br></br>
            <h4>Mobile Design</h4>
            <button
              onClick={() => {
                setShowSmallLabels(!showSmallLabels);
              }}
              style={{ marginLeft: "5px", marginBottom: "10px" }}
            >
              Toggle labels
            </button>
            <div id="smallLowFidelityPrototypeImageContainer">
              {showSmallLabels && (
                <img
                  src="LabeledSmallLowFidelityPrototype.png"
                  className="prototype"
                  alt="labeled mobile low fidelity prototype"
                />
              )}
              {!showSmallLabels && (
                <img
                  src="SmallLowFidelityPrototype.png"
                  className="prototype"
                  alt="mobile low fidelity prototype"
                />
              )}
            </div>
            <br></br>
            <p>
              This design is intended for mobile phones. The changes from the
              base design are all to account for the smaller amount of screen
              space available, and only the most important content is
              prioritized. The changes are as follows:
            </p>
            <ul>
              <li>
                <strong>Content</strong>: As in the tablet design, the events
                block and forums block disappear in favor of emphasizing
                classified advertisement posts, the website&apos;s focus.
              </li>
              <li>
                <strong>Header</strong> The search bar disappears and the search
                icon becomes a button to open the search bar. The login button
                and language button are stacked instead of next to each other.
              </li>
              <li>
                <strong>Menu Bar</strong> The menu bar disappears and is now
                accessible through the hamburger menu.
              </li>
            </ul>
          </div>
          <br />
          <div>
            <p>
              For stylistic consistency, I developed the following design guide
              for the redesigned webpage. The icons in the design guide are
              Unicon open source icons by{" "}
              <a href="https://iconscout.com">IconScout</a>.
            </p>
            <div id="designGuideContainer">
              <img
                src="DesignGuide.png"
                id="designGuide"
                alt="design guide with standard element interactions, fonts, colors, etc."
              />
            </div>
          </div>
        </div>
      }
      thirdSectionTitle={"High-Fidelity Prototype"}
      thirdSectionContent={
        <div>
          <p>
            Using my low-fi prototypes and design guide as reference, I
            developed the following high-fi prototypes for laptop/desktop,
            tablet, and mobile layouts. You can click the &quot;Show element
            labels&quot; button above each prototype to display element labels,
            and the &quot;Show div labels&quot; button to show the major divs.
            To remove labels, you can click the &quot;Show content only&quot;
            button.{" "}
          </p>
          <br></br>
          <h4>Laptop/Desktop Design</h4>
          <button
            onClick={() => {
              setShowStandardHighLabels(false);
              setShowStandardHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show content only
          </button>
          <button
            onClick={() => {
              setShowStandardHighLabels(true);
              setShowStandardHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show element labels
          </button>
          <button
            onClick={() => {
              setShowStandardHighLabels(false);
              setShowStandardHighDivs(true);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show div labels
          </button>
          <div id="standardHighFidelityPrototypeImageContainer">
            {showStandardHighDivs && (
              <img
                src="DivStandardHighFidelityPrototype.png"
                className="prototype"
                alt="standard high fidelity prototype with divs labeled"
              />
            )}
            {showStandardHighLabels && (
              <img
                src="LabeledStandardHighFidelityPrototype.png"
                className="prototype"
                alt="standard high fidelity prototype with elements labeled"
              />
            )}
            {!showStandardHighLabels && !showStandardHighDivs && (
              <img
                src="StandardHighFidelityPrototype.png"
                className="prototype"
                alt="standard high fidelity prototype"
              />
            )}
          </div>
          <br></br>
          <h4>Tablet Design</h4>
          <button
            onClick={() => {
              setShowMediumHighLabels(false);
              setShowMediumHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show content only
          </button>
          <button
            onClick={() => {
              setShowMediumHighLabels(true);
              setShowMediumHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show element labels
          </button>
          <button
            onClick={() => {
              setShowMediumHighLabels(false);
              setShowMediumHighDivs(true);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show div labels
          </button>
          <div id="mediumHighFidelityPrototypeContainer">
            {showMediumHighDivs && (
              <img
                src="DivMediumHighFidelityPrototype.png"
                className="prototype"
                alt="tablet high fidelity prototype with divs labeled"
              />
            )}
            {showMediumHighLabels && (
              <img
                src="LabeledMediumHighFidelityPrototype.png"
                className="prototype"
                alt="tablet high fidelity prototype with elements labeled"
              />
            )}
            {!showMediumHighLabels && !showMediumHighDivs && (
              <img
                src="MediumHighFidelityPrototype.png"
                className="prototype"
                alt="tablet high fidelity prototype"
              />
            )}
          </div>
          <br></br>
          <h4>Mobile Design</h4>
          <button
            onClick={() => {
              setShowSmallHighLabels(false);
              setShowSmallHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show content only
          </button>
          <button
            onClick={() => {
              setShowSmallHighLabels(true);
              setShowSmallHighDivs(false);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show element labels
          </button>
          <button
            onClick={() => {
              setShowSmallHighLabels(false);
              setShowSmallHighDivs(true);
            }}
            style={{ marginLeft: "5px", marginBottom: "10px" }}
          >
            Show div labels
          </button>
          <div id="smallHighFidelityPrototypeImageContainer">
            {showSmallHighDivs && (
              <img
                src="DivSmallHighFidelityPrototype.png"
                className="prototype"
                alt="mobile high fidelity prototype with divs labeled"
              />
            )}
            {showSmallHighLabels && (
              <img
                src="LabeledSmallHighFidelityPrototype.png"
                className="prototype"
                alt="mobile high fidelity prototype with elements labeled"
              />
            )}
            {!showSmallHighLabels && !showSmallHighDivs && (
              <img
                src="SmallHighFidelityPrototype.png"
                className="prototype"
                alt="mobile high fidelity prototype"
              />
            )}
          </div>
        </div>
      }
      finalDesignContent={
        <div>
          <p>
            Based on my high-fidelity prototype, I developed a redesigned
            webpage using HTML/CSS. The deployed webpage can be found{" "}
            <a
              href="https://cheerfuldragonfly182.github.io/redesigned-webpage/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            . Screenshots of the website layout for various device sizes can be
            found below.
          </p>
          <br></br>
          <h4>Laptop/Desktop Layout</h4>
          <div className="screenshotContainer">
            <div className="screenshotWrapper">
              <img
                src="LaptopWebpage.png"
                alt="laptop/desktop webpage layout"
              />
            </div>
          </div>
          <br></br>
          <h4>Tablet Layout</h4>
          <div className="screenshotContainer">
            <div className="screenshotWrapper">
              <img src="TabletWebpage.png" alt="tablet webpage layout" />
            </div>
          </div>
          <br></br>
          <h4>Mobile Layout</h4>
          <div className="screenshotContainer">
            <div className="screenshotWrapper">
              <img src="MobileWebpage.png" alt="mobile webpage layout" />
            </div>
          </div>
          <br></br>
          <p>
            Placeholder elements are used for elements that would be interactive
            as described in the &quot;Low-Fi Prototypes&quot; section.
          </p>
          <br></br>
          <p>
            The redesigned webpage has addressed all of the original usability
            issues noted, notably reducing the amount of content on the screen,
            improving navigability, improving the ability of users to discover
            new content, and improving the professionalism of the webpage. The
            reduction in content ameliorates many of the accessibility issues
            noted, as does the addition of missing tags/labels and use of all
            heading levels.
          </p>
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
              <b>Responsive Design</b> From designing this webpage to display
              well on a variety of platforms (mobile, tablet, and
              laptop/desktop), I learned a lot about common paradigms for each
              layout and how to most efficiently use media queries.
            </li>
            <li>
              <b>Importance of Prototyping</b> Separating out the design from
              the build process promotes efficiency. By having detailed
              prototypes, it was very easy to build the final webpage.{" "}
            </li>
          </ul>
        </div>
      }
    />
  );
};
