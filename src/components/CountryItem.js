import React from 'react';
import css from './CountriesListComponent.module.css';

const CountryItem = ({ country }) => {
    return (
        <li className={css.countriesItem}>
            <a className={css.countriesLink} href={`../country-page/index.html?code=${country._id}`}>
                <img className={css.countriesImage} src={country.imageSmall} alt={country.countryName} />
                <span className={css.countriesName}>{country.countryName}</span>
            </a>
        </li>
    )
};
  
export default CountryItem;