import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Doctor } from '../types';
import { doctorsData } from '../data/items';
import { DoctorCard } from '../components/DoctorCard';
import styles from './DoctorsPage.module.css';

export const DoctorsPage: React.FC = () => {
  const [specialty, setSpecialty] = useState<string>('Всі');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorsData);

  const navigate = useNavigate();

  useEffect(() => {
    if (specialty === 'Всі') {
      setFilteredDoctors(doctorsData);
    } else {
      const result = doctorsData.filter((doc) => doc.specialty === specialty);
      setFilteredDoctors(result);
    }
  }, [specialty]);

  const specialtiesList = ['Всі', ...new Set(doctorsData.map((d) => d.specialty))];

  const handleSelectDoctor = (id: number) => {
    navigate(`/doctors/${id}`);
  };

  return (
    <div className={styles.page}>
      <h2>Наші спеціалісти</h2>

      <div className={styles.filterBar}>
        <label htmlFor="specialty-select">Фільтр за спеціальністю:</label>
        <select
          id="specialty-select"
          value={specialty}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSpecialty(e.target.value)}
          className={styles.select}
        >
          {specialtiesList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.grid}>
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} item={doc} onSelect={handleSelectDoctor} />
        ))}
      </div>
    </div>
  );
};