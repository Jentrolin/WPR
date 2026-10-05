<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAppointmentStore } from '@/stores/appointment'

const store = useAppointmentStore()
</script>

<template>
  <div class="app-layout">
    <header>
      <h1>Медичний центр "Здоров'я"</h1>
      <nav>
        <RouterLink to="/">Головна</RouterLink>
        <RouterLink to="/doctors">Лікарі</RouterLink>
        <RouterLink to="/appointment">
          Запис
          <span v-if="store.appointmentsCount > 0" class="badge">
            {{ store.appointmentsCount }}
          </span>
        </RouterLink>
        <RouterLink to="/contacts">Контакти</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer>
      <p>&copy; 2026 Медичний центр "Здоров'я"</p>
    </footer>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  background: var(--primary);
  padding: 1.5rem;
  text-align: center;
  border-bottom: 3px solid var(--accent);
}
h1 {
  color: var(--accent);
  margin-bottom: 0.8rem;
}
nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}
nav a {
  text-decoration: none;
  color: var(--text);
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 6px;
  position: relative;
  transition: all 0.2s ease;
}
nav a:hover {
  color: var(--accent);
}
/* Стилізація активного посилання маршруту за методичкою */
.router-link-active {
  background: var(--accent);
  color: white !important;
}
.badge {
  background: #c0392b;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  margin-left: 4px;
}
.main-content {
  flex: 1;
  max-width: 1000px;
  width: 100%;
  margin: 1.5rem auto;
  padding: 0 1rem;
}
footer {
  text-align: center;
  padding: 1.5rem;
  background: var(--primary);
  color: var(--accent);
  font-weight: bold;
}
</style>