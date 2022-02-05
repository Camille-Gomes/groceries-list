import { Recipe } from "./model";
import "./css/recipes.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

type RecipesProps = {
    recipes: Recipe[];
    onClick: (recipe: Recipe) => void;
};

const Recipes = ({ recipes, onClick }: RecipesProps) => (
    <div>
        <div className="title_wrapper">
            <h2 className="title">
                Recipes
                <div className="title_hover_line"></div>
            </h2>
        </div>
        <div className="carousel">
            <Splide
                className="card_list"
                options={{
                    type: "loop",
                    perPage: 5,
                    perMove: 1,
                    gap: "6rem",
                    padding: "50px",
                    breakpoints: {
                        1600: {
                            perPage: 4,
                        },
                        1200: {
                            perPage: 3,
                        },
                        700: {
                            perPage: 2,
                        },
                        300: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {recipes.map((recipe) => (
                    <SplideSlide className="card">
                        <img
                            className="image"
                            src={
                                process.env.PUBLIC_URL +
                                "./images/" +
                                recipe.image_name
                            }
                            alt="recette"
                        ></img>
                        <div className="card_content">
                            <span className="recipe_name">{recipe.title}</span>
                            <span className="serving">
                                For {recipe.servings} people
                            </span>
                            <button
                                className="button"
                                key={recipe.recipe_id}
                                onClick={() => onClick(recipe)}
                            >
                                Add a meal{" "}
                                <i className="fas fa-shopping-basket"></i>
                            </button>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </div>
);

export default Recipes;
