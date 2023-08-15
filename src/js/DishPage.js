import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { getDish } from './fetch';
import { Helmet } from 'react-helmet';
import { calOfDish } from './kcal-calc';
import SectionHero from '../components/SectionHero';
import Section from '../components/Section';
import ContainerHero from '../components/ContainerHero';
import Container from '../components/Container';
import FeaturesDish from '../components/FeaturesDish';
import RecipeList from '../components/RecipeList';
import CookTechnology from '../components/CookTecchnology';
import NutritionalList from '../components/NutritionalList';
import NotFoundPage from '../components/NotFoundPage';

function DishPage () {
    const [dish, setDish] = useState({});
    const dishCode = new URLSearchParams(window.location.search).get('codeDish');

    useEffect(() => {
        async function fetchDish() {
            const dishData = await getDish(dishCode);
            setDish(dishData);
        }

        fetchDish();
    }, [dishCode]);

      if (!dish) {
        return <NotFoundPage />;
    }

    return (
        <>
            <Helmet>
                <title>{dish.recipeName}</title>
            </Helmet>
            <SectionHero>
                <ContainerHero image={dish.recipeImgHero}>
                    <h1 className="hero-dish__title">{dish.recipeName}</h1>
                </ContainerHero>
            </SectionHero>
            <Section>
                <Container>
                    <h2 className="section__title">Особливості страви</h2>
                    <FeaturesDish dish={dish} />
                </Container>
            </Section>
            <Section>
                <Container>
                    <h2 className="section__title">Рецептура страви</h2>
                    <div className="recipe__container">
                        <img src={dish.recipeImgSection} alt={dish.recipeImgAlt} className="recipe__image" />
                        <RecipeList dish={dish} />
                    </div>
            
                    <div className="technology__container">
                     <h3 className="technology__title">Технологія приготування</h3>
                     <CookTechnology dish={dish} />
                    </div>
             
                    <div className="nutritional__container">
                         <h3 className="technology__title">Харчова цінність</h3>
                         <NutritionalList dish={dish} />
                    <h4 className="technology__title kcal__title">{`Калорійність на 1 порцію(~300г): ${calOfDish} ккал`}</h4>
                    </div>
                    
                </Container>
            </Section>
        </>
    );
};

// export default DishPage;
const recipeRoot = createRoot(document.getElementById('recipe-root'));
recipeRoot.render(<DishPage />);






// import { getDish } from "./fetch";

// export const dishCode = new URLSearchParams(window.location.search).get('codeDish');
// const dishName = document.querySelector('.hero-dish__title');
// const dishHero = document.querySelector('.hero-dish__container');
// const headTitle = document.querySelector('title');
// const featuresDishList = document.querySelector('.features-dish__list');
// const recipeImg = document.querySelector('.recipe__image');
// const recipeList = document.querySelector('.recipe__list');
// const technologyList = document.querySelector('.technology__list');
// const nutritionalList = document.querySelector('.nutritional__list');

// const dish = await getDish(dishCode);
// displayDish(dish);


// function createFeatureElement(text) {
//     const item = document.createElement('li');
//     item.textContent = text;
//     return item;
// }

// function createIngredientElement(item) {
//     const ingredient = document.createElement('li');
//     ingredient.classList.add('recipe__item');

//     const ingredientName = document.createElement('p');
//     ingredientName.classList.add('recipe__product');
//     ingredientName.textContent = item.productName;

//     const ingredientQnt = document.createElement('p');
//     ingredientQnt.classList.add('recipe__qnt');
//     ingredientQnt.textContent = `${item.quantity} г`;

//     ingredient.appendChild(ingredientName);
//     ingredient.appendChild(ingredientQnt);

//     return ingredient;
// }

// function createInstructionElement(text) {
//     const instruction = document.createElement('li');
//     instruction.textContent = text;
//     return instruction;
// }

// function createNutritionalElement(title, text) {
//     const value = document.createElement('li');

//     const valueTitle = document.createElement('span');
//     valueTitle.classList.add('nutritional__title');
//     valueTitle.textContent = title;

//     const valueText = document.createElement('p');
//     valueText.classList.add('nutritional__text');
//     valueText.textContent = text;

//     value.appendChild(valueTitle);
//     value.appendChild(valueText);

//     return value;
// }

// function displayDish(dish) {
//     headTitle.textContent = dish.recipeName;
//     dishHero.style.backgroundImage = `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${dish.recipeImgHero})`;
//     dishName.textContent = dish.recipeName;
//     recipeImg.src = dish.recipeImgSection;
//     recipeImg.alt = dish.recipeImgAlt;
    

//     const featuresDishFragment = document.createDocumentFragment();
//     dish.featuresDish.forEach(item => {
//         const featureElement = createFeatureElement(item.text);
//         featuresDishFragment.appendChild(featureElement);
//     });
//     featuresDishList.appendChild(featuresDishFragment);

//     const recipeListFragment = document.createDocumentFragment();
//     dish.recipe.forEach(item => {
//         const ingredientElement = createIngredientElement(item);
//         recipeListFragment.appendChild(ingredientElement);
//     });
//     recipeList.appendChild(recipeListFragment);

//     const technologyListFragment = document.createDocumentFragment();
//     dish.cookTechnology.forEach(item => {
//         const instructionElement = createInstructionElement(item.text);
//         technologyListFragment.appendChild(instructionElement);
//     });
//     technologyList.appendChild(technologyListFragment);

//     const nutritionalListFragment = document.createDocumentFragment();
//     dish.nutritionalValues.forEach(item => {
//         const nutritionalElement = createNutritionalElement(item.title, item.text);
//         nutritionalListFragment.appendChild(nutritionalElement);
//     });
//     nutritionalList.appendChild(nutritionalListFragment);
// }
