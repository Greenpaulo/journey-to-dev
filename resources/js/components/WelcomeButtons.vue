<template>
  <div id="buttons">
    <router-link v-if="isLoggedIn === false" class="btn btn-info btn-lg animated fadeInLeft" to="/login" role="button">Login</router-link>
    <router-link v-if="isLoggedIn === false" class="btn btn-success btn-lg animated fadeInRight" to="/register" role="button">Register</router-link>
    <!-- <button v-if="isLoggedIn === false" v-scroll-to="'#website-guide'" class="btn btn-primary btn-lg animated fadeInRight">Find Out More</button> -->
    
    <router-link v-if="isLoggedIn" class="btn btn-success btn-lg animated fadeInUp" to="/roadmap" role="button">Your Roadmap</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WelcomeButtons',
  computed: mapGetters(['isLoggedIn']),
  methods: {
    scrollToSection(){   	
      const container = document.getElementById("website-guide");
      container.scrollTop = container.scrollHeight;
    }
  }
}

</script>

<style scoped>

#buttons {
  margin-top: 3rem;
  text-align: center;
}


/* Media queries */
@media(max-width: 700px){

  #buttons {
    margin-top: 2rem;
  }
}

@media(max-width: 639px) {
  .btn {
    animation-delay: 11s;
    animation-duration: 2s;
    margin: 0 0.5rem;
  }
}

@media(max-width: 420px){

  .btn-primary {
    display: none;
  }
}

@media(max-width: 420px) and (min-height: 800px) {

  #buttons {
    margin-bottom: 3rem;
  }
}

 /* Small phone landscape - e.g iphone5 */
@media(max-width: 568px) and (max-height: 320px) {

  .btn {
  animation-delay: 4s;
  animation-duration: 2s;
  margin: 0 0.5rem;
  }
}

</style>