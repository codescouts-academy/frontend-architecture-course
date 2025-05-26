import { ingredients, Product } from "@/domain/model/product";
import { User } from "@/domain/model/user";

export const Toppings = ({
  user,
  cookie,
}: {
  user?: User;
  cookie: Product;
}) => {
  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}

          {user?.hasPreference(topping) && <>👍</>}
          {user?.hasAllergy(topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
};
