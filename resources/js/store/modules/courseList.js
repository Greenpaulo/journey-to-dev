import axios from 'axios';
import user_roadmap from './roadmap';

const state = {
  courseList: [],
  userCourseList: []
};

const getters = {
  getCoursesByStage: (state, stage) => {
    state.userCourseList.filter(course => {
      course.stage === stage
    })
    console.log(getters.getCoursesByStage(1));
  }
};


const mutations = {
  setCourseList: (state, courseList) => {
    state.courseList = courseList;
  },
  setUserCourseList: (state, userCourseList) => {
    state.userCourseList = userCourseList;
  }
};

const actions = {
  getUserCourseList: ({commit, state}) => {

    // Get the full list of courses from the API
    axios.get('/api/courses')
      .then(res => {
        // Call mutations to set the courseList state
        commit('setCourseList', res.data);
      
        // Get the roadmap from user's roadmap module
        const userRoadmap = user_roadmap.state.roadmap;

        // Get an array of the roadmap course id's
        const ids = [];
        userRoadmap.forEach(course => {
          ids.push(course.course_id);
        });

        // We need to get the courseList and filter out the courses which are in the user's roadmap (filter by course_id)
        const userCourseList = [];
        
        state.courseList.forEach((course) => {
          // For each course we need to check that the id isn't contained within the ids variable
          if (!(ids.includes(course.id))) {
            userCourseList.push(course);
          };
        });

        // Call mutation to set the userCourseList in state
        commit('setUserCourseList', userCourseList);
      })
  }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};