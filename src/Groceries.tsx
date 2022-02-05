import * as React from "react";
import Title from "./components/title/Title";
import { Groceries } from "./model";
import "./styles/groceries.css";

type GroceriesProps = {
    groceries: Groceries;
};

const GroceriesPanel = ({ groceries }: GroceriesProps) => {
    const departments = Object.keys(groceries);
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
                        <div className="department_container">
                            <span className="department">{department}</span>
                            <div className="ingredient_container">
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
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GroceriesPanel;
