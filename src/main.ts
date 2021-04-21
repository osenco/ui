import { createApp } from 'vue'
import App from './App.vue'
import Osen from './index'

const app = createApp(App)

app.use(Osen)
app.mount('#app')
