import React from "react";
import classes from "./AboutPage.module.css";

function AboutPage() {
  return (
    <div className={classes.card}>
      <p>
        Jmenuji se Daniel Hašek. Jsem <strong>Frontend Web Developer</strong>.
        Specializuji se hlavně na React, Javascript, HTML a CSS. Do budoucna
        plánuji, že se stanu <strong>Full-stack</strong> vývojářem.
      </p>
    </div>
  );
}

export default AboutPage;
