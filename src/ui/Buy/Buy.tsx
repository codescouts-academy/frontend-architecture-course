import styles from "./Buy.module.css";
import { useBuyViewModel } from "./useBuyViewModel";

export const Buy = () => {
  const {
    user,
    cart,
    name,
    setName,
    email,
    setEmail,
    address,
    setAddress,
    loading,
    handleSubmit,
  } = useBuyViewModel();

  if (!user || cart.isEmpty) return null;

  return (
    <section>
      <h2>Checkout</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <label>
          <span>Address</span>
          <textarea
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Preparing an order..." : "Checkout"}
        </button>
      </form>
    </section>
  );
};
