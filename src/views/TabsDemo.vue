 <template>
     <h4>示例一</h4>
     <Tabs v-model:selected="select">
         <Tab :title="select">小头小头</Tab>
         <Tab title="大头大头下雨不愁，别人有伞，我有大头">大头大头</Tab>
     </Tabs>
 </template>
 
 <script setup lang="ts">
 import Tabs from '../lib/Tabs.vue'
 import Tab from '../lib/Tab.vue'
import { ref } from 'vue';
 
 let select = ref('导航五十')
 </script>
 
 <style scoped>
 
 </style>