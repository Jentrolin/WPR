import React from 'react';
import type { Doctor } from '../types';
import styles from './DoctorCard.module.css';

interface DoctorCardProps {
  item: Doctor;
  onSelect: (id: number) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ item, onSelect }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.specialty}>{item.specialty}</p>
        <p><strong>Кабінет:</strong> {item.room}</p>
        <p><strong>Досвід:</strong> {item.experience} років</p>
      </div>

      <div className={styles.footer}>
        <span className={`${styles.badge} ${item.available ? styles.open : styles.busy}`}>
          {item.available ? 'Прийом відкритий' : 'Тимчасово відсутній'}
        </span>
        <button className={styles.btn} onClick={() => onSelect(item.id)}>
          Детальніше
        </button>
      </div>
    </div>
  );
};