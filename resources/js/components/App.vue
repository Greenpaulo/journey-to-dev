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

body {
  background-color: rgb(19, 18, 18);
  /* background-color: #100e17; */
}

.text-orangered {
  color: orangered !important;
}

.text-orange {
  color: orange !important;
}

.text-purple {
  color: $purple !important;
}

.text-teal {
  color: $teal !important;
}

.text-pink {
  color: $pink !important;
}

</style>
