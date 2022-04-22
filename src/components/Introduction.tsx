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
        <p>I am currently working as a Software Engineer at Tekion Corp.</p>
        <p>
          Although I enjoy working on the front-end more, I am equally skilled
          in working on the back-end.{" "}
        </p>
        <p>
          {" "}
          On the front-end, I have experience working with React.js, Typescript,
          Redux, and vanilla CSS along with CSS pre-processors like SASS.{" "}
        </p>{" "}
        <p>
          {" "}
          On the back-end, I have experience working with Node.js, SQL, and
          Firebase.{" "}
        </p>{" "}
        <p>I've worked using React Native for mobile development.</p>
        <p>
          I'm also highly skilled in Data Structures and Algorithms, modern
          Javascript, and Python.
        </p>
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
