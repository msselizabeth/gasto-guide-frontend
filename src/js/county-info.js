import axios from 'axios';

const countryCode = new URLSearchParams(window.location.search).get('code');
const countryName = document.querySelector('.hero-country__name');
const capital = document.querySelector('.hero-country__capital');
const hero = document.querySelector('.hero-country__container');
const headTitle = document.querySelector('title');
const featuresList = document.querySelector('.hero-country__list');
const dishesList = document.querySelector('.hero-country__dishes--list');

function handleErrors(error) {
    console.error('Error:', error);
}

function decodeHtmlEntities(text) {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(text, 'text/html').body.textContent;
  return decoded;
}

async function getCountryInfo() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries/${countryCode}`);
        const country = response.data;
        displayCountry(country);
    } catch (error) {
        handleErrors(error);
    }
}

function displayCountry(country) {
    headTitle.textContent = `${country.countryName}`;
    hero.style.backgroundImage = `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${country.image})`;
    countryName.textContent = country.countryName;
    capital.textContent = `Столиця: ${country.capitalCountry}`;

    country.featuresCountry.forEach(item => {
        const paragraph = document.createElement('li');
        paragraph.textContent = decodeHtmlEntities(item.text);
        featuresList.appendChild(paragraph);
        featuresList.firstChild.classList.add('title-features');
    });
}

async function getDishesOfCountry() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries/${countryCode}/recipes`);
        const dishes = response.data;
        displayDishes(dishes);
    } catch (error) {
        handleErrors(error);
    }
}

function displayDishes(dishes) {
    const fragment = document.createDocumentFragment();

    dishes.forEach(dish => {
        const item = document.createElement('li');
        item.classList.add('hero-country__dishes--item');

        const link = document.createElement('a');
        link.classList.add('hero-country__dishes--link');
        link.href = `./recipe.html?codeDish=${dish._id}`;

        const img = document.createElement('img');
        img.classList.add('hero-country__dishes--img');
        img.src = dish.recipeImgSection;
        img.alt = dish.recipeImgAlt;

        const span = document.createElement('span');
        span.classList.add('hero-country__dishes--name');
        span.textContent = dish.recipeName;

        link.appendChild(img);
        link.appendChild(span);
        item.appendChild(link);

        fragment.appendChild(item);
    });

    dishesList.appendChild(fragment);
}

async function fetchData() {
    try {
        await Promise.all([getCountryInfo(), getDishesOfCountry()]);
    } catch (error) {
        handleErrors(error);
    }
}

fetchData();



// import axios from 'axios';

// const countryCode = new URLSearchParams(window.location.search).get('code');

// const countryName = document.querySelector('.hero-country__name');
// const capital = document.querySelector('.hero-country__capital');
// const hero = document.querySelector('.hero-country__container');
// const headTitle = document.querySelector('title');
// const featuresList = document.querySelector('.hero-country__list');

// function getCountryInfo() {
//     axios.get(`https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e/${countryCode}`) // Путь к API на вашем бекенде
//         .then(response => {
//             const country = response.data;
//             displayCountry(country);
//         })
//         .catch(error => {
//             console.error('Error fetching countries:', error);
//         });
// }

// function displayCountry(country) {
  
//     headTitle.textContent = `${country.countryName}`;

//     hero.style.backgroundImage = `linear-gradient(to right,
//             rgba(0, 21, 52, 0.3),
//             rgba(0, 21, 52, 0.3)), url(${country.image})`;
//     countryName.textContent = country.countryName;
//     capital.textContent = `Столиця: ${country.capitalCountry}`;

//     country.featuresCountry.map(item => {
//       const paragraph = document.createElement('li');
//       paragraph.textContent = decodeHtmlEntities(item.text);
//       paragraph

//       featuresList.appendChild(paragraph);

//       featuresList.firstChild.classList.add('title-features');

//   });
// }




// function getDishesOfCountry() {
//     axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${countryCode}`) // Путь к API на вашем бекенде
//         .then(response => {
//             const dishes = response.data;
//             displayDishes(dishes);
//         })
//         .catch(error => {
//             console.error('Error fetching countries:', error);
//         });
// }

// const dishesList = document.querySelector('.hero-country__dishes--list');

// function displayDishes(dishes) {
//     return dishes.map(dish => {
//             const item = document.createElement('li');
//               item.classList.add('hero-country__dishes--item');
            
//               const link = document.createElement('a');
//               link.classList.add('hero-country__dishes--link');
//               link.href = `./recipe.html?codeDish=${dish._id}`;

//               const img = document.createElement('img');
//               img.classList.add('hero-country__dishes--img');
//               img.src = dish.recipeImgSection;
//               img.alt = dish.recipeImgAlt;
              

//               const span = document.createElement('span');
//               span.classList.add('hero-country__dishes--name');
//               span.textContent = dish.recipeName;

//               link.appendChild(img);
//               link.appendChild(span);
//               item.appendChild(link);
      
//               dishesList.appendChild(item);
//         }); 
// }
// getCountryInfo();
// getDishesOfCountry();