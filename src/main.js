// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/utf8-jsp/ueditor.config.js'
import '../static/utf8-jsp/ueditor.all.min.js'
import '../static/utf8-jsp/lang/zh-cn/zh-cn.js'
import '../static/utf8-jsp/ueditor.parse.min.js'
import {
  menu,
  submenu,
  menuItemGroup,
  menuItem,
  dropdown,
  dropdownMenu,
  dropdownItem,
  container,
  aside,
  main,
  input,
  button,
  table,
  tableColumn,
} from 'element-ui';
Vue
.use(menu)
.use(submenu)
.use(menuItemGroup)
.use(menuItem)
.use(dropdown)
.use(dropdownMenu)
.use(dropdownItem)
.use(aside)
.use(main)
.use(input)
.use(button)
.use(table)
.use(tableColumn)
.use(container);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
