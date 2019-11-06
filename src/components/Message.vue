<template>
  <div class="message">
    <el-row style="float: left">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <p>用户名：{{this.user}}</p>
        <p>年龄：18岁</p>
        <p>职位：经理</p>
      </div>
    </el-row>
    <el-calendar v-model="value" style="float: left"></el-calendar>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      value: new Date(),
      user:localStorage.getItem("user")
    }
  }
}
</script>

<style scoped>
.message{
  float: left;
}
.el-calendar{
  width: 600px;
  text-align: center;
  margin-left:130px;
  background: url("../assets/bg_1.png") ;
  background-color: #91c6f9;
}
.el-row{
  width: 300px;
  height: 400px;
  background-color: #fff;
  text-align: center;
}
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
}
.clearfix:before,.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
p{
  line-height: 30px;
  font-size: 20px;
  color: #666;
  margin:10px 0;
}
</style>
