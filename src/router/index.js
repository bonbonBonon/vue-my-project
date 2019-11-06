import Vue from 'vue'
import Router from 'vue-router'

//  路由懒加载
const Home = () =>import('@/components/Home');
const List = () =>import('@/components/List');
const Shop = () =>import('@/components/Shop');
const Command = () =>import('@/components/Command');
const Single = () =>import('@/components/Single');
const Login = () =>import('@/components/Login');
const Graphic = () =>import('@/components/Graphic');
const Manage = () =>import('@/components/Manage');
const Message = () =>import('@/components/Message');
const Rule = () =>import('@/components/Rule');
const Local = () =>import('@/components/Local');
const Error = () =>import('@/components/Error');

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        keepAlive:true,       //  保持加载后的当前状态
        requireAuth:true
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/command',
      name: 'Command',
      component: Command,
      redirect:'/command/message',
      children:[
        {
          path: 'message',
          name: 'Message',
          component: Message
        },
        {
          path: 'rule',
          name: 'Rule',
          component: Rule
        },
        {
          path: 'manage',
          name: 'Manage',
          component: Manage
        },
        {
          path: 'graphic',
          name: 'Graphic',
          component: Graphic
        },
      ]
    },
    {
      path: '/single/:id',
      name: 'Single',
      component: Single
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/local',
      name: 'Local',
      component: Local
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    },
  ]
})
