import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueInputAutowidth from 'vue-input-autowidth'

Vue.config.productionTip = false

Vue.use(VueInputAutowidth)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
