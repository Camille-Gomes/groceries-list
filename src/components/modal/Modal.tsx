import { ModalProps } from "./modal.types";
import { FC } from "react";
import "../../styles/modal.css";

const Modal: FC<ModalProps> = ({
    closeModal,
    src,
    alt,
    title,
    instructions,
    servings,
}) => {
    return (
        <div id="modal">
            <div className="modal-background">
                <div className="modal-container">
                    <div className="body">
                        <div className="image-container">
                            <img
                                className="recipe-image"
                                src={src}
                                alt={alt}
                            ></img>
                        </div>
                        <div className="text-container">
                            <div className="title">
                                <div className="close-btn">
                                    <button onClick={() => closeModal(false)}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <div className="recipe-title">{title}</div>
                                <div className="instructions-container">
                                    <div className="section">Instructions</div>
                                    <p className="instructions">
                                        {instructions}
                                    </p>
                                    <div className="section">Serving</div>
                                    <p className="instructions">
                                        <i className="fas fa-utensils"></i> For{" "}
                                        {servings} people
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
