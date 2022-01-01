import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../views/SwitchDemo.vue'
import TabsDemo from '../views/TabsDemo.vue'
import ButtonDemo from '../views/ButtonDemo.vue'
import DialogDemo from '../views/DialogDemo.vue' 
import {createWebHashHistory,createRouter} from 'vue-router'
const routes = [
    { path: '/', component: Home},
     {path:'/doc',component: Doc,children:[
      {path:'switch',component:SwitchDemo},
      {path:'tabs',component:TabsDemo},
      {path:'button',component:ButtonDemo},
      {path:'dialog',component:DialogDemo}
    ]}
  ]
 export const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
