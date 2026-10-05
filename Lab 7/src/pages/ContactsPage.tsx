import React from 'react';
import styles from './ContactsPage.module.css';

export const ContactsPage: React.FC = () => {
  return (
    <div className={styles.card}>
      <h2>Контактна інформація</h2>
      <p><strong>Адреса:</strong> м. Київ, вул. Лікарняна, 15</p>
      <p><strong>Телефон реєстратури:</strong> +38 (044) 123-45-67</p>
      <p><strong>Електронна пошта:</strong> info@health-center.ua</p>
      <p><strong>Години роботи:</strong> Пн–Пт: 08:00 – 20:00, Сб: 09:00 – 15:00</p>
    </div>
  );
};