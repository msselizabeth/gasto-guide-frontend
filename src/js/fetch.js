import axios from 'axios';

function handleErrors(error) {
    console.error('Error:', error);
}

export async function getCountriesOfTheSouthAmerica() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1a83c2560a88fcb26b4e/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function getCountriesOfTheNorthAmerica() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1af7c2560a88fcb26b4f/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function getCountriesOfTheAfrica() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1b08c2560a88fcb26b50/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}
export async function getCountriesOfTheAustralia() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1dc8f58533d5a7c89594/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}
export async function getCountriesOfTheAsia() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1db4f58533d5a7c89592/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}
export async function getCountriesOfTheEurope() {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/continents/64ce1dbdf58533d5a7c89593/countries`);
        return response.data;
    } catch (error) {
        handleErrors(error);
    }
}

export async function getCountries(page, limit) {
    try {
        const response = await axios.get(`https://gastro-guide-backend.onrender.com/api/countries?page=${page}&limit=${limit}`);
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