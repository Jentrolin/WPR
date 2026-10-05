import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctorsData } from '../data/items';
import styles from './DetailPage.module.css';

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const doctorId = Number(id);
  const doctor = doctorsData.find((d) => d.id === doctorId);

  if (!doctor) {
    return (
      <div className={styles.card}>
        <h3 className={styles.error}>Лікаря з ID #{id} не знайдено</h3>
        <button className={styles.backBtn} onClick={() => navigate('/doctors')}>
          Повернутися до каталогу
        </button>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2>Картка лікаря: {doctor.name}</h2>
      <p><strong>Спеціальність:</strong> {doctor.specialty}</p>
      <p><strong>Номер кабінету:</strong> {doctor.room}</p>
      <p><strong>Стаж роботи:</strong> {doctor.experience} років</p>
      <p>
        <strong>Статус прийому:</strong>{' '}
        <span className={doctor.available ? styles.openText : styles.busyText}>
          {doctor.available ? 'Ведеться активний запис' : 'Прийом тимчасово призупинено'}
        </span>
      </p>

      <div className={styles.actions}>
        <button className={styles.backBtn} onClick={() => navigate('/doctors')}>
          Назад до списку
        </button>
      </div>
    </div>
  );
};