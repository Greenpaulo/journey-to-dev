import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store';
import VueFlashMessage from 'vue-flash-message';
require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.use(VueRouter)
Vue.use(VueFlashMessage);

import App from './components/App';
import Welcome from './components/Welcome';
import TheJourney from './components/TheJourney';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';

if (process.env.MIX_ENV_MODE === 'production') {
    Vue.config.devtools = false;
    Vue.config.debug = false;
    Vue.config.silent = true; 
}

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/thejourney',
      component: TheJourney
    },
    {
      path: '/roadmap',
      component: Roadmap,
      beforeEnter(to, from, next){
        // Check vuex auth store for token
        if (store.getters.isLoggedIn){
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        // Check vuex auth store for token
        if (store.getters.isLoggedIn) {
          next('/roadmap');
        } else {
          next();
        }
      }
    },
  ],
});

// Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
});


