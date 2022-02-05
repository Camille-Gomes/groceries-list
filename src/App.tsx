import React, { useState } from "react";
import GroceriesComponent from "./Groceries";
import { addRecipeIngredientsToGroceryList, Groceries, Recipe } from "./model";
import Recipes from "./Recipes";

const recipes = require("./recipes.json") as Recipe[];

const App = () => {
    const [groceries, setGroceries] = useState<Groceries>({});

    return (
        <div>
            <div>
                <h1>Recipe 2 List!</h1>
                <div>
                    <div>
                        <Recipes
                            recipes={recipes}
                            onClick={(recipe) => {
                                const updatedGroceries =
                                    addRecipeIngredientsToGroceryList(
                                        groceries,
                                        recipe,
                                    );
                                setGroceries(updatedGroceries);
                            }}
                        />
                    </div>
                    <div>
                        <GroceriesComponent groceries={groceries} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
