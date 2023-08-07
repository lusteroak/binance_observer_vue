import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { createPinia } from 'pinia'

import PoolHostingData from './Components/PoolHostingData.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import ProgressSpinner from 'primevue/progressspinner'

import './assets/main.css'
import 'primevue/resources/themes/vela-green/theme.css'
import 'primevue/resources/primevue.min.css'
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(createPinia())

app.component('Button', Button)
app.component('Card', Card)
app.component('Badge', Badge)
app.component('Spinner', ProgressSpinner)
app.component('PoolHostingData', PoolHostingData)
app.mount('#app')
