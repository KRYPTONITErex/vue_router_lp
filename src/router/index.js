import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import JobView from '@/views/jobs/Job.View.vue'
import JobDetail from '@/views/jobs/JobDetail.vue'
import NotFound from '@/views/NotFound.vue'

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
    component: JobView
  },
  {
    path: '/jobdetails/:id',
    name: 'jobdetails',
    component: JobDetail,
    props: true
  },
  {
    path: '/alljobs',
    redirect: '/jobs'
  },
  {
    path: '/:catchAll(.*)',
    // redirect: '/'
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
