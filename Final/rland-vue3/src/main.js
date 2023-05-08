import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Layout from './components/inc/Layout.vue'
import Login from './components/Login.vue'
import Index from './components/Index.vue'

import AdminLayout from './components/admin/inc/Layout.vue'
import AdminMenuList from './components/admin/menu/List.vue'

// import './assets/main.css'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  

  { path: '/', component: Layout, children:[
    { path: 'index', component: Index},
    { path: 'login', component: Login}
  ] },
  { path: '/admin', component: AdminLayout, children:[
    { path: 'menu', children:[
      {path : 'list', component: AdminMenuList},
      beforeRouteEnter(to, from, next){
        console.log("히히 못가");
      }
    ] }
  ]}
  
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const pinia = createPinia();

// Vue.createApp() -> Global Library

createApp(App)
.use(pinia)
.use(router)
.mount('#app') // -> ES6
