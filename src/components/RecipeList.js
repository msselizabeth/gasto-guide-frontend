import React from "react";

const RecipeList = ({dish}) => {
    return (
        <ul className="recipe__list">
                        {dish.recipe &&
                            dish.recipe.map((item, index) => (
                                <li key={index} className="recipe__item">
                                    <p className="recipe__product">{item.productName}</p>
                                    <p className="recipe__qnt">{`${item.quantity} г`}</p>
                                </li>
                            ))}
                    </ul>
    )
}

export default RecipeList;