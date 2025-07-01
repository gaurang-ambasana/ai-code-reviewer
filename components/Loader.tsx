import { type FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}></div>
    <div className={styles.loadingText}>Generating Review...</div>
  </div>
);

export default Loader;
