import React from 'react';
import css from './DishCountryList.module.css';


const DishCountryList = ({dishes}) => {
    return (
        <>
        <h2 className='section__title'>Страви країни</h2>
        <ul className={css.dishesList}>
                    {dishes.map(dish => (
                    <li key={dish._id} className={css.dishesItem}>
                            <a href={`../recipe-page/index.html?codeDish=${dish._id}`}
                               className={css.dishesLink}>
                            <img
                                src={dish.recipeImgSmall}
                                alt={dish.recipeImgAlt}
                                className={css.dishesImg}
                            />
                            <span className={css.dishesName}>{dish.recipeName}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default DishCountryList;