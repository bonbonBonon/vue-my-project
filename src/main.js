// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/store'
import 'swiper/dist/css/swiper.css'
import myCharts from '../src/myCharts/myCharts'
Vue.use(myCharts);

Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
//  在自定义指令binding.arg,在指令插入时写入arg属性，可以在指令的函数中进行判断操作，可以提高指令的复用率
//  共有的属性可以和写，每个节点不同的指令可以放在arg的判断中
Vue.directive('changeColor',function (el,binding) {
  console.log(Math.random().toString(16));
  console.log(binding.arg);
  el.style.color = '#'+ Math.random().toString(16).slice(2,8);
  el.style.fontSize = binding.value.font;
  if(binding.arg === "ita"){
    el.style.fontStyle = 'italic';
  }

});

Vue.filter('upper',function (val) {
  return val.toUpperCase();
});


// 全局前置守卫,进行全局拦截,所有页面均不能查看
router.beforeEach((to, from, next) => {
  //alert('请您先登录后再查看');  //to要进入的路由页面 from要离开的路由页面
  //next();   //可以进行查看页面,不再进行拦截,类似于通行证
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('islogin'))) { //判断本地是否存在access_token
      next();
    }else {
      alert('请先登录后再访问');
      next('/login')
    }
  }else{
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath == "/login"){
    if(JSON.parse(localStorage.getItem('islogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
