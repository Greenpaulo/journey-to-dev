import axios from 'axios';
import auth from './auth';

const state = {
  roadmap: [],
  ids: []
};

const getters = {
  createIdArray: (state) => {
    const ids = [];
    state.roadmap.forEach(course => {
      ids.push(course.course_id);
    });  
    return ids;
  }
};

const mutations = {
  setRoadmap: (state, roadmap) => {
    state.roadmap = roadmap;
  },
  setIds: (state, ids) => {
    state.ids = ids;
  }
};

const actions = {
   retrieveRoadmap: ({ commit, dispatch, getters }) => {
      axios.get(`/api/roadmap/${auth.state.user_id}`)
        .then(res => {
          const roadmap = res.data;

          // Call mutation to set roadmap
          commit('setRoadmap', roadmap);

          // Call getter to create id array
          const ids = getters.createIdArray;

          // Call mutation to set ids in state
          commit('setIds', ids);

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