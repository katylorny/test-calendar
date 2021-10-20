import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VCalendar from 'v-calendar';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)

Vue.use(VCalendar, {});
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
