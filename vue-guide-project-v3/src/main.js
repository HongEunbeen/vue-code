import { createApp } from 'vue'
import App from './App.vue'

import './index.css';
import {provideToast} from 'vue-toastification';
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.provide(provideToast);
app.mount('#app');
