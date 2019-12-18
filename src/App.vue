<template>
  <div id="app">
    <div class="system">
      <div class="systemNav">
        <div class="systemNavInfo">
          <i v-if="isCollapse" @click="isCollapse = !isCollapse;leftWidth='200px'" class="el-icon-s-fold"></i>
          <i v-if="!isCollapse" @click="isCollapse = !isCollapse;leftWidth='65px'" class="el-icon-s-unfold"></i>
          <h3>OA网络办公室系统</h3>
        </div>
        <div class="systemNavPersonInfo">
          <el-button class="buttonSubmit" type="danger" size="small">待办事项</el-button>
          <i class="el-icon-s-home"></i>
          <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="systemContent">
        <div class="systemContentMenu">
          <el-menu default-active="/" :router="true" background-color="#24292e" text-color="#fff" class="el-menu-vertical-demo"
                   @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span slot="title">报告管理</span>
              </template>
              <el-menu-item index="/">
                <i class="el-icon-edit-outline"></i>
                报告提交
              </el-menu-item>
              <el-menu-item index="/overview">
                <i class="el-icon-view"></i>
                报告总览
              </el-menu-item>
              <el-menu-item index="/approval">
                <i class="el-icon-s-check"></i>
                报告审批
              </el-menu-item>
              <el-menu-item index="/execution">
                <i class="el-icon-caret-right"></i>
                报告执行
              </el-menu-item>
              <el-menu-item index="/proposed">
                <i class="el-icon-mouse"></i>
                报告拟办
              </el-menu-item>
              <el-menu-item index="/My">
                <i class="el-icon-user-solid"></i>
                我的报告
              </el-menu-item>
              <el-menu-item index="/MyHold">
                <i class="el-icon-s-flag"></i>
                我的暂缓
              </el-menu-item>
              <el-menu-item index="/UrgentMatter">
                <i class="el-icon-warning"></i>
                紧急事项
              </el-menu-item>
              <el-menu-item index="/Opinion">
                <i class="el-icon-message"></i>
                意见提交
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <div class="systemContentInfo" :style="{left:leftWidth}">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        title: 'OA网络办公室系统',
        isCollapse: true,
        leftWidth: '65px'
      }
    },
    methods: {//方法
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
    mounted() {
      document.title = this.title;
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .system {
    &Nav {
      width: 100%;
      height: 80px;
      background-color: #24292e;
      display: flex;
      justify-content: space-between;
      &Info {
        display: flex;
        align-items: center;
        margin-left: 20px;
        i {
          color: white;
          font-size: 20px;
        }
        h3 {
          color: white;
          margin-left: 5px;
        }
      }
      &PersonInfo {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .buttonSubmit{
          margin-right: 10px;
        }
        .el-icon-s-home {
          color: white;
          margin-right: 10px;
        }
        .el-dropdown-link {
          color: white;
          cursor: pointer;
        }
      }
    }
    &Content {
      width: 100%;
      background-color: #f4f4f4;
      &Menu {
        position: absolute;
        top: 80px;
        bottom: 0;
        left: 0;
        background-color: #24292e;
        overflow-y: scroll;
      }
      &Info{
        position: absolute;
        top: 80px;
        bottom: 0;
        right: 0;
        background-color: #f4f4f4;
        overflow-y: scroll;
      }
    }
  }
</style>
