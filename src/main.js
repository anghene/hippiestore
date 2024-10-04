import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css' // Ensure Tailwind CSS is linked

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');
