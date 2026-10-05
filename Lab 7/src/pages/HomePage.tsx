import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Ласкаво просимо до нашого медичного центру!</h2>
      <p>
        Ми надаємо якісні консультації провідних спеціалістів із використанням
        сучасного медичного обладнання.
      </p>
      <div className={styles.actions}>
        <Link to="/doctors" className={styles.btn}>Каталог лікарів</Link>
        <Link to="/contacts" className={`${styles.btn} ${styles.btnSecondary}`}>Контакти</Link>
      </div>
    </div>
  );
};