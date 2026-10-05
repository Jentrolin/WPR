<script setup lang="ts">
import { useAppointmentStore } from '@/stores/appointment'
import DoctorCard from '@/components/DoctorCard.vue'

const store = useAppointmentStore()
</script>

<template>
  <div class="doctors-page">
    <h2>Наші спеціалісти</h2>

    <div class="filter-box">
      <label for="filter">Фільтр за спеціальністю:</label>
      <select id="filter" v-model="store.selectedSpecialty">
        <option v-for="item in store.specialties" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>

    <div class="doctors-grid">
      <DoctorCard v-for="doc in store.filteredDoctors" :key="doc.id" :item="doc" />
    </div>
  </div>
</template>

<style scoped>
.doctors-page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.filter-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
}
.filter-box select {
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 6px;
}
.doctors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.2rem;
}
</style>