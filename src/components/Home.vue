<template>
  <div class="home">
    <Head/>
    <h1>新闻总览</h1>
    <div class="new_box" v-for="item of list" :key="item.id">
      <router-link :to="'/single/'+item.id">
        <h3 v-change-color:ita="{font:'20px'}" >{{item.title | upper}}</h3>
      </router-link>
      <article>{{item.body}}</article>
    </div>
    <div class="load" @click="add">加载更多</div>
  </div>
</template>

<script>
  import Head from "../components/Head.vue";
  export default {
    name: 'Home',
    components:{Head},
    data () {
      return {
        list:[],
        num:0,
      }
    },
    created(){      //  钩子函数，初始化数据完成,可以拿到数据了
//      console.log(this.$store.state.storeList);
      this.$axios.get('../../static/txt.json')
        .then((res)=>{
          this.list = res.data.slice(0,10);
          this.$store.commit("initStoreList",res.data);
        }).catch(()=>{
        this.$message({
          showClose:true,
          message:'数据丢失了！！',
          type:'error',
        })
      });
    },
    methods:{
      add(){
        if(this.num<10){
          this.$axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res)=>{
              console.log(res.data);
              let data = res.data.slice(5+this.num,10+this.num);
              console.log(data);
              this.list = this.list.concat(data);
            }).catch(()=>{
            this.$message({
              showClose:true,
              message:'加载成功',
            })
          });
          this.num += 5;
        }else{
          this.$message({
            showClose:true,
            message:'没有更多数据了',
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    text-align: center;
  }
  h1{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    color: #2689ED;
    margin-bottom:10px;
  }
  .new_box{
    height: auto;
    background-color: #ccc;
    margin-bottom:10px;
    padding: 10px 20px;
  }
  h3{
    margin-bottom: 5px;
    font-weight: 700;
  }
  article{
    font-size: 16px;
    text-align: left;
    line-height: 20px;
  }
  .load{
    width: 100px;
    height: 30px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    background-color: #54b6ff;
    margin: 0 auto;
    cursor: pointer;
  }
</style>
