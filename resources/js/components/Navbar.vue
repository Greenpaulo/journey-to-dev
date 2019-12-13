<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">JourneyToDev</router-link>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        
        <ul class="navbar-nav ml-auto px-3">
          <li class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="home-link" to="/">Home</router-link>
          </li>
          <li class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="journey-link" to="/thejourney">The Journey</router-link>
          </li>
          <li class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="roadmap-link" to="roadmap">Roadmap</router-link>
          </li>
          <li class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="about-link" to="about">About</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="login-link" to="login">Login</router-link>
          </li>
          <li v-if="isLoggedIn === false" class="nav-item" @click='hideMenu'>
            <router-link class="nav-link" id="register-link" to="register">Register</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item" @click='hideMenu'>
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
      ...mapActions(['logout']),
      hideMenu() {
        const navbar = document.querySelector('.navbar-collapse');
        console.log('called', navbar)
        if(navbar.classList.contains('show')){
          navbar.classList.remove('show')
        };
      }
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
  // color: white;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(45deg, $stage9, $stage9, $stage1, $stage2, $stage3, $stage4, $stage5, $stage6, $stage7, $stage8);
  // To animate the background-image, we need to make the background size much bigger than the text, and then animate the background position
  background-size: 1000%;
  animation: bg-animation 300s infinite alternate;
}

.nav-item {
  padding: 0 0.8rem;
}

.nav-link {
  font-size: 1.1rem;
  color: white !important;
  transition: all 0.5s ease;
}

#home-link {
  &:hover {
    color: $stage1 !important;
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
    color: $stage5 !important;
  }
}

</style>