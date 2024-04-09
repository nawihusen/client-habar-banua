import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')


// createApp(App)
// 	.component('Icon', Icon)
// 	component('v-select', VueSelect)
// 	.component('VDatePicker', DatePicker)
// 	.use(VueReCaptcha, { siteKey: import.meta.env.VITE_BASE_CAPTCHA_KEY })
// 	.use(VueFinalModal())
// 	.mount('#app')
