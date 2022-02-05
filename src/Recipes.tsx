import { Recipe } from "./model";
import Title from "./components/title/Title";
import Button from "./components/button/Button";
import "./styles/recipes.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

type RecipesProps = {
    recipes: Recipe[];
    onClick: (recipe: Recipe) => void;
};

const Recipes = ({ recipes, onClick }: RecipesProps) => (
    <div>
        <Title title="Recipes"></Title>
        <div className="carousel">
            <Splide
                className="card_list"
                options={{
                    type: "loop",
                    perPage: 2,
                    perMove: 1,
                    gap: "6rem",
                    padding: "50px",
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
                            <Button
                                className="button"
                                id={recipe.recipe_id.toString()}
                                onClick={() => onClick(recipe)}
                            >
                                Add a meal
                                <i className="fas fa-shopping-basket"></i>
                            </Button>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </div>
);

export default Recipes;
