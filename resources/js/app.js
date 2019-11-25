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
import Register from './components/Register';
import Login from './components/Login';

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

// Navigation guard
// router.beforeEach((to, from, next) => {
//   if (to.fullPath === '/roadmap') {
//     if (!store.state.token) {
//       next('/login');
//     }
//   }
//   next();
// });

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
});


