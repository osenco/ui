import 'bootstrap'

import { createApp } from 'vue';
import App from './App.vue';

import * as components from './components/all';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/css/main.css'

const app = createApp(App)

app.mount('#app');
for (const componentKey in components) {
    app.component((components as any)[componentKey], (components as any)[componentKey]);
}
