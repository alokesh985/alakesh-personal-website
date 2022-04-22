import Header from "./Header";
import styles from "../styles/container.module.scss";
import Introduction from "./Introduction";
import Contact from "./Contact";

const Container = () => {
  return (
    <div className={styles.baseStyles}>
      <Header />
      <Introduction />
      <Contact />
    </div>
  );
};

export default Container;
