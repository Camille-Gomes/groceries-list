import Title from "./components/title/Title";
import { Groceries } from "./model";
import "./styles/groceries.css";
import { useState } from "react";

type GroceriesProps = {
    groceries: Groceries;
};

const GroceriesPanel = ({ groceries }: GroceriesProps) => {
    const [activeList, setActiveList] = useState<string[]>([]);

    const handleClick = (department: string) => {
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

    const departments = Object.keys(groceries);

    if (departments.length === 0) {
        return (
            <div>
                <Title title="Groceries"></Title>
                <div className="groceries-card">
                    <div className="empty-list">Your list is empty</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Title title="Groceries"></Title>
            <div className="groceries-card">
                <ul className="wrapper">
                    {departments.map((department) => (
                        <div
                            id={`container-` + department}
                            className="department-container"
                            key={department}
                        >
                            <span className="department">{department}</span>
                            <div
                                id={`ingredient-container-` + department}
                                className={`ingredient-container ${
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
                            {groceries[department].length > 4 ? (
                                <div
                                    id={`button-` + department}
                                    key={department}
                                    className="toggle"
                                    onClick={() => handleClick(department)}
                                >
                                    {activeList.includes(department) ? (
                                        <i className="fas fa-angle-up"></i>
                                    ) : (
                                        <i className="fas fa-ellipsis-h"></i>
                                    )}
                                </div>
                            ) : (
                                <i className="icon-inactive"></i>
                            )}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GroceriesPanel;
