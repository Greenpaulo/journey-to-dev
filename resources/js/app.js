import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store';

Vue.use(VueRouter)

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
      component: Roadmap
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
  ],
});

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store
});


