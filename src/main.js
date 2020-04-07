import Vue from 'vue';
import App from './App.vue';
import router from './router'
import VueTextareaAutosize from 'vue-textarea-autosize'
import vuetify from './plugins/vuetify';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
