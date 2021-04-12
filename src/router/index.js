import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthRoutes from './Auth';
import DashboardRoutes from './Dashboard';
import PublicRoutes from './Public';

Vue.use(VueRouter)

const routes = [
  AuthRoutes,
  DashboardRoutes,
  ...PublicRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
