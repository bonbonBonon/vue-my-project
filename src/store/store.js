
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    storeList:[],
    //是否登录判断
    islogin:''
  },
  mutations:{
    initStoreList(state,list){
      // state.storeList = list;
      localStorage.setItem('list',JSON.stringify(list));
      state.storeList = JSON.parse(localStorage.getItem('list'));
      console.log(list)
    },
    login(state,n){
      let islogin = JSON.parse(n);
      localStorage.setItem('islogin',JSON.stringify(islogin));
      console.log(islogin);
      state.islogin = islogin;
    }
  }
});
export default store;

