import styles from "./Auth.module.css";
import { useLogoutViewModel } from "./useLogoutViewModel";

export const Logout = () => {
  const { logout } = useLogoutViewModel();

  return (
    <button className={styles.button} onClick={logout}>
      Logout
    </button>
  );
};
