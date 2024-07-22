import '@/assets/styles/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
// createApp(App).mount('#app')

app.use(pinia)
app.mount('#app')
