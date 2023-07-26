import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import GameView from '../views/Game.vue'
import HomeView from '../views/HomeView.vue'
import TimerView from '../views/Timer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/duets',
    name: 'duets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Duets.vue')
  },
  {
    path: "/game",
    name: "game",
    component: GameView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/timer",
    name: "timer",
    component: TimerView,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: "/",
  routes
})

export default router
