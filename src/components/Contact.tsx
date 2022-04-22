import styles from "../styles/contact.module.scss";
import { personalDetails } from "../helpers/constants";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.contactHeading}>CONTACT ME</h1>
      <div className={styles.contacts}>
        <div className={styles.emailSection}>
          Email:{" "}
          <a href={`mailto:${personalDetails.emailAddress}`} target="_blank">
            {personalDetails.emailAddress}
          </a>
        </div>
        <div className={styles.phoneNumber}>
          Phone Numbers (IN):{" "}
          <a href={`tel:${personalDetails.phoneNumber1}`} target="_blank">
            {personalDetails.phoneNumber1}
          </a>
          <span>{", "}</span>
          <a href={`tel:${personalDetails.phoneNumber2}`} target="_blank">
            {personalDetails.phoneNumber2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
