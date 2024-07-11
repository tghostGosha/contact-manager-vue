import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.js'


const app = createApp(App)

app.use(createPinia())
app.use(plugin, defaultConfig(config))
app.mount('#app')

