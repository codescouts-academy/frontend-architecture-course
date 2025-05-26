import { ingredients } from "@/domain/model/product";

import { useProfileViewModel } from "./useProfileViewModel";

export const Profile = () => {
  const { user } = useProfileViewModel();

  if (!user) return null;

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>Allergies</p>
      <ul>
        {user.allergies.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
      <p>Preferences</p>
      <ul>
        {user.preferences.map((ingredient) => (
          <li key={ingredient}>{ingredients[ingredient]}</li>
        ))}
      </ul>
    </>
  );
};
