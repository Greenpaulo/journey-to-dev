import axios from 'axios';
import auth from './auth';

const state = {
  roadmap: []
};

const getters = {

};

const mutations = {
  setRoadmap: (state, roadmap) => {
    state.roadmap = roadmap;
  }
};

const actions = {
   retrieveRoadmap: ({ commit, dispatch, state }) => {
      axios.get(`/api/roadmap/${auth.state.user_id}`)
        .then(res => {
          const roadmap = res.data;

          // Call mutation to set roadmap
          commit('setRoadmap', roadmap);

          // Retrieve the user's course list
          dispatch('getUserCourseList');
        });
    
        
   }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};