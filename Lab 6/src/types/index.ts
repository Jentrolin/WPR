export interface Doctor {
  id: number
  name: string
  specialty: string
  room: number
  available: boolean
  experience: number // додаткове поле: стаж роботи в роках
}

export interface Appointment {
  id: number
  patientName: string
  phone: string
  doctorName: string
  specialty: string
  date: string
  time: string
}