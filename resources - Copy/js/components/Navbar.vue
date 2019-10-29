<template>
  <div>
    <nav class="navbar">
        <a href="/" class="nav-brand p-1">JourneyToDev</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a class="nav-link" href="#">Roadmap</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="onLoginClick">Login</a>
          </li>
        </ul>
    </nav>
  </div>
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

<style lang="scss" scoped>

@import 'resources/sass/colors';

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(to left, lighten($primary-color, 5%), lighten($primary-color, 20%));
  border-bottom: 3px solid $secondary-color;


  .nav-brand {
    font-size: 1.75rem;
    margin-left: 3rem;

    .nav-brand :hover {
      font-weight: bold;
      color: $secondary-color;
    }
  }

  .nav-menu {
    display: flex;
    list-style: none;
    font-size: 1.1rem;
    margin-right: 3rem;
    padding: 1.5rem;

    .nav-item {
      text-decoration: none;
      padding: 0 1rem;

      :hover {
        font-weight: bold;
        color: $secondary-color;
      }
    }
  }
}
</style>