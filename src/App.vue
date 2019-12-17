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
                <span slot="title">报告管理</span>
              </template>
              <el-menu-item index="/">报告提交</el-menu-item>
              <el-menu-item index="/overview">报告总览</el-menu-item>
              <el-menu-item index="1-3">报告审批</el-menu-item>
              <el-menu-item index="1-4">报告执行</el-menu-item>
              <el-menu-item index="1-5">报告拟办</el-menu-item>
              <el-menu-item index="1-6">我的报告</el-menu-item>
              <el-menu-item index="1-7">我的暂缓</el-menu-item>
              <el-menu-item index="1-8">紧急事项</el-menu-item>
              <el-menu-item index="1-9">意见提交</el-menu-item>
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
        leftWidth: '200px'
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
        left: 0;
        min-height: ~"calc(100vh - 80px)";
        background-color: #24292e;
      }
      &Info{
        position: absolute;
        right: 0;
      }
    }
  }
</style>
