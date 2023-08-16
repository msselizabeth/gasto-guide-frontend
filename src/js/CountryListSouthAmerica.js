import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getCountriesOfTheContinent } from './fetch';
import CountriesListComponent from '../components/CountriesListComponent';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const fetchedCountries = await getCountriesOfTheContinent();
      const sortedCountries = fetchedCountries.sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setCountries(sortedCountries);
    }

    fetchCountries();
  }, []);

  return (
    <CountriesListComponent countries={countries} />
  );
};

const countryListRoot = createRoot(document.getElementById('country-list'));
countryListRoot.render(<CountryList/>)
