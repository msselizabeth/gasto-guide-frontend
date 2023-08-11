import { fetchDish, fetchProducts } from './fetch';
import { dishCode } from './recipe';

const kcalValue = document.querySelector('.kcal__value');

async function calculateCalories(products, dishRecipe) {
    let totalCal = 0;
    let weightDish = 0;

    for (const ingredient of dishRecipe) {
        const validProduct = products.find(oneProduct => oneProduct.productName === ingredient.productName);

        if (validProduct) {
            const ingredientCal = (validProduct.kcal * ingredient.quantity) / 100;
            totalCal += ingredientCal;
        }
        weightDish += Number(ingredient.quantity);
    }

    totalCal -= (totalCal * 0.3);
    weightDish -= (weightDish * 0.3);
    
    const portions = weightDish / 300;
    const totalCalPortion = totalCal / portions;

    return totalCalPortion.toFixed(2);
}

async function main() {
    try {
        const products = await fetchProducts();
        const dish = await fetchDish(dishCode);

        if (dish && dish.recipe) {
            const calOfDish = await calculateCalories(products, dish.recipe);
            kcalValue.textContent = calOfDish;
        } else {
            console.error('Dish not found or missing recipe');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();

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





// // import axios from 'axios';

// // const kcalValue = document.querySelector('.kcal__value');

// // const fetchDish = async (dishCode) => {
// //     try {
// //         const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${dishCode}`);
// //         const dish = response.data;
// //         return dish;
// //     } catch (error) {
// //         handleErrors(error);
// //     }
// // }
// // const dish = await fetchDish(dishCode);

// // function handleErrors(error) {
// //     console.error('Error:', error);
// // }

// // const fetchProducts = async () => {
// //     try {
// //         const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/products`);
// //         const products = response.data;
// //         return products;
// //     } catch (error) {
// //         handleErrors(error);
// //     }
// // }

// // const products = await fetchProducts();

// // async function calculateCalories(products, dishRecipe) {
// //     console.log(products);
// //     console.log(dishRecipe);
// //     let totalCal = 0;
// //     let totalCalPortion = 0;
// //     let weightDish = 0;
// //     let portions = 0;

// //     dishRecipe.forEach(ingredient => {
// //         const validProduct =  products.find(oneProduct => {
// //             if (oneProduct.productName === ingredient.productName) {
// //                 return oneProduct;
// //             }
// //             return false;
// //         });
// //         if (validProduct) {
// //             const ingredientCal = (validProduct.kcal * ingredient.quantity) / 100;
// //             totalCal += ingredientCal;
// //         }
// //         weightDish += Number(ingredient.quantity);
        
        

// //     });

// //     totalCal -= (totalCal * 30 / 100);
// //     weightDish -= (weightDish * 30 / 100);
// //     portions = weightDish / 300;
// //     totalCalPortion = totalCal / portions;
    
// //     return totalCalPortion.toFixed(2) ;

// // }

// // export const calOfDish = await calculateCalories(products, dish.recipe);
// // kcalValue.textContent = calOfDish;