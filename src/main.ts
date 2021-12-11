import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Doc from './components/Doc.vue'
import {createWebHashHistory,createRouter} from 'vue-router'

const routes = [
    { path: '/', component: Home},
    {path:'/doc',component: Doc}
  ]
  const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')
