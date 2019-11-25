import axios from 'axios';
import auth from './auth';

const state = {
  roadmap: [],
  titles: [],
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
  
  // Creates an array of course_id's from the roadmap
  createTitleArray: (state) => {
    const titles = [];
    state.roadmap.forEach(course => {
      titles.push(course.title);
    });  
    return titles;
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
  setTitles: (state, titles) => {
    state.titles = titles;
  },
  setRoadmapByStage: (state, {courses, stage}) => {
    state["roadmapStage" + stage] = courses;
  },
  addToRoadmap: (state, course) => {
    state.roadmap.push(course);
  },
  removeCourseFromRoadmap: (state, id) => {
    state.roadmap = state.roadmap.filter(course => course.id !== id);
  },
  
};


const actions = {
   retrieveRoadmap: ({ commit, dispatch }) => {
    return new Promise((resolve) => {
      // This API is authenticated - Pass through the token in the header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.state.token
      axios.get(`/api/roadmap/${auth.state.user_id}`)
        .then(res => {
          const roadmap = res.data;

          // Call mutation to set roadmap
          commit('setRoadmap', roadmap);

          // Get a titles array from the roadmap
          dispatch('retrieveRoadmapTitles');

          resolve();

        });    
    })
   },

   retrieveRoadmapTitles: ({getters, commit}) => {
     // Call getter to create id array
     const titles = getters.createTitleArray;

     // Call mutation to set ids in state
     commit('setTitles', titles);
   },
  
   retrieveRoadmapByStage: ({ getters, commit }, stage) => {
    // Call getter to get the roadmapByStage array
    const courses = getters.filterRoadmapByStage(stage);

    //Call mutation to set the roadmapByStage
    commit('setRoadmapByStage', {courses, stage})
    return courses;
  },

   async addCourseToRoadmap ({commit, dispatch}, course){
     // This API is authenticated - Pass through the token in the header
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.state.token
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
        dispatch('getRoadmapTitles');
        // Update the userCourseList using the updated Ids
        dispatch('retrieveUserCourseList');
        // Update the courseList component by updating the userCoursesByStage state in courseList module
         dispatch('retrieveUserCoursesByStage', course.stage);
        // Update the corresponding Stage component to show the course now in the roadmap - so we do need access to the roadmap by stage arrays outside of the Stage component
        dispatch('getRoadmapByStage', course.stage)
    },
   
    async deleteCourseFromRoadmap ({commit, dispatch}, course){
      // This API is authenticated - Pass through the token in the header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.state.token
     // Delete the course in the roadmap table in DB
     const response = await axios.delete(`/api/roadmap/${course.id}`);

      // Fetch the updated roadmap
      dispatch('retrieveRoadmap')
        .then(res => {
          // Update the userCourseList using the updated titles
          dispatch('getUserCourseList');
          // Update the courseList component by updating the userCoursesByStage state in courseList module
          dispatch('getUserCoursesByStage', course.stage);
          // Update the corresponding Stage component
          dispatch('getRoadmapByStage', course.stage)
        })
    },
   
    // Change the position of the course in the roadmap
    moveCourse: ({state, dispatch}, [course, index, positionChange]) => {

        // Get the corresponding roadmap for the stage
        const array = state['roadmapStage' + course.stage];

        let adjacentCourseId = 0;
        let adjacentId = 0;

        // Get the adjacent course's course_id
        // We can use the roadmapStage array, clone it and pull the course out to get its id.
        if (index !== 0 && positionChange === -1) {
          // Then get the course id of the course to the left
          adjacentCourseId = array[index - 1].course_id;
          // And the id of the course to the left
          adjacentId = array[index - 1].id;

        } else if (index !== (array.length - 1) && positionChange === 1) {
          // The get the course id of the course to the right
          adjacentCourseId = array[index + 1].course_id;
          // And the id of the course to the left
          adjacentId = array[index + 1].id;
        } else {

          return;
        }

        // Now we need to swap the course id with the id of the adjacent course, and update these in the roadmap table
        // Swap the course_id's in the database
      // This API is authenticated - Pass through the token in the header
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.state.token
        axios.patch(`/api/roadmap/${course.id}`, {
          course_id: adjacentCourseId,
          completed: course.completed
        }).then(res => {
          axios.patch(`/api/roadmap/${adjacentId}`, {
            course_id: course.course_id,
            completed: course.completed
          }).then(res => {
            // Fetch an updated roadmap from the DB
            dispatch('retrieveRoadmap')
              .then(res => {
                // Call getRoadmapByStage action to get an updated stage roadmap, which will update the computed property in the stage component to update the UI
                dispatch('getRoadmapByStage', course.stage);
                dispatch('getUserCourseList');
                dispatch('getUserCoursesByStage', course.stage);
              })
          })
        })
  },

    async toggleCourseCompleted ({dispatch}, [$event, course]) {
      // Update the completed status in the DB entry
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.state.token
      await axios.patch(`/api/roadmap/${course.id}`, {
        course_id: course.course_id,
        completed: !course.completed
      });
      // Update the UI (instantly instead of waiting for API requests)
      const currentCourse = document.getElementById(course.id);
      currentCourse.classList.toggle('course-completed');
      // Fetch the new roadmap and stage roadmap to update the state
      await dispatch('retrieveRoadmap');
      dispatch('getRoadmapByStage', course.stage);
    }
};

export default {
  state,
  getters, 
  mutations, 
  actions
};