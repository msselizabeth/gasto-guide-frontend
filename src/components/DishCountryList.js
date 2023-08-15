import React, { Children } from 'react';


const DishCountryList = ({dishes}) => {
    return (
        <ul className="hero-country__dishes--list">
                    {dishes.map(dish => (
                    <li key={dish._id} className="hero-country__dishes--item">
                        <a href={`../recipe-page/index.html?codeDish=${dish._id}`} className="hero-country__dishes--link">
                            <img
                                src={dish.recipeImgSection}
                                alt={dish.recipeImgAlt}
                                className="hero-country__dishes--img"
                            />
                            <span className="hero-country__dishes--name">{dish.recipeName}</span>
                        </a>
                    </li>
                ))}
        </ul>
    )
}

export default DishCountryList;