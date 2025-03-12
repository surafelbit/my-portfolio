import React from "react";
import classes from "./AboutMe.module.css";

import imgs1 from "./img4.jpg";
export default function AboutMe(props) {
  function navigateHandle() {
    setTimeout(() => {
      const aboutSection = document.getElementById("contact");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Small delay ensures DOM is fully loaded
    //props.onThing();
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={classes.cover}>
      <div className={classes.wrapper}>
        <div className={classes.images}>
          <img
            className={classes.profileImg}
            width="160px"
            height="160px"
            src={imgs1}
            alt="My Image"
          />
        </div>
        {/** */}
        <div className={classes.texts}>
          {/* <div class={classes.progresscontainer}>
            <div class={classes.progresscircle}></div>
            <div class={classes.centercircle}></div>
            <div class={classes.progresstext}>80%</div>
          </div> */}

          <h1 className={classes.header1}>
            About <span className={classes.highlight}>Me</span>
          </h1>
          <h4 className={classes.header2}>Fullstack developer</h4>
          <p className={classes.paragraph}>
            I enjoy working with JavaScript, especially React and the MERN
            stack, as they allow me to build dynamic web applications
            efficiently. While my focus is on MERN, I have some experience with
            Flutter for mobile development, though it's not my primary choice. I
            find JavaScript's flexibility useful, and React's component-based
            structure makes UI development seamless. MERN enables full-stack
            projects, making it a great choice for scalable web apps. Flutter is
            interesting, but I prefer JavaScript-based frameworks for most
            projects.
          </p>
          <div className={classes.buttonsdiv}>
            <button onClick={navigateHandle} className={classes.buttons}>
              more about me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
