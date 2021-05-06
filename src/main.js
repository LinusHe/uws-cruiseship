import Vue from 'vue';
import App from './App.vue';
import VueWavify from 'vue-wavify';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;
Vue.use(VueWavify);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
