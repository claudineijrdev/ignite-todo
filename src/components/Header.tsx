import styles from "./Header.module.css";
import rocketLogo from "../assets/rocket-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo do Rocket" />
      <div className={styles.title}>
        <p className={styles.titlePrefix}>to</p>
        <p className={styles.titleSuffix}>do</p>
      </div>
    </header>
  )
}