import Vue from 'vue';
import root from './test.vue';
Vue.config.productionTip = false

alert('123123')
console.log('root', Vue)

new Vue({
  el: '#app',
  render: (h) => h(root),
});
