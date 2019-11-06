<template>
  <div>
    <h1>详情信息</h1>
    <!--<img src="" alt="">-->
    <!--使用v-bind动态绑定图片路径时，需要使用import引入图片路径-->
    <div class="pic">
      <template>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide><img src="../../src/assets/2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../src/assets/3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../src/assets/4.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../src/assets/5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="../../src/assets/6.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </template>
    </div>

    <div class="single_box">
      <h3>{{message.title}}</h3>
      <article>{{message.body}}</article>
    </div>
  </div>
</template>

<script>
//  import oSrc from '';
export default {
  name: 'Single',
  data(){
      return{
        message:{},
        id:this.$route.params.id,
        swiperOption: {
          autoplay:2000,
          loop:true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          autoplayDisableOnInteraction : false,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next'
        },
      };
  },
  created(){
      console.log(this.$route.params.id);
      this.$axios.get('http://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then((res)=>{
          console.log(res.data);
          this.message = res.data;
       }).catch(()=> {
        this.$message({
          showClose: true,
          message: '数据丢失了！！',
          type: 'error',
        })
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    width: 100%;
    height: 80px;
    text-align: center;
    line-height: 80px;
    font-size: 30px;
    font-weight: 700;
    background-color: #ccc;
  }
  .single_box{
    background-color: #ccc;
    margin:10px 0;
    text-align: center;
    padding:10px 20px;
  }
  h3{
    font-size: 24px;
    line-height: 30px;
    margin-bottom:10px;
  }
  article{
    font-size: 16px;
    line-height: 20px;
  }
  .pic{
    width: 500px;
    height: 400px;
    margin: 10px auto;
  }
  img{
    width: 500px;
    height: 400px;
  }
</style>
