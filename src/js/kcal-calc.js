import { fetchDish, fetchProducts } from './fetch';
const dishCode = new URLSearchParams(window.location.search).get('codeDish');

const products = await fetchProducts();
const dish = await fetchDish(dishCode);
export let calOfDish;

async function calculateCalories(products, dishRecipe) {
    let totalCal = 0;
    let weightDish = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbohydrates = 0;

    for (const ingredient of dishRecipe) {
        const validProduct = products.find(oneProduct => oneProduct.productName === ingredient.productName);
        console.log(validProduct);

        if (validProduct) {
            const ingredientCal = (parseFloat(validProduct.kcal) * ingredient.quantity) / 100;
            totalCal += ingredientCal;

            const proteins = (parseFloat(validProduct.macronutrients[0].qnt) * ingredient.quantity) / 100;
            totalProteins += proteins;

            const fats = (parseFloat(validProduct.macronutrients[1].qnt) * ingredient.quantity) / 100;
            totalFats += fats;

            const carbohydrates = (parseFloat(validProduct.macronutrients[2].qnt) * ingredient.quantity) / 100;
            totalCarbohydrates += carbohydrates;
        }
        weightDish += Number(ingredient.quantity);
    }

    totalCal -= (totalCal * 0.2);
    weightDish -= (weightDish * 0.2);
    totalProteins *= 0.85;
    totalFats -= (totalFats * 0.15);
    
    const portions = weightDish / 300;
    const totalCalPortion = totalCal / portions;
    const totalProteinsPortion = totalProteins / portions;
    const totalFatsPortion = totalFats / portions;
    const totalCarbohydratesPortion = totalCarbohydrates / portions;

    
    return {
        totalCalories: totalCalPortion.toFixed(2),
        totalProteins: totalProteinsPortion.toFixed(2),
        totalFats: totalFatsPortion.toFixed(2),
        totalCarbohydrates: totalCarbohydratesPortion.toFixed(2)
    };
}

if (dish && dish.recipe) {
    calOfDish = await calculateCalories(products, dish.recipe);
}else {
    console.error('Dish not found or missing recipe');
}


// const calOfDish = await calculateCalories(products, dish.recipe);
// console.log(calOfDish);

// const result = async () => {
//     try {
//         const products = await fetchProducts();
//         const dish = await fetchDish(dishCode);

//         if (dish && dish.recipe) {
//             const calOfDish = await calculateCalories(products, dish.recipe);
//             return calOfDish;
            
//         } else {
//             console.error('Dish not found or missing recipe');
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// result();





// import { dishCode } from './recipe';
// import { fetchDish, fetchProducts } from './fetch';

// const kcalValue = document.querySelector('.kcal__value');

// async function calculateCalories(products, dishRecipe) {
//     let totalCal = 0;
//     let weightDish = 0;

//     for (const ingredient of dishRecipe) {
//         const validProduct = products.find(oneProduct => oneProduct.productName === ingredient.productName);

//         if (validProduct) {
//             const ingredientCal = (validProduct.kcal * ingredient.quantity) / 100;
//             totalCal += ingredientCal;
//         }
//         weightDish += Number(ingredient.quantity);
//     }

//     totalCal -= (totalCal * 0.3);
//     weightDish -= (weightDish * 0.3);
    
//     const portions = weightDish / 300;
//     const totalCalPortion = totalCal / portions;

//     return totalCalPortion.toFixed(2);
// }

// async function main() {
//     try {
//         const products = await fetchProducts();
//         const dish = await fetchDish(dishCode);

//         if (dish && dish.recipe) {
//             const calOfDish = await calculateCalories(products, dish.recipe);
//             kcalValue.textContent = calOfDish;
//         } else {
//             console.error('Dish not found or missing recipe');
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// main();





// import axios from 'axios';
// import { dishCode } from './recipe';


// const kcalValue = document.querySelector('.kcal__value');

// const fetchDish = async (dishCode) => {
//     try {
//         const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${dishCode}`);
//         const dish = response.data;
//         return dish;
//     } catch (error) {
//         handleErrors(error);
//     }
// }


// function handleErrors(error) {
//     console.error('Error:', error);
// }

// const fetchProducts = async () => {
//     try {
//         const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/products`);
//         const products = response.data;
//         return products;
//     } catch (error) {
//         handleErrors(error);
//     }
// }



// async function calculateCalories(products, dishRecipe) {
//     let totalCal = 0;
//     let totalCalPortion = 0;
//     let weightDish = 0;
//     let portions = 0;

//     dishRecipe.forEach(ingredient => {
//         const validProduct =  products.find(oneProduct => {
//             if (oneProduct.productName === ingredient.productName) {
//                 return oneProduct;
//             }
//             return false;
//         });
//         if (validProduct) {
//             const ingredientCal = (validProduct.kcal * ingredient.quantity) / 100;
//             totalCal += ingredientCal;
//         }
//         weightDish += Number(ingredient.quantity);
        
        

//     });

//     totalCal -= (totalCal * 30 / 100);
//     weightDish -= (weightDish * 30 / 100);
//     portions = weightDish / 300;
//     totalCalPortion = totalCal / portions;
    
//     return totalCalPortion.toFixed(2) ;

// }

