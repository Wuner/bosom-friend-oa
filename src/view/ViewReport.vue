<template>
  <div class="systemContentFilling">
    <h4 class="systemContentFillingTitle">意见管理</h4>
    <div class="systemContentFillingFrom">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item>
          <el-button size="small" type="primary" @click="onAgree">同意</el-button>
          <span style="margin: 0 10px;">请</span>
          <el-select size="small" v-model="nameVal" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select style="width: 8em" size="small" v-model="statusVal" placeholder="请选择">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button size="small" type="primary" @click="onAgree">填写意见</el-button>
          <el-button size="small" type="primary" @click="onAgree">清除意见</el-button>
        </el-form-item>
        <el-form-item label="部门意见">
          <el-input type="textarea" v-model="form.opinion"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交意见并转办公室</el-button>
          <el-button>退回并重新提交</el-button>
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="报告编号">
          <el-input readonly value="请输入内容"></el-input>
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="来自">
          技术部（张三）
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="报告等级">
          12
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="报告结果">
          处理中
        </el-form-item>
        <el-form-item class="borderTop" label="">
          <el-input type="textarea" v-model="form.opinion"></el-input>
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="备注">
          12
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="文档提交时间">
          2016-05-04 17:12
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="批示时间">
          2016-05-04 17:12
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="附件">
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="学院原始报告">
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="标题">
          1313
        </el-form-item>
        <el-form-item class="borderTop" size="small" label="正文">
          31312
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        title: '查看报告',
        nameVal: '',
        statusVal: '',
        options: [{
          value: '选项1',
          label: '张三'
        }, {
          value: '选项2',
          label: '李四'
        }],
        statusOptions: [{
          value: '选项1',
          label: '批示'
        }, {
          value: '选项2',
          label: '不批示'
        }],
        form: {
          opinion: ''
        },
      }
    },
    methods: {//方法
      onAgree() {

      },

      onSubmit() {

      },

    },
    created() {//渲染前执行
      document.title = this.title;
    },
    mounted() {//渲染后执行
    },
    computed: {},
  }
</script>
<style scoped lang="less">
  .systemContentFilling {
    position: absolute;
    width: 100%;

    &Title {
      margin: 10px;
    }

    &From {
      background-color: white;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;

      .borderTop {
        margin-bottom: 0;
        padding: 10px 0;
        border-top: 1px solid #f4f4f4;
      }
    }
  }
</style>
<style>
  .el-form-item__label{
    padding-right: 40px;
  }
</style>
