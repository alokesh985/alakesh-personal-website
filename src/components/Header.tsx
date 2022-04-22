import styles from "../styles/header.module.scss";
import { profileURLs, imageLocations } from "../helpers/constants";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        <div className={styles.name}>Alakesh Bora</div>
      </div>
      <div className={styles.linksContainer}>
        <a href={profileURLs.linkedIn} target="_blank">
          <img
            src={imageLocations.linkedInLogo}
            className={styles.socialMediaIcon}
            alt="Alakesh Bora's LinkedIn Profile"
          />
        </a>
        <a href={profileURLs.github} target="_blank">
          <img
            src={imageLocations.githubLogo}
            className={styles.socialMediaIcon}
            alt="Alakesh Bora's GitHub Profile"
          />
        </a>
        <a href={profileURLs.leetcode} target="_blank">
          <img
            src={imageLocations.leetcodeLogo}
            className={styles.socialMediaIcon}
            alt="Alakesh Bora's Leetcode Profile"
          />
        </a>
        <a href={profileURLs.hackerRank} target="_blank">
          <img
            src={imageLocations.hackerRankLogo}
            className={styles.socialMediaIcon}
            alt="Alakesh Bora's HackerRank Profile"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
