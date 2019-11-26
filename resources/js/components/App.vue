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
  background: linear-gradient(79deg, rgba(23,20,25,1) 0%, rgba(2,0,9,1) 100%);
  // background: rgb(15,2,25);
  // background: linear-gradient(79deg, rgba(15,2,25,1) 0%, rgba(2,0,9,1) 100%);
  /* background-color: #100e17; */
}

.container.my-5 {
  margin-top: 7rem !important
}

.flash__message.error {
  color:#a94442 !important;
  background-color:#f3dede !important;
  border-color:#f3dede !important;
}
</style>
