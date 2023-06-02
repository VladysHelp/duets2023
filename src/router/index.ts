import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Songs from '../views/Songs.vue';
import SongsList from "@/components/SongsList/SongsList.vue";
import SongEditor from "@/components/SongEditor/SongEditor.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: 'home',
    component: HomeView
  },
  {
    path: "/songs",
    name: "",
    component: Songs,
    children: [
      {
        path: "",
        name: "songsList",
        component: SongsList
      },
      {
        path: "editor/:id?",
        name: "SongEditor",
        component: SongEditor
      }
    ]
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
  mode: 'hash',
  base: "/choir",
  routes
})

export default router
