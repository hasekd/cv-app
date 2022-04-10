import NavigationBar from "./components/Navigation";
import classes from "./App.module.css";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import NavigationSmall from "./components/Navigation/NavigationSmall";

function App() {
  return (
    <>
      <div id="home" className={classes["nav-section"]}>
        <NavigationBar />
      </div>
      <div id="about" className={classes["about-section"]}>
        <AboutPage />
        <div className={classes.navigation}>
          <NavigationSmall />
        </div>
      </div>
      <div id="contact" className={classes["contact-section"]}>
        <ContactPage />
        <div className={classes.navigation}>
          <NavigationSmall />
        </div>
      </div>
    </>
  );
}

export default App;
