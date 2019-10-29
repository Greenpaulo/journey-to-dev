<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">JourneyToDev</a>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        
        <ul class="navbar-nav mr-auto px-3">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link roadmap-link" href="#">Roadmap</a>
          </li>
          <li class="nav-item">
            <a class="nav-link about-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link login-link" href="#">Login</a>
          </li>
        </ul>
        
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      onLoginClick() {
        console.log('login');
      }
    }
  }
</script>

<style lang="scss" scoped >

@import 'node_modules/bootswatch/dist/cyborg/variables';

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



</style>