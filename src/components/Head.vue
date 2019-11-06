<template>
  <header>
    <nav>
      <router-link exact to="/">首页</router-link>
      <router-link exact to="/list">列表</router-link>
      <router-link exact to="/shop">购物</router-link>
      <router-link exact to="/command">管理</router-link>
      <router-link exact to="/local">位置</router-link>

      <span class="opt">
        欢迎登录：<i class="el-icon-user-solid"></i>{{this.user}}
        <button @click="exit">退出登录</button>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Head',
  data(){
      return{
        user:localStorage.getItem("user")
      }
  },
  methods:{
    exit() {
      let flag = false;
	    this.$store.commit('login',flag);
      this.$router.push("/login");
      console.log("退出登录");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    background-color: #459DF5;
    text-align: center;
    line-height: 50px;
    margin-bottom:10px;
  }
  a{
    font-size: 20px;
    padding:11px 25px;
    text-decoration: none;
    color: #fff;
  }
  .router-link-exact-active{
    background:#3388FF;
  }
  .opt{
    padding-right:70px;
    float: right;
    font-size: 20px;
    color: #fff;
  }
  .opt i{
    padding:0 10px;
  }
  .opt button{
    outline: none;
    width: 100px;
    height: 35px;
    border: none;
    color: #3388FF;
    font-size: 16px;
    border-radius: 5px;
  }
</style>
