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
        <p>Hi there! My name is Alakesh Bora.</p>{" "}
        <p>I am currently working as an SDE-2 at Tekion Corp.</p>
        <p>
          I have over 2 years of experience working with Javascript and React.
        </p>
        <p>
          My frontend skills include advanced modern Javascript, deep knowledge of React, SCSS, and Webpack.
        </p>{" "}
        <p>
          {" "}
          On the back-end, I have experience working with node.js, GraphQL, and MongoDB.
        </p>{" "}
        <p>I've also previously worked using React Native for mobile development.</p>
        <p>You'll find my personal projects in my resume, or on my github!</p>
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
