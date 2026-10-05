import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Doctor, Appointment } from '@/types'

export const useAppointmentStore = defineStore('appointment', () => {
  // Список лікарів медичного центру
  const doctors = ref<Doctor[]>([
    { id: 1, name: 'Лепеха Г.', specialty: 'Терапевт', room: 101, available: true, experience: 12 },
    { id: 2, name: 'Гусакова В.', specialty: 'Кардіолог', room: 102, available: true, experience: 15 },
    { id: 3, name: 'Григорій Л.', specialty: 'Стоматолог', room: 103, available: false, experience: 8 },
    { id: 4, name: 'Зозуля А.', specialty: 'Дієтолог', room: 104, available: true, experience: 5 },
    { id: 5, name: 'Петруньок А.', specialty: 'Окуліст', room: 105, available: true, experience: 9 },
    { id: 6, name: 'Кабаков І.', specialty: 'Фармацевт', room: 201, available: true, experience: 11 },
    { id: 7, name: 'Петруша І.', specialty: 'ЛОР', room: 203, available: true, experience: 7 }
  ])

  // Список активних записів пацієнтів
  const appointments = ref<Appointment[]>([
    {
      id: 101,
      patientName: 'Іваненко Іван',
      phone: '+380671112233',
      doctorName: 'Лепеха Г.',
      specialty: 'Терапевт',
      date: '2026-10-15',
      time: '10:00'
    }
  ])

  const selectedSpecialty = ref<string>('Всі')

  // Унікальний перелік спеціальностей для селекта
  const specialties = computed<string[]>(() => {
    const list = doctors.value.map((d) => d.specialty)
    return ['Всі', ...new Set(list)]
  })

  // Фільтр лікарів за спеціальністю
  const filteredDoctors = computed<Doctor[]>(() => {
    if (selectedSpecialty.value === 'Всі') {
      return doctors.value
    }
    return doctors.value.filter((d) => d.specialty === selectedSpecialty.value)
  })

  // Лічильник записів для відображення в шапці навігації
  const appointmentsCount = computed<number>(() => appointments.value.length)

  // Дія запису (book)
  function bookAppointment(appointment: Omit<Appointment, 'id'>) {
    appointments.value.push({
      id: Date.now(),
      ...appointment
    })
  }

  // Дія скасування (cancel)
  function cancelAppointment(id: number) {
    appointments.value = appointments.value.filter((item) => item.id !== id)
  }

  function getDoctorById(id: number): Doctor | undefined {
    return doctors.value.find((d) => d.id === id)
  }

  return {
    doctors,
    appointments,
    selectedSpecialty,
    specialties,
    filteredDoctors,
    appointmentsCount,
    bookAppointment,
    cancelAppointment,
    getDoctorById
  }
})