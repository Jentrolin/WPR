import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Медичний центр "Здоров'я"</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Головна
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Лікарі
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Контакти
        </NavLink>
      </nav>
    </header>
  );
};