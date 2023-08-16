import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getCountries } from './fetch';
import Container from '../components/Container';
import Section from '../components/Section';
import CountriesListComponent from '../components/CountriesListComponent';
import SearchInput from '../components/SearchInput';
import LoadMore from '../components/LoadMore';

const CountriesList = () => {
  const [allCountries, setAllCountries] = useState([]); 
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    async function fetchCountries() {
      const response = await getCountries(currentPage, limit);
      
      const sortedCountries = [...allCountries, ...response.result].sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setAllCountries(sortedCountries);
      setTotalPages(response.totalPages);
    }

    fetchCountries();
  }, [currentPage, limit]);

  const loadMoreCountries = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredCountries = allCountries.filter(country =>
    country.countryName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <h2 className='section__title'>Країни світу</h2>
        <SearchInput searchValue={searchValue} onChange={e => setSearchValue(e.target.value)} />
        <CountriesListComponent countries={filteredCountries} />
        {currentPage < totalPages && (
          <LoadMore onClick={loadMoreCountries} />
        )}
      </Container>
    </Section>
  );
};

const countriesListRoot = createRoot(document.getElementById('countries-root'));
countriesListRoot.render(<CountriesList />);




