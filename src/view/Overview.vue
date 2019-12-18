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
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <div class="tableFirst">
              <el-date-picker
                v-model="dateVal"
                type="daterange"
                :editable=false
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
              <el-select v-model="selectVal" placeholder="请选择部门">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="selectSonVal" placeholder="请选择子部门">
                <el-option
                  v-for="item in sonOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="selectSonVal" placeholder="请选择报告等级">
                <el-option
                  v-for="item in sonOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="selectSonVal" placeholder="请选择处理结果">
                <el-option
                  v-for="item in sonOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
          </template>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <div class="tableSecond">
                <div class="left">
                  <span>报告编号：</span>
                  <el-input
                    class="leftInput"
                    clearable
                    placeholder="请输入报告编号"
                    v-model="numberingVal">
                  </el-input>
                  <span style="color: red;margin: 0 10px">多个编号时请用“,”隔开。</span>
                  <span>报告标题：</span>
                  <el-input
                    class="leftInput"
                    clearable
                    placeholder="请输入报告标题"
                    v-model="titleVal">
                  </el-input>
                  <el-button class="buttonSubmit" type="primary">查询</el-button>
                </div>
                <div class="right">
                  <el-tag type="danger">已超期</el-tag>
                </div>
              </div>
            </template>
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
              label="标题"
              show-overflow-tooltip>
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="onTitleClick(scope.$index, tableData)"
                  type="text"
                  size="small">
                  {{tableData[scope.$index].title}}
                </el-button>
              </template>
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
          </el-table-column>
        </el-table-column>
      </el-table>
      <div class="systemContentFillingTableBottom">
        <span>报告等级：</span>
        <el-tag>一级</el-tag>
        <span style="margin-left: 10px">处理结果：</span>
        <el-tag type="danger">未处理</el-tag>
      </div>
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
        title: '报告总览',
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
      },
      onTitleClick(index, data) {
        this.$router.push({name:'ViewReport'})
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
        justify-content: space-between;
      }

      .tableSecond {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          width: 70%;
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

