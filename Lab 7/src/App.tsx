import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DoctorsPage } from './pages/DoctorsPage';
import { DetailPage } from './pages/DetailPage';
import { ContactsPage } from './pages/ContactsPage';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DetailPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2026 Медичний центр "Здоров'я"</p>
      </footer>
    </div>
  );
};

export default App;