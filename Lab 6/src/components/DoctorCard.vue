<script setup lang="ts">
import type { Doctor } from '@/types'
import { useRouter } from 'vue-router'

const props = defineProps<{
  item: Doctor
}>()

const router = useRouter()

function goToDetail() {
  router.push({ name: 'DoctorDetail', params: { id: props.item.id } })
}
</script>

<template>
  <div class="doctor-card">
    <h3>{{ item.name }}</h3>
    <p class="specialty">{{ item.specialty }}</p>
    <p><strong>Кабінет:</strong> {{ item.room }}</p>
    <p><strong>Досвід:</strong> {{ item.experience }} років</p>
    <span :class="['badge', item.available ? 'badge-open' : 'badge-busy']">
      {{ item.available ? 'Прийом відкритий' : 'Тимчасово відсутній' }}
    </span>
    <button class="details-btn" @click="goToDetail">Детальніше</button>
  </div>
</template>

<style scoped>
.doctor-card {
  background: white;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-left: 5px solid var(--accent);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.specialty {
  color: var(--accent);
  font-weight: bold;
}
.badge {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: bold;
  width: fit-content;
}
.badge-open {
  background: #d4edda;
  color: #155724;
}
.badge-busy {
  background: #f8d7da;
  color: #721c24;
}
.details-btn {
  margin-top: auto;
  padding: 8px 12px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.details-btn:hover {
  background: #1a5276;
}
</style>