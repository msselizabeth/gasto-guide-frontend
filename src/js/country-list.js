// import React, { useState, useEffect } from 'react';

// const a = document.querySelectorAll('.countriesSAlink');


// console.log(a);
import axios from 'axios';

const countriesList = document.getElementById('south-america-countries');

function getCountries() {
    axios.get(`https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e`) // Путь к API на вашем бекенде
        .then(response => {
            const countries = response.data;
            displayCountries(countries);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
}

function displayCountries(countries) {
    return countries.map(country => {
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

            countriesList.appendChild(item);
        }); 
}

getCountries();




// `<li class="countriesSAitem'>
//                 <a class="countriesSAlink" href='#'></a>
//                 <img src=${country.image} class="countriesSAimage"/>
//                 <span class="countriesSAname">${country.countryName}</span>
//           </li>`