<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './Navbar';
  import Welcome from './Welcome';
  import Intro from './Intro'
  
  export default {
    name: "App",
    components: {
      Navbar,
      Welcome,
      Intro
    }
  }
</script>

<style>

body {
  background-color: rgb(19, 18, 18);
}

</style>
