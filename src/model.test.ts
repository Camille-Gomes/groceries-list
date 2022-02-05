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

const aRecipe: Recipe = {
  recipe_id: 1,
  title: "Guacamole for lazy dudes",
  image_name: "na.jpg",
  ingredients: [avocado(2), lemon()],
};

it("should add all recipes ingredients to an empty list", () => {
  // given
  const initialGroceryList = {};
  // when
  const newList = addRecipeIngredientsToGroceryList(
    initialGroceryList,
    aRecipe
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
    aRecipe
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
    aRecipe
  );
  // then
  expect(newList).toEqual({
    Condiments: [lemon()],
    Produce: [avocado(9)],
  });
});
