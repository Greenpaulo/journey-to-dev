<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  
  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">

@import 'resources/sass/variables';
@import 'resources/sass/colors';

body {
  background: rgb(23,20,25);
}

.container.my-5 {
  margin-top: 7rem !important
}

.flash__message.error {
  color:#a94442 !important;
  background-color:#f3dede !important;
  border-color:#f3dede !important;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1150px;
  }
}
</style>
