<!--/* eslint-disable */-->
<template>
  <div class="systemContentFilling">
    <h4 class="systemContentFillingTitle">紧急事项</h4>
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
              <el-date-picker
                style="margin: 0 10px;"
                v-model="startVal"
                type="date"
                :editable=false
                :picker-options="pickerOptions"
                placeholder="开始执行日期">
              </el-date-picker>
              至
              <el-date-picker
                style="margin: 0 10px;width: 10em"
                v-model="endVal"
                type="date"
                :readonly="true">
              </el-date-picker>
              <span style="margin-left: 10px">报告标题：</span>
              <div>
                <el-input
                  class="leftInput"
                  clearable
                  placeholder="请输入报告标题"
                  v-model="titleVal">
                </el-input>
              </div>
            </div>
          </template>
          <el-table-column>
            <template slot="header" slot-scope="scope">
              <div class="tableSecond">
                <div class="left">
                  <span>事项编号：</span>
                  <el-input
                    class="leftInput"
                    clearable
                    placeholder="请输入事项编号"
                    v-model="numberingVal">
                  </el-input>
                  <el-select style="margin-left: 10px" v-model="selectVal" placeholder="请选择是否执行">
                    <el-option
                      v-for="item in executionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-select style="margin-left: 10px" v-model="selectVal" placeholder="请选择督办状态">
                    <el-option
                      v-for="item in executionOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <el-button class="buttonSubmit" type="primary">查询</el-button>
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
              prop="title"
              label="标题"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="department"
              label="来自">
            </el-table-column>
            <el-table-column
              prop="date"
              label="转交时间"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="curDepartment"
              label="督办意见"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="date"
              label="督办时间"
              show-overflow-tooltip>
            </el-table-column>
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
        title: '紧急事项',
        dateVal: '',
        startVal: '',
        endVal: new Date(),
        selectVal: '',
        selectSonVal: '',
        numberingVal: '',
        titleVal: '',
        pickerOptions: {
          disabledDate: (time) => {
            if (this.endVal !== "") {
              return time.getTime() > Date.now() || time.getTime() > this.endVal;
            } else {
              return time.getTime() > Date.now();
            }
          }
        },
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
        executionOptions: [{
          value: '选项1',
          label: '未执行'
        }, {
          value: '选项2',
          label: '已执行'
        }],
        tableData: [
          {
            id: 1,
            numbering: '47264',
            department: '技术部',
            date: '2016-05-04 17:12',
            title: '123',
            curDepartment: '技术部',
            grade: '0',
            result: '未通过',
            handleStatus: '未处理',
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

