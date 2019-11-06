<template>
  <div class="command">
    <Head/>
    <div class="nav">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <router-link to="/command/message"><el-menu-item index="1-1">个人信息</el-menu-item></router-link>
            <router-link to="/command/rule"><el-menu-item index="1-2">待办事项</el-menu-item></router-link>
            <router-link to="/command/manage"><el-menu-item index="1-3">用户信息</el-menu-item></router-link>
            <router-link to="/command/graphic"><el-menu-item index="1-4">图表页</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Head from "../components/Head.vue";
  import Message from "../components/Message.vue";
export default {
  name: 'Command',
  components:{Head,Message},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .nav{
    width: 200px;
    float: left;
  }
</style>
