import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './CountriesOfSouthAmerica.module.css'

const App = () => {
    
    const [data, setData] = useState([]);

   useEffect(() => {
    axios.get('https://gastro-guide-backend.onrender.com/api/countries/64ce1a83c2560a88fcb26b4e')
        .then(response => {
          
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
   }, []);
    
    
    console.log(data);
    
    
    return (
  
      <ul className={css.countriesSAlist}>
        {data.map(item => (
          <li key={item._id} className={css.countriesSAitem}>
            <a className={css.countriesSAlink} href='#'>
                <img src={item.image} className={css.countriesSAimage}/>
                <span className={css.countriesSAname}>{item.countryName}</span>
          </a></li>
        ))}
      </ul>

  );
}

export default App;