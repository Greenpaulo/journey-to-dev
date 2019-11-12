import axios from "axios"
import { router } from '../../app';
import roadmap from './roadmap';

const state = {
  token: window.localStorage.getItem('access_token') || null,
  user_id: ""
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUserId: (state, id) => {
    state.user_id = id
  }
};

const actions = {

  register(context, credentials){
    console.log(credentials);
  },

  // Retrieves a token from the API
  login({ commit, dispatch }, credentials){
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

    })
    .catch(error => {
      console.log(error)
    })
  },

  retrieveUserId: ({ commit }) => {
    axios.get('/user')
      .then(res => console.log(res.data));
  },

  logout: ({ commit }) => {
    // Set token to null in the state
    commit('setToken', null);
    // Remove token from local storage
    window.localStorage.clear();
    // Redirect to home page
    if (window.location.pathname !== "/"){
      router.push('/');
    }
  }
};


export default {
  state,
  getters,
  mutations,
  actions
};