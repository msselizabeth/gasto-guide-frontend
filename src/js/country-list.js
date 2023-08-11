import  { getCountriesOfTheContinent } from './fetch';

const countriesUl = document.querySelector('.countriesSAlist');
const countries = await getCountriesOfTheContinent();

function createCountryElement(country) {
    const item = document.createElement('li');
    item.classList.add('countriesSAitem');

    const link = document.createElement('a');
    link.classList.add('countriesSAlink');
    link.href = `../country.html?code=${country._id}`;

    const img = document.createElement('img');
    img.classList.add('countriesSAimage');
    img.src = country.image;

    const span = document.createElement('span');
    span.classList.add('countriesSAname');
    span.textContent = country.countryName;

    link.appendChild(img);
    link.appendChild(span);
    item.appendChild(link);

    return item;
}

function displayCountries(countries, targetElement) {
    const fragment = document.createDocumentFragment();
    
    for (const country of countries) {
        const countryElement = createCountryElement(country);
        fragment.appendChild(countryElement);
    }

    targetElement.appendChild(fragment);
}

displayCountries(countries, countriesUl);





// import axios from 'axios';

// const countriesList = document.getElementById('south-america-countries');

// async function getCountries() {
//     try {
//         const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e`);
//         const countries = response.data;
//         displayCountries(countries);
//     } catch (error) {
//         console.error('Error fetching countries:', error);
//     }
// }

// async function displayCountries(countries) {
//     for (const country of countries) {
//         const item = document.createElement('li');
//         item.classList.add('countriesSAitem');

//         const link = document.createElement('a');
//         link.classList.add('countriesSAlink');
//         link.href = `../country.html?code=${country._id}`;

//         const img = document.createElement('img');
//         img.classList.add('countriesSAimage');
//         img.src = country.image;

//         const span = document.createElement('span');
//         span.classList.add('countriesSAname');
//         span.textContent = country.countryName;

//         link.appendChild(img);
//         link.appendChild(span);
//         item.appendChild(link);

//         countriesList.appendChild(item);
//     }
// }

// getCountries();
