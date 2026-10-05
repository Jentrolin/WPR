<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppointmentStore } from '@/stores/appointment'

const route = useRoute()
const store = useAppointmentStore()

const initialDoctor = typeof route.query.doctor === 'string' ? route.query.doctor : ''

const patientName = ref('')
const phone = ref('')
const doctorName = ref(initialDoctor)
const date = ref('')
const time = ref('')

function handleSubmit() {
  if (!patientName.value || !phone.value || !doctorName.value || !date.value || !time.value) {
    return
  }

  const selectedDoc = store.doctors.find((d) => d.name === doctorName.value)

  store.bookAppointment({
    patientName: patientName.value,
    phone: phone.value,
    doctorName: doctorName.value,
    specialty: selectedDoc ? selectedDoc.specialty : 'Загальна',
    date: date.value,
    time: time.value
  })

  // Очищення форми
  patientName.value = ''
  phone.value = ''
  date.value = ''
  time.value = ''
}
</script>

<template>
  <div class="appointment-page">
    <div class="form-container">
      <h2>Онлайн-запис на прийом</h2>
      <form class="appointment-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>ПІБ пацієнта:</label>
          <input v-model="patientName" type="text" placeholder="Іванов Іван" required />
        </div>
        <div class="form-group">
          <label>Телефон:</label>
          <input v-model="phone" type="tel" placeholder="+380XXXXXXXXX" required />
        </div>
        <div class="form-group">
          <label>Лікар:</label>
          <select v-model="doctorName" required>
            <option value="" disabled>Оберіть лікаря</option>
            <option
              v-for="doc in store.doctors.filter((d) => d.available)"
              :key="doc.id"
              :value="doc.name"
            >
              {{ doc.name }} ({{ doc.specialty }})
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Дата:</label>
          <input v-model="date" type="date" required />
        </div>
        <div class="form-group">
          <label>Час:</label>
          <input v-model="time" type="time" required />
        </div>

        <button type="submit" class="submit-btn">Підтвердити запис</button>
      </form>
    </div>

    <div class="appointments-list-container">
      <h3>Заплановані записи ({{ store.appointmentsCount }})</h3>

      <table v-if="store.appointments.length > 0">
        <thead>
          <tr>
            <th>Пацієнт</th>
            <th>Телефон</th>
            <th>Лікар</th>
            <th>Дата та час</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="app in store.appointments" :key="app.id">
            <td>{{ app.patientName }}</td>
            <td>{{ app.phone }}</td>
            <td>{{ app.doctorName }} ({{ app.specialty }})</td>
            <td>{{ app.date }} {{ app.time }}</td>
            <td>
              <button class="cancel-btn" @click="store.cancelAppointment(app.id)">
                Скасувати
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else class="empty-text">Наразі активних записів немає.</p>
    </div>
  </div>
</template>

<style scoped>
.appointment-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.form-container,
.appointments-list-container {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
.appointment-form {
  display: grid;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.form-group input,
.form-group select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.submit-btn {
  padding: 10px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}
th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
th {
  background: var(--primary);
}
.cancel-btn {
  background: #c0392b;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.empty-text {
  margin-top: 1rem;
  color: #7f8c8d;
}
</style>