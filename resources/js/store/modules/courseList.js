import axios from 'axios';
import user_roadmap from './roadmap';

const state = {
  courseList: [],
  userCourseList: []
};

const getters = {

  getCoursesByStage: (state) => (stage) => {
    state.userCourseList.filter(course => {
      course.stage === stage
    })
  },

  // Takes the CourseList state and the roadmap ids's state and returns a userCourseList
  createUserCourseList: (state) => {
    // Get the roadmap ids from the roadmap module
    const ids = user_roadmap.state.ids;

    // We need to get the courseList and filter out the courses which are in the user's roadmap (filter by course_id) 
    const userCourseList = [];

    state.courseList.forEach((course) => {
      // For each course we need to check that the id isn't contained within the ids variable
      if (!(ids.includes(course.id))) {
        userCourseList.push(course);
      };
    });
    
    return userCourseList;
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

  // Makes an API to get the original course list and sets the inital state for courseList and userCourseList 
  retrieveCourseList: ({ commit, dispatch }) => {

    // Get the full list of courses from the API
    axios.get('/api/courses')
      .then(res => {
        // Call mutations to set the courseList state
        commit('setCourseList', res.data);

        // Call action to set the initial userCourseList
        dispatch('getUserCourseList');
      })
  },
  
  // After login - any intial action to get the userCourseList can be done here
  getUserCourseList: ({ commit, getters }) => {
    // Call a getter to create the userCourseList
    const userCourseList = getters.createUserCourseList;

    // Call mutation to set the userCourseList in state
    commit('setUserCourseList', userCourseList);
  }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};