import { DomainUser } from "@codescouts/domain";

export type UserName = string;

export class User implements DomainUser {
  constructor(
    public id: UniqueId,
    public name: UserName,
    public email: Email,
    public preferences: Ingredient[],
    public allergies: Ingredient[],
    private permissions: string[]
  ) {}
  public hasPermission(permissions: string[]): boolean {
    return this.permissions.some((permission) =>
      permissions.includes(permission)
    );
  }

  public hasAllergy(ingredient: Ingredient): boolean;
  public hasAllergy(ingredients: Ingredient[]): boolean;
  public hasAllergy(ingredients: unknown): boolean {
    const _ingredients = Array.isArray(ingredients)
      ? ingredients
      : [ingredients];

    return _ingredients.some((ingredient) =>
      this.allergies.includes(ingredient)
    );
  }

  public hasPreference(ingredient: Ingredient): boolean {
    return this.preferences.includes(ingredient);
  }

  get isAdmin(): boolean {
    return this.hasPermission(["admin"]);
  }
}
