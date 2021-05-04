import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience ">
      <h2 className="expHeader mb-5">Experiences</h2>
      <div className="expResponsive">
        <div className="half-width single-box box">
          <h2>Full Stack Web Developer</h2>

          <h3 className="name-highlight">2021-Present | Pro Level Developer</h3>
          <p>
            I am the master of HTML, CSS and Javascript. I know everything
            needed to make a website function, efficient. I didn't stop with the
            web. I went beyond with most popular Javascript framework called Vue
            JS. I even know the deployment, server and security. I will give you
            100% web solution..
          </p>
        </div>

        <div className="half-width single-box">
          <h2>Baby Web Developer</h2>

          <h3 className="name-highlight">
            2020-2021 | Programming Hero Learner
          </h3>
          <p>
            They didn't offer me a job. But I made myself as a remove web
            developer. I made their website and showed it to them. They liked
            it. And uploaded the content. It was fun working at Programming
            Hero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
