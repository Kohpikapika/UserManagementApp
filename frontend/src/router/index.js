import { createRouter, createWebHistory } from 'vue-router'

// 仮画面（あとでちゃんと作る）
import UsersList from '../views/UsersList.vue'
import UserDetail from '../views/UserDetail.vue'
import UserEdit from '../views/UserEdit.vue'

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'UsersList',
    component: UsersList,
  },
  {
    path: '/users/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true,
  },
  {
    path: '/users/new',
    name: 'UserNew',
    component: UserEdit,
    props: { id: 'new' },
  },
  {
    path: '/users/:id/edit',
    name: 'UserEdit',
    component: UserEdit,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
