<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">JourneyToDev</router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        
        <ul class="navbar-nav ml-auto px-3">
          <li class="nav-item">
            <router-link class="nav-link" id="home-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="journey-link" to="/thejourney">The Journey</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="roadmap-link" to="roadmap">Roadmap</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" id="about-link" to="about">About</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item">
            <router-link class="nav-link" id="login-link" to="login">Login</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item">
            <router-link class="nav-link" id="register-link" to="register">Register</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" id="logout-link" href="#" @click="logout">Logout</a>
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
@import 'resources/sass/colors';
@import 'resources/sass/animations';

.navbar {
  background-color: rgba(2,0,9,1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
}

.navbar-brand {
  font-size: 1.9rem !important;
  // font-weight: bolder;
  // // background: linear-gradient(-92deg, lighten($stage1, 40%), $stage9);
  // background: radial-gradient(lighten($stage1, 30%), $stage9);
  // color: transparent;
  // -webkit-background-clip: text;
  // background-clip: text;
  // display: inline;
  // animation: hue 60s linear infinite;
  color: white;
}

.nav-link {
  font-size: 1rem;
  color: white !important;
  transition: all 0.5s ease;
}

#home-link {
  &:hover {
    color: $stage5 !important;
  }
}

#journey-link {
  &:hover {
    color: $stage2 !important;
  }
}

#roadmap-link {
  &:hover {
    color: $stage3 !important;
  }
}

#about-link {
  &:hover {
    color: $stage4 !important;
  }
}

#login-link {
  &:hover {
    color: $stage6 !important;
  }
}

#register-link {
  &:hover {
    color: $stage7 !important;
  }
}

#logout-link {
  &:hover {
    color: $stage8 !important;
  }
}


</style>