import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('@/views/DoctorsView.vue')
  },
  {
    path: '/doctors/:id',
    name: 'DoctorDetail',
    component: () => import('@/views/DoctorDetailView.vue')
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('@/views/AppointmentView.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/ContactsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router