<template>
  <div class="login">
    <div class="login_inner">
      <h1>登录</h1>
      <el-input placeholder="请输入用户名" suffix-icon="el-icon-user-solid" v-model="user"></el-input>
      <el-input placeholder="请输入密码" suffix-icon="el-icon-lock" v-model="pass"></el-input>
      <el-button type="success" @click="submitFn">登录</el-button>
      <el-button type="info" @click="resetFn">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
          user:'',
          pass:'',
      }
  },
  methods:{
    submitFn(){
      console.log(this.user,this.pass);
      this.$axios.post('/api',{
        user:this.user,
        pass:this.pass
      }).then((res)=>{
        console.log(res);
        if(res.data === 1){
          localStorage.setItem("user", this.user);
          localStorage.setItem("pass", this.pass);
          let flag = true;
          this.$store.commit('login',flag);
          this.$router.push('/');
          console.log('登录成功');
        }else{
          this.$message({
            showClose: true,
            message: '用户名或密码错误，请重新输入',
            type: 'error'
          });
        }
      }).catch(()=>{
        this.$message({
          showClose: true,
          message: '服务器宕机了',
          type: 'error'
        });
      })
    },
    resetFn(){
      this.user='';
      this.pass='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    width: 460px;
    height: 320px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding:10px 20px;
    margin-top:170px;
  }
  h1{
    font-size: 30px;
    line-height:40px;
    text-align: center;
  }
  .el-input{
    margin:10px 0;
  }
  .el-button{
    margin:10px 20px;
  }
  .el-button--success{
    margin-left:130px;
  }
</style>
