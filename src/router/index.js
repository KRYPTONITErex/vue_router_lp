import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import Jobs from '@/views/job/Jobs.vue'
import JobDetails from '@/views/job/JobDetails.vue'

import Notfound from '@/views/Notfound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobdetails/:id',
    name: 'jobdetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/alljobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    component: Notfound

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
