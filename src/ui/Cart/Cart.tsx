import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { Cookie } from "@/ui/Cookie";

import styles from "./Cart.module.css";

export const Cart = () => {
  const { cart } = useCartStorage();

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product, index) => (
          <li key={`${product.id}-${index}`}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {cart.calculateTotal()} €</p>
    </section>
  );
};
