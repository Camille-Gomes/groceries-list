import * as React from "react";
import { Groceries } from "./model";

type GroceriesProps = {
  groceries: Groceries;
};



const GroceriesPanel = ({ groceries }: GroceriesProps) => {
  const departments = Object.keys(groceries);
  if (departments.length === 0) {
    return <div>EMPTY LIST</div>;
  }
  return (
    <ul>
      {departments.map((department) => (
        <li><span>{department}</span>
          <ul>
            
            {groceries[department].map((ingredient) => (
              <li key={ingredient.name} >{ingredient.name} x{ingredient.quantity}</li>
            ))}
            </ul>
        </li>
      ))}
    </ul>
  );
};

export default GroceriesPanel;
