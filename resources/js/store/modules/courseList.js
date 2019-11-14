import axios from 'axios';
import auth from './auth';
import user_roadmap from './roadmap';

const state = {
  courseList: [],
  userCourseList: [],
  coursesByStage: []
};

const getters = {

  getCourseList: state => state.courseList,

  // Takes the userCourseList from state and filters by stage
  filterCoursesByStage: (state) => (stage) => {
    const coursesByStage = state.userCourseList.filter(course => course.stage === stage);
    return coursesByStage;
  },

  // Takes the CourseList state and the roadmap ids's state and returns a userCourseList
  createUserCourseList: (state) => {
    // Get the roadmap ids from the roadmap module
    const ids = user_roadmap.state.ids;

    // Get the courseList and filter out the courses by course_id, which are in the user's roadmap
    const userCourseList = state.courseList.filter(course => !(ids.includes(course.id)));
    
    return userCourseList;
  }
};


const mutations = {
  setCourseList: (state, courseList) => {
    state.courseList = courseList;
  },
  setUserCourseList: (state, userCourseList) => {
    state.userCourseList = userCourseList;
  },
  setCoursesByStage: (state, courses) => {
    state.coursesByStage = courses;
  }
};

const actions = {
  // Retrieves all user data
  loadInitialUserData :({ commit, dispatch }) => {
    console.log('userdata action fired');
    // Retrieve the user's id
    axios({ method: 'get', url: '/api/user', headers: { Authorization: `Bearer ${auth.state.token}` } })
      .then(res => {
        const id = res.data.id;

        // Call mutation to set user_id in state
        commit('setUserId', id);

        //Retrieve the user's roadmap   - show a 'loading' spinner in UI
        dispatch('retrieveRoadmap');

      });
  },

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
  },

  getCoursesByStage: ({ commit, getters}, stage) => {
    // Call getter to get the coursesByStage array
    const courses = getters.filterCoursesByStage(stage);

    // Call mutation to set the coursesByStage state
    commit('setCoursesByStage', courses);
  }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};