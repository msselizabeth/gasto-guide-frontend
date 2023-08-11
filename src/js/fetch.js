import axios from 'axios';

function handleErrors(error) {
    console.error('Error:', error);
}

export async function getCountriesOfTheContinent() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1a83c2560a88fcb26b4e/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function getCountryInfo(countryCode) {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries/${countryCode}`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function getDishesOfCountry(countryCode) {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries/${countryCode}/recipes`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function fetchDish(dishCode) {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${dishCode}`);
        return response.data;
    } catch (error) {
        handleErrors(error);
        return null;
    }
}

export async function getDish(dishCode) {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/recipes/${dishCode}`);
        return response.data;
        
    } catch (error) {
        handleErrors(error);
    }
}

export async function fetchProducts() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/products`);
        return response.data;
    } catch (error) {
        handleErrors(error);
        return [];
    }
}