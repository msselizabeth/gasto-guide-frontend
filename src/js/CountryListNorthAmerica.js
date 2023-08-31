import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getCountriesOfTheNorthAmerica } from './fetch';
import CountriesListComponent from '../components/CountriesListComponent';

const CountryListNA = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const fetchedCountries = await getCountriesOfTheNorthAmerica();
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

const countryListNARoot = createRoot(document.getElementById('country-list-na'));
countryListNARoot.render(<CountryListNA/>)