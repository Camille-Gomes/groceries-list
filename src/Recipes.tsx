import { useState } from "react";
import { Recipe } from "./model";

import Title from "./components/title/Title";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import "./styles/recipes.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

type RecipesProps = {
    recipes: Recipe[];
    onClick: (recipe: Recipe) => void;
};

const emptyRecipe = {
    recipe_id: 0,
    title: "",
    image_name: "",
    ingredients: [],
    instructions: "",
    servings: 0,
};

const Recipes = ({ recipes, onClick }: RecipesProps) => {
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<Recipe>(emptyRecipe);

    const openModal = (recipe: Recipe) => {
        setModalContent(recipe);
        setActiveModal(true);
    };

    const closeModal = () => setActiveModal(false);

    return (
        <div>
            {activeModal && (
                <Modal
                    closeModal={closeModal}
                    src={
                        process.env.PUBLIC_URL +
                        "./images/" +
                        modalContent.image_name
                    }
                    alt={`Recipe- ${modalContent.recipe_id}`}
                    title={modalContent.title}
                    instructions={modalContent.instructions}
                    servings={modalContent.servings}
                    className={`modal-container recipe- ${modalContent.recipe_id}`}
                ></Modal>
            )}
            <Title title="Recipes"></Title>
            <div className="carousel">
                <Splide
                    className="card-list"
                    options={{
                        type: "loop",
                        perPage: 4,
                        perMove: 1,
                        gap: "6rem",
                        padding: "50px",
                        pagination: false,
                        breakpoints: {
                            2000: {
                                perPage: 4,
                            },
                            1600: {
                                perPage: 3,
                            },
                            1300: {
                                perPage: 2,
                            },
                            900: {
                                perPage: 1,
                            },
                        },
                    }}
                >
                    {recipes.map((recipe) => (
                        <SplideSlide className="card" key={recipe.title}>
                            <img
                                className="image"
                                src={
                                    process.env.PUBLIC_URL +
                                    "./images/" +
                                    recipe.image_name
                                }
                                alt="recette"
                            ></img>
                            <div className="card-content">
                                <span className="recipe-name">
                                    {recipe.title}
                                </span>
                                <div className="btn">
                                    <Button
                                        className="button"
                                        id={recipe.recipe_id.toString()}
                                        onClick={() => onClick(recipe)}
                                    >
                                        Add
                                        <i className="fas fa-shopping-basket"></i>
                                    </Button>
                                    <Button
                                        id="recipe-instructions"
                                        className="openModalBtn button"
                                        onClick={() => openModal(recipe)}
                                    >
                                        See more
                                        <i className="fas fa-plus"></i>
                                    </Button>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Recipes;
