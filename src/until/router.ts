import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../views/SwitchDemo.vue'
import Tabs from '../views/Tabs.vue'
import ButtonDemo from '../views/ButtonDemo.vue'
import Dialog from '../views/Dialog.vue' 
import {createWebHashHistory,createRouter} from 'vue-router'
const routes = [
    { path: '/', component: Home},
     {path:'/doc',component: Doc,children:[
      {path:'switch',component:SwitchDemo},
      {path:'tabs',component:Tabs},
      {path:'button',component:ButtonDemo},
      {path:'dialog',component:Dialog}
    ]}
  ]
 export const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
