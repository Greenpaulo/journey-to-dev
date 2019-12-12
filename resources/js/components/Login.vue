<template>
  <div class="container my-5 animated fadeIn">
    <form @submit.prevent="login">
      <fieldset>
      <h2 class="mt-2 mb-4">Login</h2>
      <flash-message class=""></flash-message>
      <div class="form-group">
        <label for="email" class="lead text-stage2">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password" class="lead text-success">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-info my-3">
        <span v-if="!requestBeingMade">Login</span>
        <span v-if="requestBeingMade">
          <span class="mr-2">Logging In</span>
          <SmallLoader v-if="requestBeingMade"></SmallLoader>
        </span>  
      </button> 
    </fieldset>
  </form>
  </div>
</template>

<script>
import SmallLoader from './SmallLoader';
import { mapGetters } from 'vuex';

export default {
  name: 'Login',
  components: {
    SmallLoader
  },
  data() {
    return {
      email:'',
      password:''
    }
  },
  computed: mapGetters({ requestBeingMade:'isRequestBeingMade'}),
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.email,
        password: this.password,
      });
    }
  }
}
</script>

<style>
</style>