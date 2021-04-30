import 'bootstrap'

import { createApp } from 'vue';
import App from './App.vue';

import * as components from './components/all';

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/css/main.css'

const app = createApp(App)

for (const componentKey in components) {
  console.log((components as any)[componentKey])
    app.component(componentKey, (components as any)[componentKey]);
}

app.mount('#app');
