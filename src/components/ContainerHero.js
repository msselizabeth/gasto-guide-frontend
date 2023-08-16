import React, { Children } from 'react';

const ContainerHero = ({ children, imageHero }) => {
    const containerStyles = {
        backgroundImage: `linear-gradient(to right, rgba(0, 21, 52, 0.3), rgba(0, 21, 52, 0.3)), url(${imageHero})`
    };

    return (
        <div className="hero-country__container" style={containerStyles}>
            {children}
        </div>
    );
}

export default ContainerHero;