<template>
  <div id="buttons">
    <router-link v-if="isLoggedIn === false" class="btn btn-info btn-lg animated fadeInLeft" to="/login" role="button">Login</router-link>
    <router-link v-if="isLoggedIn === false" class="btn btn-primary btn-lg animated fadeInUp" to="/register" role="button">Register</router-link>
    <router-link v-if="isLoggedIn === false" class="btn btn-success btn-lg animated fadeInRight" to="/thejourney" role="button">Find Out More</router-link>
    
    <router-link v-if="isLoggedIn" class="btn btn-success btn-lg animated fadeInUp" to="/roadmap" role="button">Your Roadmap</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'WelcomeButtons',
  computed: mapGetters(['isLoggedIn']),
}
</script>

<style scoped>

#buttons {
  margin-top: 3rem;
  padding-right: 5rem;
  text-align: center;

}

.btn {
  animation-delay: 11s;
  animation-duration: 2s;
  margin: 0 0.5rem;
}

</style>