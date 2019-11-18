import axios from 'axios';
import auth from './auth';

const state = {
  roadmap: [],
  ids: [],
  roadmapStage1: [], 
  roadmapStage2: [],
  roadmapStage3: [], 
  roadmapStage4: [], 
  roadmapStage5: [], 
  roadmapStage6: [], 
  roadmapStage7: [], 
  roadmapStage8: [], 
  roadmapStage9: [], 
};

const getters = {
  getRoadmap: state => state.roadmap,
  getRoadmapByStage: (state) => (stage) => state["roadmapStage" + stage],
  
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
  setRoadmapByStage: (state, {courses, stage}) => {
    switch (stage) {
      case 1: 
        state.roadmapStage1 = courses;
        break;
      case 2: 
        state.roadmapStage2 = courses;
        break;
      case 3: 
        state.roadmapStage3 = courses;
        break;
      case 4: 
        state.roadmapStage4 = courses;
        break;
      case 5: 
        state.roadmapStage5 = courses;
        break;
      case 6: 
        state.roadmapStage6 = courses;
        break;
      case 7: 
        state.roadmapStage7 = courses;
        break;
      case 8: 
        state.roadmapStage8 = courses;
        break;
      case 9: 
        state.roadmapStage9 = courses;
        break;
    }
  },
  addToRoadmap: (state, course) => {
    state.roadmap.push(course);
  }
};

const actions = {
   retrieveRoadmap: ({ commit, dispatch, getters }) => {
      axios.get(`/api/roadmap/${auth.state.user_id}`)
        .then(res => {
          const roadmap = res.data;

          // Call mutation to set roadmap
          commit('setRoadmap', roadmap);

          // Get an Id array from the roadmap
          dispatch('getRoadmapIds');

          // Retrieve the course list from the API and create a user course list
          dispatch('retrieveCourseList');
        });    
   },
   getRoadmapIds: ({getters, commit}) => {
     // Call getter to create id array
     const ids = getters.createIdArray;

     // Call mutation to set ids in state
     commit('setIds', ids);
   },
  
   getRoadmapByStage: ({ getters, commit }, stage) => {
    // Call getter to get the roadmapByStage array
    const courses = getters.filterRoadmapByStage(stage);

    //Call mutation to set the roadmapByStage
    commit('setRoadmapByStage', {courses, stage})
    return courses;
  },

   async addCourseToRoadmap ({commit, dispatch}, course){
     // Add the course to the roadmap table in DB
     const response = await axios.post('/api/roadmap', {
       user_id: auth.state.user_id,
       course_id: course.id,
       stage: course.stage,
       title: course.title,
       creator: course.creator,
       url: course.url,
       hours: course.hours,
       completed: false
     });

     const newCourse = response.data;
      
        // Update the roadmap in state
        commit('addToRoadmap', newCourse);
        // Update the roadmap ID array
        dispatch('getRoadmapIds');
        // Update the userCourseList using the updated Ids
        dispatch('getUserCourseList');
        // Update the courseList component by updating the userCoursesByStage state in courseList module
         dispatch('getUserCoursesByStage', course.stage);
        // Update the corresponding Stage component to show the course now in the roadmap - so we do need access to the roadmap by stage arrays outside of the Stage component
        dispatch('getRoadmapByStage', course.stage)
       

    },
   
};

export default {
  state,
  getters, 
  mutations, 
  actions
};