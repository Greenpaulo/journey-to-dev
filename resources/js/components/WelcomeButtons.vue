<template>
  <div id="buttons">
    <router-link v-if="isLoggedIn === false" class="btn btn-info btn-lg" to="/login" role="button">Login</router-link>
    <router-link v-if="isLoggedIn === false" class="btn btn-primary btn-lg" to="/register" role="button">Register</router-link>
    <router-link v-if="isLoggedIn === false" class="btn btn-success btn-lg" to="/thejourney" role="button">Find Out More</router-link>
    <router-link v-if="isLoggedIn" class="btn btn-success btn-lg" to="/roadmap" role="button">Get Started</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'WelcomeButtons',
  computed: { 
    ...mapGetters(['isLoggedIn'])
  },
}
</script>

<style scoped>

#buttons {
  margin-top: 3rem;
}

</style>