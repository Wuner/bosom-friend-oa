<!--/* eslint-disable */-->
<template>
  <div class="systemContentFilling">
    <h4 class="systemContentFillingTitle">新增报告</h4>
    <div class="systemContentFillingEdit">
      <el-input class="input" v-model="titleVal" placeholder="请输入标题"></el-input>
      <ueditor class="ueditor" :defaultMsg=value :config=config ref="ue"></ueditor>
      <div class="button">
        <el-button class="buttonAdd" type="primary">添加附件</el-button>
        <div class="buttonRight">
          <el-button class="buttonSubmit" type="primary">确定</el-button>
          <el-button class="buttonCancel" type="danger">取消</el-button>
          <el-button class="buttonHelp" type="success">使用帮助</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ueditor from '../components/ueditor.vue';
  export default {
    components: {ueditor},
    data () {
      return {
        title: '报告提交',
        value: '',
        titleVal: '',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 360
        }
      }
    },
    methods: {//方法
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        console.log(content)
      }
    },
    created(){//渲染前执行
      document.title = this.title;
    },
    mounted(){//渲染后执行
    },
    computed: {},
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .systemContentFilling {
    &Title {
      margin: 10px;
    }
    &Edit {
      background-color: white;
      padding: 10px 20px;
      .input, .ueditor, .button {
        margin-top: 10px;
      }
      .button{
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>

