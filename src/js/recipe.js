import axios from 'axios';

const countryCode = new URLSearchParams(window.location.search).get('codeDish');


function getDish() {
    axios.get(`https://gastro-guide-backend.onrender.com//api/recipes/${countryCode}`) // Путь к API на вашем бекенде
        .then(response => {
            const dish = response.data;
            displayDish(dish);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
}