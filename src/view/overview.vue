<!--/* eslint-disable */-->
<template>
  <div class="systemContentFilling">
    <h4 class="systemContentFillingTitle">报告总览</h4>
    <div class="systemContentFillingTable">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="numbering"
          label="编号">
        </el-table-column>
        <el-table-column
          prop="department"
          label="部门">
        </el-table-column>
        <el-table-column
          prop="date"
          label="提交时间"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="curDepartment"
          label="当前处理部门"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="print"
          label="打印"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        tableData: [
        {
          id: 1,
          numbering: '47264',
          department: '技术部',
          date: '2016-05-04 17:12',
          title: '123',
          curDepartment: '技术部',
          print: '0',
        },
        {
          id: 2,
          numbering: '47265',
          department: '技术部',
          date: '2016-05-04 17:12',
          title: '1234',
          curDepartment: '技术部',
          print: '0',
        },
        {
          id: 3,
          numbering: '47266',
          department: '技术部',
          date: '2016-05-04 17:12',
          title: '1245',
          curDepartment: '技术部',
          print: '0',
        },
        ],
      }
    },
    methods: {//方法
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
    width: 100%;
    &Title {
      margin: 10px;
    }
    &Table{
      background-color: white;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
    }
  }
</style>

