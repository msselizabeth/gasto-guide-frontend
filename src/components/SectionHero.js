import React, { Children } from 'react';

const SectionHero = ({children}) => {
    return (
        <section className='section hero-country'>{children}</section>
    );
}

export default SectionHero;