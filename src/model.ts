export interface Ingredient {
    name: string;
    department: string;
    quantity: number;
    unit: string;
}

export interface Recipe {
    recipe_id: number;
    title: string;
    image_name: string;
    ingredients: Ingredient[];

    instructions: string;
    servings: number;
}

export interface Groceries {
    [department: string]: Ingredient[];
}

const hasIngredient = (list: Ingredient[], newIngredient: Ingredient) =>
    list.filter((ingredient) => ingredient.name === newIngredient.name).length >
    0;

const addIngredientToList = (
    list: Ingredient[],
    ingredientToAdd: Ingredient,
) => {
    if (!list) {
        return [ingredientToAdd];
    }

    if (hasIngredient(list, ingredientToAdd)) {
        return list.map((ingredient) => {
            if (ingredient.name === ingredientToAdd.name) {
                if (ingredientToAdd.unit === "kg") {
                    const newQuantity =
                        ingredient.quantity + ingredientToAdd.quantity * 1000;
                    const newIngredient = {
                        ...ingredient,
                        quantity: newQuantity,
                    };
                    return newIngredient;
                }
                const newQuantity =
                    ingredient.quantity + ingredientToAdd.quantity;
                const newIngredient = { ...ingredient, quantity: newQuantity };
                return newIngredient;
            }
            return ingredient;
        });
    }

    return [...list, ingredientToAdd];
};

const sortByName = (ingredients: Ingredient[]) =>
    ingredients.sort((first, second) => first.name.localeCompare(second.name));

export const addRecipeIngredientsToGroceryList = (
    groceries: Groceries,
    recipe: Recipe,
): Groceries => {
    return recipe.ingredients.reduce((previousGroceries, ingredient) => {
        const department = ingredient.department;
        const departmentGroceries = previousGroceries[department];
        const newDepartmentGroceries = sortByName(
            addIngredientToList(departmentGroceries, ingredient),
        );

        return {
            ...previousGroceries,
            [department]: newDepartmentGroceries,
        };
    }, groceries);
};
