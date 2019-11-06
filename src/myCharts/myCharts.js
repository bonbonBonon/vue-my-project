import echarts from 'echarts'
let install = function(Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //一个简单的示例
          first_bar: function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const optionData = {
              title: {
                text: '在Vue中使用ECharts'
              },
              tooltip: {},
              xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            };
            this.chart.setOption(optionData);
          },
          Pie_Legend:function (id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const optionData = {
              title : {
                text: '广告费用分布',
                subtext: '第一季度',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            this.chart.setOption(optionData);
          },
        }
      }
    }
  })
};
export default {
  install
}
