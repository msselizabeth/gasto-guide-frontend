import React, { Children } from 'react';

const FeaturesCountryList = ({country}) => {
    return (
        <ul className="features-country__list">
            {country.featuresCountry &&
                country.featuresCountry.map((item, index) => (
                    <li key={index} className="features-country__item">{item.text}</li>
            ))}
        </ul>)
}

export default FeaturesCountryList;