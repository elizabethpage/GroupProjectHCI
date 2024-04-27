import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'papaparse/papaparse.js'

// Import Vuex store
import store from './store'

// Import Vue and Vue Router
import { createApp } from 'vue'
import router from './router.js'

// Import your main Vue component
import App from './App.vue'

// Import ESLint and Prettier plugins
import 'eslint-plugin-vue'
import 'eslint-config-prettier'

// Initialize Vue app with store and router
const app = createApp(App)
app.use(store)
app.use(router)

// Mount the app to the DOM
app.mount('#app')

// Print a message to the console
console.log('Welcome to my Vue.js application!')