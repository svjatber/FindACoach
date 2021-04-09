import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router/router.js'
import store from './store/index'
import '@/assets/tailwind.css'


const app = createApp(App)
app.use(router).use(store).mount('#app')
