import Title from "./components/title/Title";
//import Modal from "./components/modal/Modal";
import { Groceries } from "./model";
import "./styles/groceries.css";
import { useState } from "react";

type GroceriesProps = {
    groceries: Groceries;
};

const GroceriesPanel = ({ groceries }: GroceriesProps) => {
    const departments = Object.keys(groceries);

    const [activeList, setActiveList] = useState<string[]>([]);

    const handleClick = (event: any) => {
        const element = event.target;
        const btn = element.tagName === "I" ? element.parentElement : element;
        const department = btn.id.split("-")[1];
        const found = activeList.find((element) => element === department);

        if (!found) {
            setActiveList((oldActiveList) => [...oldActiveList, department]);
        } else {
            const newActiveList = activeList.filter(
                (element) => element !== department,
            );
            setActiveList(() => newActiveList);
        }
    };

    if (departments.length === 0) {
        return (
            <div>
                <Title title="Groceries"></Title>
                <div className="groceries_card">
                    <div className="empty_list">Your list is empty</div>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Title title="Groceries"></Title>
            <div className="groceries_card">
                <ul className="wrapper">
                    {departments.map((department) => (
                        <div
                            id={`container-` + department}
                            className="department_container"
                        >
                            <span className="department">{department}</span>
                            <div
                                id={`ingredient-container-` + department}
                                className={`ingredient_container ${
                                    activeList.includes(department)
                                        ? "active"
                                        : "inactive"
                                }`}
                            >
                                {groceries[department].map((ingredient) => (
                                    <div
                                        key={ingredient.name}
                                        className="ingredient"
                                    >
                                        <i className="fas fa-angle-right"></i>
                                        {ingredient.name} x{" "}
                                        {ingredient.quantity.toFixed(2)}{" "}
                                        {ingredient.unit}
                                    </div>
                                ))}
                            </div>
                            <div
                                id={`button-` + department}
                                className="toggle"
                                onClick={handleClick}
                            >
                                {activeList.includes(department) ? (
                                    <i className="fas fa-angle-up"></i>
                                ) : (
                                    <i className="fas fa-ellipsis-h"></i>
                                )}
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GroceriesPanel;
