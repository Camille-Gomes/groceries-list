import "../../styles/recipes.css";
import { TitleProps } from "./title.types";

const Title = ({ title }: TitleProps) => {
    return (
        <div>
            <div className="title_wrapper">
                <h2 className="title">
                    {title}
                    <div className="title_hover_line"></div>
                </h2>
            </div>
        </div>
    );
};

export default Title;
