import styles from "./Auth.module.css";
import { useAuthViewModel } from "./useAuthViewModel";

export const Auth = () => {
  const { login, name, email, setName, setEmail, loading } = useAuthViewModel();

  return (
    <form className={styles.form} onSubmit={login}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button className={styles.button} type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
