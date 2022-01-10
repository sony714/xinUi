import { createApp, h, render } from "vue";
import Dialog from '../lib/Dialog.vue'
export function openDialog(options: { title: any; content: any; }){
 const {title,content} = options
 const div = document.createElement('div')
 document.body.appendChild(div)
 const app = createApp({
     render(){
         return h(Dialog,{
             visible:true,
             
             'onUpdate:visible':(value: any)=>{
                 if(value === false){
                     app.unmount()
                     div.remove()
                 }
             }
         },{
            title,
            content
         })
     }
 })
 app.mount(div)
}