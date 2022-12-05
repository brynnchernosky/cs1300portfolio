import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Section } from "./Section";

export const CraigslistSection = () => {
  return (
    <Section
      color={[0, 51, 102]}
      title={"Newlist"}
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
          <h3>Usability Issues</h3>
          <ul>
            <li>
              <strong>Clutter</strong>
            </li>
            <ul>
              <li>
                The homepage for a given location is cluttered and overwhelming,
                with far too much content.
              </li>
              <li>
                Although this allows users to only make a limited number of
                clicks to reach their intended section, it comes at the expense
                of organization, and efficiency gained by having fewer clicks is
                likely lost in the amount of time users take to find their
                destination.
              </li>
              <li>
                This issue is compounded by a too small font and insufficient
                whitespace.
              </li>
            </ul>
            <li>
              <strong>Navigation</strong>
            </li>
            <ul>
              <li>
                Navigation is also difficult. There are insufficient cues to
                tell users where to look, with attention being drawn
                alternatively between bolded section headers in the center, the
                event calendar on the top left, and bolded other locations on
                the bottom right.
              </li>
              <li>
                Within a given section, there are arbitrarily one, two, or three
                columns of content.
              </li>
              <li>
                For experienced users who only come to the site for a single
                purpose, this isn&apos;t a big deal, but for new users or users
                wishing to go to unfamiliar sections of the webpage, this makes
                navigation a pain.
              </li>
              <li>
                Memorability is also limited due to a lack of visual landmarks
                aside from the calendar in the upper left.
              </li>
            </ul>
            <li>
              <strong>Exploration</strong>
            </li>
            <ul>
              <li>
                In general, the present layout is suited for users that have a
                specific intention in coming to the webpage versus users without
                a particular reason for visiting who want to see what the site
                has to offer.
              </li>
              <li>
                Similar webpages based on user-created content will often
                display articles or posts on the homepage to aid in exploration,
                but that&apos;s not present here.{" "}
              </li>
            </ul>
            <li>
              <strong>Professionalism</strong>
            </li>
            <ul>
              <li>
                There&apos;s a general lack of professionalism in the design.
                While blue text and all lowercase letters is a branding
                strategy, it makes the webpage look less professional and less
                trustworthy.{" "}
              </li>
              <li>
                Rather than being an issue of only aesthetic importance, this
                directly influences usability—users that don&apos;t trust a
                webpage won&apos;t be inclined to use it.
              </li>
            </ul>
          </ul>
          <br></br>
          <h3>Accessibility Issues</h3>
          <ul>
            <li>
              <strong>Elements</strong>
            </li>
            <ul>
              <li>
                The search bar is missing a label, which means it may not be
                properly presented to screen reader users.{" "}
              </li>
              <li>
                The document language also isn&apos;t identified, which can
                cause issues for screen readers and automatic translation.
              </li>
              <li> The h2 heading level is skipped.</li>
            </ul>
            <li>
              <strong>Styling</strong>
            </li>
            <ul>
              <li>
                The default font is small; this can be addressed externally by
                changing the browser&apos;s default font size, but this messes
                up the webpage styling, with the rightmost column pushed
                awkwardly to the bottom left.{" "}
              </li>
              <li>
                Almost all of the elements are links, so the small font size and
                lack of whitespace mean that users could easily click the wrong
                link by accident.
              </li>
            </ul>
            <li>
              <strong>Content</strong>
            </li>
            <ul>
              <li>
                Because there&apos;s so much content, it takes a long time to
                tab through everything when navigating the webpage without a
                mouse.
              </li>
              <li>
                The tab ordering iterates through the left column first, whereas
                most users probably care more about the center area.
              </li>
            </ul>
          </ul>
          <br></br>
          <h3>Redesign</h3>
          <p>
            {" "}
            I redesigned the Craigslist homepage for Providence, RI to address
            all of these issues. The redesign was particularly inspired by the
            user interfaces for social media platforms like Reddit and Twitter
            and news platforms like <em>The Wall Street Journal</em> and{" "}
            <em>The New York Times</em>.
          </p>
        </div>
      }
      firstSectionCarousel={null}
      secondSectionTitle={""}
      secondSectionContent={<div></div>}
      thirdSectionTitle={""}
      thirdSectionContent={<div></div>}
      finalDesignContent={<div></div>}
      takeawaysContent={<div></div>}
    />
  );
};
