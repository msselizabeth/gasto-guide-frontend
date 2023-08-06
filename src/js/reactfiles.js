import React from 'react';
import ReactDOM from 'react-dom/client';
import CountriesOfSouthAmerica from '../components/southAmerica/CountriesOfSouthAmerica.jsx';

const southAmericaCountries = ReactDOM.createRoot(
  document.getElementById('south-america-countries')
);
southAmericaCountries.render(<CountriesOfSouthAmerica/>)