import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../views/SwitchDemo.vue'
import TabsDemo from '../views/TabsDemo.vue'
import ButtonDemo from '../views/ButtonDemo.vue'
import DialogDemo from '../views/DialogDemo.vue'
import Intro from '../views/Intro.vue'
import Start from  '../views/Start.vue'
import Ins  from '../views/Ins.vue'

import {createWebHashHistory,createRouter} from 'vue-router'
const routes = [
    { path: '/', component: Home},
     {path:'/doc',component: Doc,children:[
      {path:'intro',component:Intro},
      {path:'ins',component:Ins},
      {path:'start',component:Start},
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
