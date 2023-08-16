import React from 'react';
import css from './ToggleButtons.module.css';

const ToggleButtons = ({ expanded, toggleExpand }) => {
  return (
    <div>
      {!expanded ? (
        <button className={css.expandButton} onClick={toggleExpand}>
          Показати більше
        </button>
      ) : (
        <button className={css.collapseButton} onClick={toggleExpand}>
          Згорнути
        </button>
      )}
    </div>
  );
};

export default ToggleButtons;
