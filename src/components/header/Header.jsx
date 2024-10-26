import styles from './Header.module.css';

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={"container"}>
          <div className={styles.inner_container}>
            <div className={styles.header_logo}>
              <img src="vite.svg" alt="Header Logo" />
            </div>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <a href="#">Menu</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
