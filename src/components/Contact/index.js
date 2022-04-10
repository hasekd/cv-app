import React from "react";
import classes from "./ContactPage.module.css";

function ContactPage() {
  return (
    <>
      <div className={classes.card}>
        <h2>Pošlete mi zprávu.</h2>
        <form>
          <div className={classes.name}>
            <label>Jméno</label>
            <input className={classes.inputs} type="text" />
          </div>
          <label>E-mail</label>
          <input
            className={`${classes.email} ${classes.inputs}`}
            type="email"
          />
          <label>Zpráva</label>
          <input
            className={`${classes.message} ${classes.inputs}`}
            type="text"
          />
          <div className={classes.button}>
            <button type="submit">Odeslat</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactPage;
