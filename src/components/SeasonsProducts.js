import React, { useState, useRef } from 'react';
import css from './SeasonsProducts.module.css';
import ToggleButtons from './ToggleButtons';

const SeasonsProducts = ({ country }) => {

    const [expanded, setExpanded] = useState(false);
    const listRef = useRef(null);

    const toggleExpand = () => {
        setExpanded(!expanded);
       
        if (expanded) {
            scrollToTop();
        }
    };

    const scrollToTop = () => {
        if (listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <>
            <h2 className='section__title' ref={listRef}>Сезонні продукти</h2>
      
            <div className={css.seasonsContainer}>
                <ul 
                className={css.seasonsList}
                style={{ maxHeight: expanded ? 'none' : '500px' }}>
                {country.seasons &&
                    country.seasons.map((item, index) => (
                        <li key={index}
                            className={`${css.seasonsItem} ${!expanded && index >= 2 ? css.hidden : ''}`}>
                            {item.text}</li>
                ))}
                </ul>

             {country.seasons && country.seasons.length > 1 && (
                   <ToggleButtons expanded={expanded} toggleExpand={toggleExpand} />
             )}
            </div>
        </>
    )
}

export default SeasonsProducts;




// import React from 'react';


// const SeasonsProducts = ({country}) => {
//     return (
//         <ul className={css.seasonsProductsList}>
//             {country.featuresCountry &&
//                 country.featuresCountry.map((item, index) => (
//                     <li key={index} className={css.seasonsProductsItem}>{item.text}</li>
//             ))}
//         </ul>)
// }

// export default SeasonsProducts;