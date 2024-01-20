import React from 'react';
import styles from './styles.module.css';

const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
    >
      {label}
    </button>
  );
};

export default Button;