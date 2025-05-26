import { Product } from "@/domain/model/product";
import { Cookie } from "@/ui/Cookie";

import styles from "./Front.module.css";
import { useFrontViewModel } from "./useFrontViewModel";

export const Front = () => {
  const { isLoading, cookies } = useFrontViewModel();

  return (
    <main>
      <h1>Cookies</h1>
      {isLoading && <p>Loading 🏃...</p>}
      {!isLoading && (
        <ul className={styles.list}>
          {cookies.map((cookie: Product) => (
            <li key={cookie.id}>
              <Cookie cookie={cookie} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
