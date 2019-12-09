import axios from "axios"
import { router } from '../../app';
import Vue from 'vue';

const state = {
  token: window.localStorage.getItem('access_token') || null,
  user_id: "",
  name: "",
  requestBeingMade: false
};

const getters = {
  isLoggedIn: state => state.token ? true : false,
  getName: state => state.name,
  isRequestBeingMade: state => state.requestBeingMade
};

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUserId: (state, id) => {
    state.user_id = id
  },
  setName: (state, name) => {
    state.name = name;
  },
  setRequestBeingMade: (state, status) => {
    state.requestBeingMade = status;
  }
};

const actions = {

  register(context, credentials){
    axios.post('/api/register', {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      password_confirmation: credentials.password_confirmation
    })
    .then(res => {
      //Redirect to Login
      router.push('/login');
      //Show success message
      Vue.prototype.$flashStorage.flash('Registration successful! Please Login.', 'success',
      {
        timeout: 3000
      });
    })
    .catch(error => {
      //Show error message
      Vue.prototype.$flashStorage.flash('The email is already taken.', 'error',
        {
          timeout: 3000
        });
    })
  },

  // Retrieves a token from the API
  login({ commit}, credentials){
    // Set the request status in the state
    commit('setRequestBeingMade', true);

    axios.post('/api/login', {
      username: credentials.username,
      password: credentials.password
    })
    .then(res => {
      const token = res.data.access_token;
      
      // Call mutation to set token in state
      commit('setToken', token);

      // Set token to local storage
      window.localStorage.setItem('access_token', token);

      //Redirect to Roadmap
      router.push('/roadmap');

      // Set the request status in the state
      commit('setRequestBeingMade', false);

    })
    .catch(error => {
      console.log('error', error.response)
      Vue.prototype.$flashStorage.flash(error.response.data, 'error', 
      { 
        timeout: 3000
      });
      // Set the request status in the state
      commit('setRequestBeingMade', false);
    })
  },

  logout: ({ commit, state }) => {
    // This API is authenticated - Pass through the token in the header
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
    // Clear the access tokens in the DB
    axios.post('/api/logout')
      .then(res => {
        // Set token to null in the state
        commit('setToken', null);
        // Remove token from local storage
        window.localStorage.clear();
        // Redirect to home page
        if (window.location.pathname !== "/"){
          router.push('/');
        }
        //Refresh the browser to clear the state
        // window.location.reload();
      })
      
  },

  getUserFirstName: ({ commit }, fullname) => {
    
    var firstname = fullname.replace(/ .*/, '');

    // Call the mutation to set the name
    commit('setName', firstname);
  }
};


export default {
  state,
  getters,
  mutations,
  actions
};