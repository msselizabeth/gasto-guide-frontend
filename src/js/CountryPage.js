import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getCountryInfo, getDishesOfCountry } from './fetch';
import { Helmet } from 'react-helmet';
import NotFoundPage from '../components/NotFoundPage';
import SectionHero from '../components/SectionHero';
import Section from '../components/Section';
import ContainerHero from '../components/ContainerHero';
import Container from '../components/Container';
import FeaturesCountryList from '../components/FeaturesCountryList';
import DishCountryList from '../components/DishCountryList';

function CountryPage () {
    const [country, setCountry] = useState({});
    const [dishes, setDishes] = useState([]);
    const countryCode = new URLSearchParams(window.location.search).get('code');

    useEffect(() => {
        async function fetchData() {
            const countryData = await getCountryInfo(countryCode);
            const dishesData = await getDishesOfCountry(countryCode);
            setCountry(countryData);
            setDishes(dishesData);
        }

        fetchData();
    }, [countryCode]);

    if (!country) {
        return <NotFoundPage />;
    }

    console.log(country.image);

    return (
        <>
             <Helmet>
                <title>{country.countryName}</title>
            </Helmet>
            <SectionHero>
                <ContainerHero image={country.image}>
                    <h1 className="hero-country__name hero-country__title">{country.countryName}</h1>
                    <p className="hero-country__capital hero-country__title">Столиця: {country.capitalCountry}</p>
                </ContainerHero>
            </SectionHero>
            <Section>
                <Container>
                    <h2 className='section__title'>Особливості каїни</h2>
                    <h3 className='features-country__title'>{country.featuresCountryTitle}</h3>
                    <FeaturesCountryList country={country}/>
                </Container>
            </Section>
           
            <Section>
                {<Container>
                   <h2 className='section__title'>Страви країни</h2>
                   <DishCountryList dishes={dishes} />
                </Container>}
            </Section>
        </>
    );
}

const countryRoot = createRoot(document.getElementById('country-info'));
countryRoot.render(<CountryPage/>)



// import { getCountryInfo, getDishesOfCountry } from './fetch';

// const countryCode = new URLSearchParams(window.location.search).get('code');
// const countryName = document.querySelector('.hero-country__name');
// const capital = document.querySelector('.hero-country__capital');
// const hero = document.querySelector('.hero-country__container');
// const headTitle = document.querySelector('title');
// const featuresList = document.querySelector('.hero-country__list');
// const dishesList = document.querySelector('.hero-country__dishes--list');

// const country = await getCountryInfo(countryCode);
// const dishes = await getDishesOfCountry(countryCode);

// function displayCountry(country) {
    
//     headTitle.textContent = `${country.countryName}`;
//     hero.style.backgroundImage = `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${country.image})`;
//     countryName.textContent = country.countryName;
//     capital.textContent = `Столиця: ${country.capitalCountry}`;

//     country.featuresCountry.forEach(item => {
//         const paragraph = document.createElement('li');
//         paragraph.textContent = item.text;
//         featuresList.appendChild(paragraph);
//         featuresList.firstChild.classList.add('title-features');
//     });
// }

// function displayDishes(dishes) {
//     const fragment = document.createDocumentFragment();

//     dishes.forEach(dish => {
//         const item = document.createElement('li');
//         item.classList.add('hero-country__dishes--item');

//         const link = document.createElement('a');
//         link.classList.add('hero-country__dishes--link');
//         link.href = `./recipe.html?codeDish=${dish._id}`;

//         const img = document.createElement('img');
//         img.classList.add('hero-country__dishes--img');
//         img.src = dish.recipeImgSection;
//         img.alt = dish.recipeImgAlt;

//         const span = document.createElement('span');
//         span.classList.add('hero-country__dishes--name');
//         span.textContent = dish.recipeName;

//         link.appendChild(img);
//         link.appendChild(span);
//         item.appendChild(link);

//         fragment.appendChild(item);
//     });

//     dishesList.appendChild(fragment);
// }

// displayCountry(country);
// displayDishes(dishes);

// console.log(country);



