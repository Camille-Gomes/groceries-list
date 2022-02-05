import "../../styles/recipes.css";
import { ButtonProps } from "./button.types";
import { FC } from "react";

const Button: FC<ButtonProps> = ({ id, onClick, className, children }) => {
    return (
        <div>
            <button id={id} onClick={onClick} className={className}>
                {children}
            </button>
        </div>
    );
};

export default Button;
