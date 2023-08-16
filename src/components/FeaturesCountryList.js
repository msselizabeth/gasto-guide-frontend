import React from 'react';
import css from './FeaturesCountryList.module.css';

const FeaturesCountryList = ({country}) => {
    return (
        <>
            <h2 className='section__title'>Особливості країни</h2>
            <div className={css.featuresContainer}>
               <h3 className={css.featuresTitle}>{country.featuresCountryTitle}</h3>
               <ul className={css.featuresList}>
               {country.featuresCountry &&
                country.featuresCountry.map((item, index) => (
                    <li key={index} className={css.featuresItem}>{item.text}</li>
               ))}
               </ul>
            </div>
        </>)
}

export default FeaturesCountryList;

                    