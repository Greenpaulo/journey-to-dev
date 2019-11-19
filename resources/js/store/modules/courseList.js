import axios from 'axios';
import auth from './auth';
import user_roadmap from './roadmap';

const state = {
  courseList: [],
  userCourseList: [],
  userCoursesByStage: [],
};

const getters = {

  getCourseList: state => state.courseList,
  retrieveUserCourseList: state => state.userCourseList,
  retrieveUserCoursesByStage: state => state.userCoursesByStage,

  // Takes the userCourseList from state and filters by stage
  filterUserCoursesByStage: (state) => (stage) => {
    const userCoursesByStage = state.userCourseList.filter(course => course.stage === stage);
    return userCoursesByStage;
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
  setUserCoursesByStage: (state, courses) => {
    state.userCoursesByStage = courses;
  }
};

const actions = {
  // Retrieves all user data
  loadInitialUserData: ({ commit, dispatch }) => {
    // Retrieve the user's id
    axios({ method: 'get', url: '/api/user', headers: { Authorization: `Bearer ${auth.state.token}` } })
      .then(res => {
        const id = res.data.id;

        // Call mutation to set user_id in state
        commit('setUserId', id);

        //Retrieve the user's roadmap   - show a 'loading' spinner in UI
        dispatch('retrieveRoadmap');

        // Retrieve the course list from the API and create a user course list
        dispatch('retrieveCourseList');

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

  // After login - any subsequent action to get the userCourseList can be done here
  getUserCourseList: ({ commit, getters }) => {
    // Call a getter to create the userCourseList
    const userCourseList = getters.createUserCourseList;

    // Call mutation to set the userCourseList in state
    commit('setUserCourseList', userCourseList);
  },

  getUserCoursesByStage: ({ commit, getters }, stage) => {
    // Call getter to get the coursesByStage array
    const courses = getters.filterUserCoursesByStage(stage);

    // Call mutation to set the coursesByStage state
    commit('setUserCoursesByStage', courses);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};