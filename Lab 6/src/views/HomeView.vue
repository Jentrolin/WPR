<template>
  <div class="home-container">
    <h2>Ласкаво просимо до медичного центру "Здоров'я"</h2>
    <p>
      Наш медичний центр забезпечує високий рівень медичної допомоги та пропонує сучасний сервіс
      онлайн-запису на прийом до кваліфікованих спеціалістів.
    </p>
    <div class="home-actions">
      <RouterLink to="/doctors" class="btn">Переглянути лікарів</RouterLink>
      <RouterLink to="/appointment" class="btn btn-secondary">Записатися на прийом</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
.home-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}
.btn {
  padding: 10px 18px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}
.btn-secondary {
  background: #2c3e50;
}
</style>