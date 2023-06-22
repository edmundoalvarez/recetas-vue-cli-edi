import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CargarView from '../views/CargarView.vue'
import MisRecetasView from '../views/MisRecetasView.vue'
import EditarView from '../views/EditarView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cargar',
    name: 'cargar',
    component: CargarView
  },
  {
    path: '/recetasguardadas',
    name: 'recetasguardadas',
    component: MisRecetasView
  },
  {
    path: '/editar/:id/',
    name: 'editar',
    component: EditarView
  }
]

const router = new VueRouter({
  routes
})

export default router
