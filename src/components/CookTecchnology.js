import React from "react";

const CookTechnology = ({dish}) => {
    return  ( <ul className="technology__list">
                        {dish.cookTechnology &&
                            dish.cookTechnology.map((item, index) => (
                                <li key={index}>{item.text}</li>
                            ))}
                     </ul>)
}

export default CookTechnology;