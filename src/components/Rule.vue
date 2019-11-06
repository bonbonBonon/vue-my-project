<template>
  <div class="rule">
    <div class="clearfix" style="margin-bottom: 20px">
      <template>
        <el-transfer v-model="value" :titles="['未完成', '已完成']" :data="data"></el-transfer>
      </template>
      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="../assets/6.jpg" class="image">
            <div style="padding: 14px;">
              <span>图片鉴赏</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
export default {
  name: 'Rule',
  data() {
    const generateData = _ => {
      const data = [];
      const items = ['吃饭', '睡觉', '工作', '跑步', '阅读', '打豆豆'];
      items.forEach((item, index) => {
        data.push({
          label: item,
          key: index,
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      currentDate: new Date(),
    };
  }
}
</script>

<style scoped>
  .rule{
    width:100%;
  }
  .el-transfer{
    float: left;
    margin-right: 25px;
  }
  .el-transfer >.el-transfer__buttons{
    padding:0 15px;
  }
  .el-row{
    width:45%;
    float: right;
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
    width: 100%;
    height: 300px;
    display: block;
  }
  .el-col-8{
    width:40%;
  }
  .clearfix:before,.clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
