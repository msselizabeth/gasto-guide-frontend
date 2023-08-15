import React from "react";

const NutritionalList = ({dish}) => {
    return (
         <ul className="nutritional__list">
                        {dish.nutritionalValues &&
                            dish.nutritionalValues.map((item, index) => (
                                <li key={index}>
                                    <span className="nutritional__title">{item.title}</span>
                                    <p className="nutritional__text">{item.text}</p>
                                </li>
                            ))}
                    </ul>
    )
}

export default NutritionalList;