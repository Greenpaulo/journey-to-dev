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
      <button id="login-btn" type="submit" class="btn btn-info my-3">
        <span v-if="!loggingIn">Login</span>
        <span v-if="loggingIn">
          <span class="mr-2">Logging In</span>
          <SmallLoader v-if="loggingIn"></SmallLoader>
          </span>  
      </button>
      
    </fieldset>
  </form>
  </div>
</template>

<script>
import SmallLoader from './SmallLoader';

export default {
  name: 'Login',
  components: {
    SmallLoader
  },
  data() {
    return {
      email:'',
      password:'',
      loggingIn: false
    }
  },
  methods: {
    login() {
      // Show the small loader
      this.loggingIn = true;
      


      // this.$store.dispatch('login', {
      //   username: this.email,
      //   password: this.password,
      // });
    }
  }
}
</script>

<style scoped>


</style>