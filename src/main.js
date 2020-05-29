import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ApiService from './services/api.service'
import './assets/scss/App.scss';

Vue.use(Notifications)

Vue.config.productionTip = false

ApiService.init(process.env.VUE_APP_ROOT_API)

new Vue({
  router,
  store,
  vuetify,
  beforeCreate() {
    this.$store.commit('initStore');
  },
  render: h => h(App)
}).$mount('#app')

store.subscribe((mutation, state) => {
  localStorage.setItem('bored-app-my-list', JSON.stringify({
    ...state,
    randomActivity: undefined,
    firstLoad: true,
  }));
});
