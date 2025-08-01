import styles from "../styles/introduction.module.scss";
import { imageLocations, profileURLs } from "../helpers/constants";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.photo}
        src={imageLocations.profileImage}
        alt="Alakesh Bora's Image"
      />
      <div className={styles.text}>
        <p>
          Hey there, I'm Alakesh Bora! I'm a{" "}
          <b className={styles.highlightedText}>frontend-heavy full-stack engineer</b> with a passion for building
          great user experiences.
        </p>{" "}
        <p>
          With <b className={styles.highlightedText}>over 5 years of experience</b>, I currently work as an{" "}
          <b className={styles.highlightedText}>SDE-2 at Intuit</b>, where I focus on leveraging my expertise in{" "}
          <b className={styles.highlightedText}>modern JavaScript, React, SCSS, and Webpack</b>.
        </p>
        <p>
          I'm also comfortable on the backend, using <b className={styles.highlightedText}>Java, Spring Boot, Python,
          and Node.js</b> to bring projects to life.
        </p>
        <p>
          I've dabbled in <b className={styles.highlightedText}>React Native</b> for mobile apps and am increasingly
          interested in <b className={styles.highlightedText}>Machine Learning and Agentic AI.</b>{" "}
        </p>
        <p>
          For a closer look at what I've been working on, feel free to browse my
          GitHub or check out my resume.
        </p>{" "}
      </div>
      <div className={styles.resumeSection}>
        <p>
          You can find my resume{" "}
          <a href={profileURLs.resumeLink} target="_blank">
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
