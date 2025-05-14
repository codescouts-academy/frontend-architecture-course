import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useHeaderViewModel } from "./useHeaderViewModel";

export const Header = () => {
  const { isLoggedIn, userName, quantity } = useHeaderViewModel();

  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="./favicon.png"
            width="40px"
            alt="codescouts-logo"
          />
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.7rem",
            }}
          >
            <span>{"<Code"}</span>
            <span
              style={{
                color: "#ffe102",
              }}
            >
              {"Scouts/>"}
            </span>
          </span>
        </div>
      </Link>

      {!isLoggedIn ? (
        <Link className={styles.button} to="/auth">
          Log in
        </Link>
      ) : (
        <Link className={styles.button} to="/user">
          {userName} ({quantity})
        </Link>
      )}
    </header>
  );
};
