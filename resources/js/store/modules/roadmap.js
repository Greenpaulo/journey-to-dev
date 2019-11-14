import axios from 'axios';
import auth from './auth';

const state = {
  roadmap: [],
  ids: []
};

const getters = {
  getRoadmap: state => state.roadmap,
  
  createIdArray: (state) => {
    const ids = [];
    state.roadmap.forEach(course => {
      ids.push(course.course_id);
    });  
    return ids;
  },

  // Takes the roadmap from state and filters by stage
  filterRoadmapByStage: (state) => (stage) => {
    const roadmapByStage = state.roadmap.filter(course => course.stage === stage);
    return roadmapByStage;
  },
};

const mutations = {
  setRoadmap: (state, roadmap) => {
    state.roadmap = roadmap;
  },
  setIds: (state, ids) => {
    state.ids = ids;
  },
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

          // Retrieve the course list from the API and create a user course list
          dispatch('retrieveCourseList');
        });    
   },
  
   getRoadmapByStage: ({ getters }, stage) => {
    // Call getter to get the roadmapByStage array
    const courses = getters.filterRoadmapByStage(stage);
    return courses;
  }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};