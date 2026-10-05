import type { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  { id: 1, name: 'Лепеха Г.', specialty: 'Терапевт', available: true, room: 101, experience: 12 },
  { id: 2, name: 'Гусакова В.', specialty: 'Кардіолог', available: true, room: 102, experience: 15 },
  { id: 3, name: 'Григорій Л.', specialty: 'Стоматолог', available: false, room: 103, experience: 8 },
  { id: 4, name: 'Зозуля А.', specialty: 'Дієтолог', available: true, room: 104, experience: 5 },
  { id: 5, name: 'Петруньок А.', specialty: 'Окуліст', available: true, room: 105, experience: 9 },
  { id: 6, name: 'Кабаков І.', specialty: 'Фармацевт', available: true, room: 201, experience: 11 },
  { id: 7, name: 'Петруша І.', specialty: 'ЛОР', available: true, room: 203, experience: 7 },
  { id: 8, name: 'Гришко С.', specialty: 'Хірург', available: false, room: 204, experience: 14 }
];