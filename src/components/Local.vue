<template>
  <div class="local">
    <Head></Head>
    <div id="allmap" ref="allmap"></div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Head from '../components/Head'
  export default{
    name: 'Local',
    components:{Head},
    methods:{
      map(){
        let map =new BMap.Map(this.$refs.allmap); // 创建Map实例
        let point = new BMap.Point(116.566956, 39.875176);
        // 创建点坐标
        map.centerAndZoom(point, 15);
        // 初始化地图，设置中心点坐标和地图级别
        let marker = new BMap.Marker(point);        // 创建标注
        map.addOverlay(marker);                     // 将标注添加到地图中
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
        map.addControl(new BMap.MapTypeControl({  //添加地图类型控件
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        let sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
          scale: 0.6,//图标缩放大小
          strokeColor:'#fff',//设置矢量图标的线填充颜色
          strokeWeight: '2',//设置线宽
        });
        map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      }
    },
    mounted(){
      this.map()
    }
  }
</script>

<style>
  #allmap{
    height:400px;
    width: 600px;
    margin: 30px auto;
  }
</style>
