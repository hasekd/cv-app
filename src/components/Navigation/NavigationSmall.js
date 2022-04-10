import React, { useState } from "react";
import classes from "./NavigationSmall.module.css";

function NavigationSmall() {
  const [homePage, setHomePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [projectsPage, setProjectsPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);

  return (
    <div className={classes.square}>
      <div className={`${classes["square-link1"]} ${classes["square-link"]}`}>
        <a
          onMouseEnter={() => setHomePage(true)}
          onMouseLeave={() => setHomePage(false)}
          href="#home"
        >
          <span>
            {homePage ? (
              <span className={classes["hover-text"]}>Home</span>
            ) : (
              "H"
            )}
          </span>
        </a>
      </div>
      <div className={`${classes["square-link2"]} ${classes["square-link"]}`}>
        <a
          onMouseEnter={() => setAboutPage(true)}
          onMouseLeave={() => setAboutPage(false)}
          href="#about"
        >
          <span>
            {aboutPage ? (
              <span className={classes["hover-text"]}>About</span>
            ) : (
              "A"
            )}
          </span>
        </a>
      </div>
      <div className={`${classes["square-link3"]} ${classes["square-link"]}`}>
        <a
          onMouseEnter={() => setProjectsPage(true)}
          onMouseLeave={() => setProjectsPage(false)}
          href="#projects"
        >
          <span>
            {projectsPage ? (
              <span className={classes["hover-text"]}>Projects</span>
            ) : (
              "P"
            )}
          </span>
        </a>
      </div>
      <div className={`${classes["square-link4"]} ${classes["square-link"]}`}>
        <a
          onMouseEnter={() => setContactPage(true)}
          onMouseLeave={() => setContactPage(false)}
          href="#contact"
        >
          <span>
            {contactPage ? (
              <span className={classes["hover-text"]}>Contact</span>
            ) : (
              "C"
            )}
          </span>
        </a>
      </div>
    </div>
  );
}

export default NavigationSmall;
