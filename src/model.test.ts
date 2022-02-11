import { Recipe, addRecipeIngredientsToGroceryList } from "./model";

const lemon = (n = 1) => ({
    name: "lemon",
    department: "Condiments",
    quantity: n,
    unit: "",
});

const avocado = (n = 1) => ({
    name: "avocado",
    department: "Produce",
    quantity: n,
    unit: "",
});

const blackPepper = (n = 1) => ({
    name: "black pepper",
    department: "Condiments",
    quantity: n,
    unit: "",
});

const shrimp = (n = 1, unit = "") => ({
    name: "shrimp",
    department: "Seefood",
    quantity: n,
    unit: unit,
});

const aRecipe: Recipe = {
    recipe_id: 1,
    title: "Guacamole for lazy dudes",
    image_name: "na.jpg",
    ingredients: [avocado(2), lemon()],
    instructions:
        "In a sauce pan on Medium heat add water and butter. Allow the butter to completely melt (about 2 minutes). Add Basil, Cayenne Pepper, Salt, Pepper, Paprika and Garlic Powder.",
    servings: 4,
};

const aShrimpRecipe: Recipe = {
    recipe_id: 1,
    title: "Guacamole for lazy dudes",
    image_name: "na.jpg",
    ingredients: [shrimp(1, "kg")],
    instructions:
        "In a sauce pan on Medium heat add water and butter. Allow the butter to completely melt (about 2 minutes). Add Basil, Cayenne Pepper, Salt, Pepper, Paprika and Garlic Powder.",
    servings: 4,
};

it("should add all recipes ingredients to an empty list", () => {
    // given
    const initialGroceryList = {};
    // when
    const newList = addRecipeIngredientsToGroceryList(
        initialGroceryList,
        aRecipe,
    );
    // then
    expect(newList).toEqual({
        Condiments: [lemon()],
        Produce: [avocado(2)],
    });
});

it("should merge recipe ingredients with a non empty grocery list", () => {
    // given
    const initialGroceryList = {
        Condiments: [blackPepper()],
    };
    // when
    const newList = addRecipeIngredientsToGroceryList(
        initialGroceryList,
        aRecipe,
    );
    // then
    expect(newList).toEqual({
        Condiments: [blackPepper(), lemon()],
        Produce: [avocado(2)],
    });
});

it("should sum ingredient quantities when adding a recipe to a non empty list", () => {
    // given
    const initialGroceryList = {
        Produce: [avocado(7)],
    };
    // when
    const newList = addRecipeIngredientsToGroceryList(
        initialGroceryList,
        aRecipe,
    );
    // then
    expect(newList).toEqual({
        Condiments: [lemon()],
        Produce: [avocado(9)],
    });
});

it("should sum ingredient quantities whith different units", () => {
    // given
    const initialGroceryList = {
        Produce: [shrimp(7, "g")],
    };
    // when
    const newList = addRecipeIngredientsToGroceryList(
        initialGroceryList,
        aShrimpRecipe,
    );
    // then
    expect(newList).toEqual({
        Seefood: [shrimp(1007, "g")],
    });
});
