import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CargarView from '../views/CargarView.vue'
import MisRecetasView from '../views/MisRecetasView.vue'
import RecetaDetalleView from '../views/RecetaDetalleView.vue'

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
    path: '/recetas/:id/',
    name: 'recetasdetalle',
    component: RecetaDetalleView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
