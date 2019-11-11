import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';
import courseList from './modules/courseList';
import roadmap from './modules/roadmap';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    courseList, 
    roadmap
  }
});