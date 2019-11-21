<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">JourneyToDev</router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        
        <ul class="navbar-nav ml-auto px-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/thejourney">The Journey</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link roadmap-link" to="roadmap">Roadmap</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link about-link" to="about">About</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item">
            <router-link class="nav-link login-link" to="login">Login</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item">
            <router-link class="nav-link register-link" to="register">Register</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link logout-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Navbar',
    computed: {
      ...mapGetters(['isLoggedIn'])
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style lang="scss" scoped >

@import 'node_modules/bootswatch/dist/cyborg/variables';

.navbar-brand {
  font-size: 1.5rem !important;
}

.roadmap-link {
  &:hover {
    color: yellow !important;
    font-weight: bolder;
  }
}

.about-link {
  &:hover {
    color: #77B300 !important;
    font-weight: bolder;
  }
}

.login-link {
  &:hover {
    color: #9933CC !important;
    font-weight: bolder;
  }
}

.register-link {
  &:hover {
    color: #2A9FD6 !important;
    font-weight: bolder;
  }
}

</style>