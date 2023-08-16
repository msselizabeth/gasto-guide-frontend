import React from 'react';
import css from './LoadMore.module.css';

const LoadMore = ({ onClick }) => (
  <button onClick={onClick} type='button' className={css.loadMore}>
    Завантажити ще
  </button>
);

export default LoadMore;
