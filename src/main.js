import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from "axios";
import Router from './router/index.js'

axios.defaults.baseURL = '/api'

createApp(App).use(ElementPlus).use(Router).mount('#app')
