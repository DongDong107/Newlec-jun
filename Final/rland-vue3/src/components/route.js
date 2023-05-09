import Layout from './inc/Layout.vue'
import Login from './Login.vue'
import Index from './Index.vue'
// import Err403 from './error/403.vue'
import NotFound from './error/404.vue'

const root = { path: '/', component: Layout, children:[
  { path: 'index', component: Index},
  { path: 'login', component: Login},
  { path: 'error', children:[
    {path : "403", component:() => import('./error/403.vue')}
  ]},
  { 
    path: "/:pathMatch(.*)*",
    component: NotFound
  }
]};

export default root;