import Vue from 'vue'
import App from './App.vue'

//对生产环境的提示设置
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
