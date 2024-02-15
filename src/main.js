import { createApp } from 'vue'

import './style.sass'
import getStore from './store'
import App from './App.vue'

const app = createApp(App)
const store = getStore()
app.use(store)

app.mount('#app')
