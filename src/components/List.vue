<template>
  <div class="list">
    <Head/>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="body" label="主体"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pageSize"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  import Head from "../components/Head.vue";
export default {
  name: 'List',
  components:{Head},
  data(){
    return{
        message:[],
        total:0,    //  数据的总量
        pageSize:5,     // 每页显示的条目个数
        currentPage: 1,    //  当前的页码数
    }
  },
  created(){
      console.log(this.$store.state.storeList);     //  拿到的是存在store中的数据
      /*this.$axios.get('../../static/txt.json')
        .then((res)=>{
          console.log(res.data);
          this.message = res.data;
          this.total = res.data.length;
        }).catch(()=>{
        this.$message({
          showClose:true,
          message:'数据丢失了！！',
          type:'error',
        })
      });*/
//      this.message = this.$store.state.storeList;
//      this.total = this.$store.state.storeList.length;
      this.message = JSON.parse(localStorage.getItem('list'));
      this.total = JSON.parse(localStorage.getItem('list').length);
  },
  methods:{
    handleCurrentChange(val) {
      console.log(val);
      this.currentPage = val;        //  点击分页器显示当前页码
    }
  },
  computed:{
      //  tableData 计算过后每页应该显示的页数
      tableData(){    //用前一页的页码值*每页显示的个数，后一页的页码值*每页显示的个数，
          return this.message.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table__body-wrapper{
  background: transparent;
}
</style>
