import React from 'react';
import CountryItem from './CountryItem';
import css from './CountriesListComponent.module.css';

const CountriesListComponent = ({countries}) => {
  return (
    <>
      
      <ul className={css.countriesList}>
      {countries.map(country => (
        <CountryItem key={country._id} country={country} />
      ))}
        </ul>
    </>)
}

export default CountriesListComponent;