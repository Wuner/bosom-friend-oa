<!--/* eslint-disable */-->
<template>
  <div class="systemContentFilling">
    <h4 class="systemContentFillingTitle">我的报告</h4>
    <div class="systemContentFillingTable">
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        @selection-change="handleSelectionChange">
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <div class="tableSecond">
              <div class="left">
                <span>报告标题：</span>
                <el-input
                  class="leftInput"
                  clearable
                  placeholder="请输入报告标题"
                  v-model="titleVal">
                </el-input>
                <span style="color: red;margin: 0 10px">模糊查询</span>
                <el-button class="buttonSubmit" type="primary">查询</el-button>
              </div>
            </div>
          </template>
          <el-table-column
            prop="date"
            label="提交时间"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="numbering"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="title"
            label="标题"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="handleStatus"
            label="当前处理状态">
          </el-table-column>
        </el-table-column>
      </el-table>
      <div class="systemContentFillingTablePagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: '我的报告',
        dateVal: '',
        selectVal: '',
        selectSonVal: '',
        numberingVal: '',
        titleVal: '',
        options: [{
          value: '选项1',
          label: '部门1'
        }, {
          value: '选项2',
          label: '部门2'
        }, {
          value: '选项3',
          label: '部门3'
        }, {
          value: '选项4',
          label: '部门4'
        }, {
          value: '选项5',
          label: '部门5'
        }],
        sonOptions: [{
          value: '选项1',
          label: '子部门1'
        }, {
          value: '选项2',
          label: '子部门2'
        }, {
          value: '选项3',
          label: '子部门3'
        }, {
          value: '选项4',
          label: '子部门4'
        }, {
          value: '选项5',
          label: '子部门5'
        }],
        tableData: [
          {
            id: 1,
            numbering: '47264',
            handleStatus: '未处理',
            date: '2016-05-04 17:12',
            title: '123',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .systemContentFilling {
    position: absolute;
    width: 100%;

    &Title {
      margin: 10px;
    }

    &Table {
      background-color: white;
      padding: 20px;
      margin: 20px;
      border-radius: 10px;

      .tableFirst {
        display: flex;
        align-items: center;
      }

      .tableSecond {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          align-items: center;

          &Input {
            flex: 1;
          }

          .buttonSubmit {
            margin-left: 10px;
          }
        }
      }

      &Bottom {
        border: 1px solid #EBEEF5;
        border-top: 0;
        padding: 10px;
      }
      &Pagination{
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
      }
    }
  }
</style>

