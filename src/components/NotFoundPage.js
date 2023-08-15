import React from 'react';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className='container'>
            <h1 className={css.notFoundTitle}>Вибачте! Запит не знайдено.</h1>
        </div>
    );
}

export default NotFoundPage;
