import { createApp } from 'vue'
import App from './App.vue'
import './lib/xinxin.scss'
import './style/index.scss'
import { router } from './until/router'
import 'github-markdown-css'
import './style/icon.js'
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
 