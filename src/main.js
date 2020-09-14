import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
registerMicroApps([
  {
    name: 'vue app', // app name registered
    entry: '//localhost:8082',
    container: '#vue',
    activeRule: '/vue',
  },
  {
    name: 'react app',
    entry: { scripts: ['//localhost:8084/main.js'] },
    container: '#yourContainer2',
    activeRule: '/yourActiveRule2',
  },
]);
start({
  prefetch:false
});
