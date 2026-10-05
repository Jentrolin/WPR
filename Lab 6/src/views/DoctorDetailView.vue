<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useAppointmentStore } from '@/stores/appointment'

const route = useRoute()
const router = useRouter()
const store = useAppointmentStore()

const doctorId = Number(route.params.id)
const doctor = store.getDoctorById(doctorId)
</script>

<template>
  <div class="detail-container">
    <div v-if="doctor" class="detail-card">
      <h2>Картка лікаря: {{ doctor.name }}</h2>
      <p><strong>Спеціальність:</strong> {{ doctor.specialty }}</p>
      <p><strong>Кабінет прийому:</strong> {{ doctor.room }}</p>
      <p><strong>Загальний досвід:</strong> {{ doctor.experience }} років</p>
      <p>
        <strong>Статус:</strong>
        {{ doctor.available ? 'Доступний для запису' : 'Прийом тимчасово призупинено' }}
      </p>

      <div class="actions">
        <button class="btn" @click="router.push('/doctors')">Назад до списку</button>
        <button
          v-if="doctor.available"
          class="btn btn-book"
          @click="router.push({ path: '/appointment', query: { doctor: doctor.name } })"
        >
          Записатися до лікаря
        </button>
      </div>
    </div>

    <div v-else class="not-found">
      <h3>Лікаря з ID #{{ route.params.id }} не знайдено</h3>
      <button class="btn" @click="router.push('/doctors')">Повернутися до каталогу</button>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
.actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}
.btn {
  padding: 8px 16px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.btn-book {
  background: var(--accent);
}
.not-found {
  color: #c0392b;
}
</style>