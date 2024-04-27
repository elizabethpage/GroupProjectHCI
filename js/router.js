import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './HomePage.html'
import Movies from './Movies.html'
import Categories from './Categories.html'
import TVShows from './TVShows.vue' // Import the TVShows component
import Profile from './Profile.html'
import readCsv from './read_csv.js'
import router from './router.js'
import Vue from './Vue.js'

const routes = [
  { path: '/', component: HomePage },
  { path: '/App.vue', component: App },
  { path: '/Movies.html', component: Movies },
  { path: '/Categories.html', component: Categories },
  { path: '/TVShows', component: TVShows }, // Add the TVShows route
  { path: '/Profile.html', component: Profile },
  { path: '/read_csv', component: readCsv },
  { path: '/router.js', component},
  { path: '/Vue.js', component}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router