<template>
  <div class="shop">
    <Head/>
    <template>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="id" label="序号" width="150"></el-table-column>
        <el-table-column prop="brand" label="名称" width="180"></el-table-column>
        <el-table-column prop="" label="图例" width="180">
          <template slot-scope="scope">
            <img :src="scope.row.src"/>
          </template>
        </el-table-column>
        <el-table-column prop="single" label="型号" width="180"></el-table-column>
        <el-table-column prop="price" label="价格" width="150">
          <template slot-scope="scope">
            <h3>{{scope.row.price}}</h3>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="选取">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" :min="0"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="subtotal" label="小计" width="180">
          <template slot-scope="scope">
            <h3>{{scope.row.num*scope.row.price}}</h3>
          </template>
        </el-table-column>
      </el-table>
      <p>总价：{{totalPrice()}}元</p>
    </template>
  </div>
</template>

<script>
  import Head from "../components/Head.vue";
export default {
  name: 'Shop',
  components:{Head},
  data() {
    return {
      list: [],
    }
  },
  created(){
    this.$axios.get('../../static/shop.json')
      .then((res)=>{
        console.log(res.data);
        this.list = res.data;
      }).catch(()=>{
      this.list({
        showClose:true,
        list:'数据丢失了！！',
        type:'error',
      })
    });
  },
  methods: {
    totalPrice() {
      let totalP = 0;
      let len = this.list.length;
      for (let i = 0; i < len; i++) {
        totalP += this.list[i].price * this.list[i].num;
      }
      return totalP;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
  p{
    height: 80px;
    font-size: 30px;
    font-weight: 700;
    line-height: 80px;
    padding-right:50px;
    text-align: right;
  }
</style>
