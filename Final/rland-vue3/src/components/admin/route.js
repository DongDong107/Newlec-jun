import Layout from './inc/Layout.vue'
import MenuList from './menu/List.vue'
import MenuDetail from './menu/Detail.vue'
import Index from './Index.vue'

import {useUserDetailsStore} from '../../stores/useUserDetailsStore.js'

const admin = { 
  path: '/admin', 
  component: Layout, 
  children:[
    { 
      path: 'index', 
      component: Index
    },
    { 
      path: 'menu', 
      children:[
        { 
          path : 'list', 
          component: MenuList, 
        },
        {
          // path: 'detail', // /admin.menu/detail?id=3
          path: ':id',
          component: MenuDetail
        }
      ]
    }
  ],
  beforeEnter(to, from, next){
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
    // 이 가드가 호출될 때 아직 생성되지 않았기 때문에 'this' 컴포넌트 인스턴스가 접근할수 없습니다!
    console.log("히히 못가");
    console.log(`to:${to.path}, from:${from.path}`);
    let userDetails = useUserDetailsStore();

    console.log(userDetails.isAuthenticated);

    let url = `/login?returnURL=${to.path}`;

    if(!userDetails.isAuthenticated)
      next(url);
    else if(!userDetails.hasRole("ADMIN"))
      next("/error/403");
    else
      next();
    
  }
}

export default admin;