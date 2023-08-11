import { getDish } from "./fetch";

export const dishCode = new URLSearchParams(window.location.search).get('codeDish');
const dishName = document.querySelector('.hero-dish__title');
const dishHero = document.querySelector('.hero-dish__container');
const headTitle = document.querySelector('title');
const featuresDishList = document.querySelector('.features-dish__list');
const recipeImg = document.querySelector('.recipe__image');
const recipeList = document.querySelector('.recipe__list');
const technologyList = document.querySelector('.technology__list');
const nutritionalList = document.querySelector('.nutritional__list');

const dish = await getDish(dishCode);
displayDish(dish);


function createFeatureElement(text) {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
}

function createIngredientElement(item) {
    const ingredient = document.createElement('li');
    ingredient.classList.add('recipe__item');

    const ingredientName = document.createElement('p');
    ingredientName.classList.add('recipe__product');
    ingredientName.textContent = item.productName;

    const ingredientQnt = document.createElement('p');
    ingredientQnt.classList.add('recipe__qnt');
    ingredientQnt.textContent = `${item.quantity} г`;

    ingredient.appendChild(ingredientName);
    ingredient.appendChild(ingredientQnt);

    return ingredient;
}

function createInstructionElement(text) {
    const instruction = document.createElement('li');
    instruction.textContent = text;
    return instruction;
}

function createNutritionalElement(title, text) {
    const value = document.createElement('li');

    const valueTitle = document.createElement('span');
    valueTitle.classList.add('nutritional__title');
    valueTitle.textContent = title;

    const valueText = document.createElement('p');
    valueText.classList.add('nutritional__text');
    valueText.textContent = text;

    value.appendChild(valueTitle);
    value.appendChild(valueText);

    return value;
}

function displayDish(dish) {
    headTitle.textContent = dish.recipeName;
    dishHero.style.backgroundImage = `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${dish.recipeImgHero})`;
    dishName.textContent = dish.recipeName;
    recipeImg.src = dish.recipeImgSection;
    recipeImg.alt = dish.recipeImgAlt;
    

    const featuresDishFragment = document.createDocumentFragment();
    dish.featuresDish.forEach(item => {
        const featureElement = createFeatureElement(item.text);
        featuresDishFragment.appendChild(featureElement);
    });
    featuresDishList.appendChild(featuresDishFragment);

    const recipeListFragment = document.createDocumentFragment();
    dish.recipe.forEach(item => {
        const ingredientElement = createIngredientElement(item);
        recipeListFragment.appendChild(ingredientElement);
    });
    recipeList.appendChild(recipeListFragment);

    const technologyListFragment = document.createDocumentFragment();
    dish.cookTechnology.forEach(item => {
        const instructionElement = createInstructionElement(item.text);
        technologyListFragment.appendChild(instructionElement);
    });
    technologyList.appendChild(technologyListFragment);

    const nutritionalListFragment = document.createDocumentFragment();
    dish.nutritionalValues.forEach(item => {
        const nutritionalElement = createNutritionalElement(item.title, item.text);
        nutritionalListFragment.appendChild(nutritionalElement);
    });
    nutritionalList.appendChild(nutritionalListFragment);
}





// import axios from 'axios';

// const dishCode = new URLSearchParams(window.location.search).get('codeDish');
// const dishName = document.querySelector('.hero-dish__title');
// const dishHero = document.querySelector('.hero-dish__container');
// const headTitle = document.querySelector('title');
// const featuresDishList = document.querySelector('.features-dish__list');
// const recipeImg = document.querySelector('.recipe__image');
// const recipeList = document.querySelector('.recipe__list');
// const technologyList = document.querySelector('.technology__list');
// const nutritionalList= document.querySelector('.nutritional__list');




// function getDish() {
//     axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${dishCode}`) 
//         .then(response => {
//             const dish = response.data;
//             displayDish(dish);
//         })
//         .catch(error => {
//             console.error('Error fetching countries:', error);
//         });
// }

// function displayDish(dish) {
//     headTitle.textContent = `${dish.recipeName}`;
//     dishHero.style.backgroundImage = `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${dish.recipeImgHero})`;
//     dishName.textContent = dish.recipeName;
//     recipeImg.src = dish.recipeImgSection;
//     recipeImg.alt = dish.recipeImgAlt;

//     dish.featuresDish.forEach(item => {
//         const text = document.createElement('li');
//         text.textContent = item.text;
//         featuresDishList.appendChild(text);
//     });

//     dish.recipe.forEach(item => {
//         const ingredient = document.createElement('li');
//         ingredient.classList.add('recipe__item');

//         const ingredientName = document.createElement('p');
//         ingredientName.classList.add('recipe__product');
//         ingredientName.textContent = item.productName;
        

//         const ingredientQnt = document.createElement('p');
//         ingredientQnt.classList.add('recipe__qnt');
//         ingredientQnt.textContent = `${item.quantity} г`;

//         ingredient.appendChild(ingredientName);
//         ingredient.appendChild(ingredientQnt);
//         recipeList.appendChild(ingredient);
//     })

//     dish.cookTechnology.forEach(item => {
//         const instruction = document.createElement('li');
//         instruction.textContent = item.text;

//         technologyList.appendChild(instruction);
//     })

//     dish.nutritionalValues.forEach(item => {
//         const value = document.createElement('li');


//         const valueTitle = document.createElement('span');
//         valueTitle.classList.add('nutritional__title');
//         valueTitle.textContent = item.title;
//         const valueText = document.createElement('p');
//         valueText.classList.add('nutritional__text')
//         valueText.textContent = item.text;

//         value.appendChild(valueTitle);
//         value.appendChild(valueText);

//         nutritionalList.appendChild(value);
//     })

// }

// getDish();