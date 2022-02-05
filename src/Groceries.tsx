import * as React from "react";
import { Groceries } from "./model";
import "./css/groceries.css";

type GroceriesProps = {
    groceries: Groceries;
};

const GroceriesPanel = ({ groceries }: GroceriesProps) => {
    const departments = Object.keys(groceries);
    if (departments.length === 0) {
        return <div className="empty_list">Your list is empty</div>;
    }
    return (
        <div className="info-card">
            <ul>
                {departments.map((department) => (
                    <li>
                        <span>{department}</span>
                        <ul>
                            {groceries[department].map((ingredient) => (
                                <li key={ingredient.name}>
                                    {ingredient.name} x {ingredient.quantity}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroceriesPanel;
