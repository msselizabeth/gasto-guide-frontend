import React, { useState, useRef } from 'react';
import css from './HistoryCountry.module.css'
import ToggleButtons from './ToggleButtons';

const HistoryCountry = ({ country }) => {

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
         <h2 className='section__title' ref={listRef}>Історія кухні</h2>

        <div className={css.historyContainer} >
            <ul 
                
                className={css.historyList}
                style={{ maxHeight: expanded ? 'none' : '694px' }}>
                {country.history &&
                    country.history.map((item, index) => (
                        <li key={index}
                            className={`${css.historyItem} ${!expanded && index >= 1 ? css.hidden : ''}`}>
                            {item.text}</li>
                ))}
            </ul>

             {country.history && country.history.length > 1 && (
                   <ToggleButtons expanded={expanded} toggleExpand={toggleExpand} />
             )}
        </div>
    </>
    )
}

export default HistoryCountry;
