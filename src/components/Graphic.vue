<template>
  <div class="graphic">
    <template>
      <div id="chart"></div>
      <div id="graphic"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Graphic',
  mounted() {
    this.$chart.first_bar('chart'); //方法调用
    this.$chart.Pie_Legend('graphic'); //方法调用
  },
}
</script>

<style scoped>
  #chart {
    width: 400px;
    height: 400px;
    float: left;
    margin:0 70px;
  }
  #graphic{
    width: 400px;
    height: 400px;
    float: left;

  }
  .clearFix:before,.clearFix:after{
    content: '';
    display: block;
    clear: both;
  }
</style>
