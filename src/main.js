import Vue from 'vue'
import App from './App.vue'

/* IMPORT VUE ROUTER AND DECLARE ROUTES; */
import VueRouter from 'vue-router'
import routes from './config/router';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* vuex */
import { store }  from './store/store';

//IMPORT BOOTSTRAP TO USE GRID;
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/main.scss';

//USE ROUTER
Vue.use(VueRouter);
const router = new VueRouter({modes: 'history', routes});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
