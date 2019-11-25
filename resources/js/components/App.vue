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
  background-color: rgb(19, 18, 18);
  /* background-color: #100e17; */
}

.flash__message.error {
  color:#a94442 !important;
  background-color:#f3dede !important;
  border-color:#f3dede !important;
}
</style>
