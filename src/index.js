import Vue from 'vue';
import root from './test.vue';
Vue.config.productionTip = false

// alert('123123')
// console.log('root', Vue)

// 创建 shadow-root 的 dom
let shadowRootDom = document.createElement('div');
shadowRootDom.setAttribute('id', 'shadow-root');
document.body.appendChild(shadowRootDom);
const shadow = document.querySelector('#shadow-root').attachShadow({mode: 'open'});

// 在 shadow-root 插入 `<div id="chrome-extension-root"></div>` 方便vue去挂载
let chromeExtensionRootDom = document.createElement('div');
chromeExtensionRootDom.setAttribute('id', 'chrome-extension-root');
shadow.appendChild(chromeExtensionRootDom);
let getChromeExtensionRootDom = shadow.querySelector('#chrome-extension-root')

// 使用vue挂载
new Vue({
  el: getChromeExtensionRootDom,
  render: (h) => h(root),
});