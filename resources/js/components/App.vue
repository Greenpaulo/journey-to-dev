<template>
  <div>
    <Navbar></Navbar>
    <Welcome></Welcome>
    <div class="container">
    </div>
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

</style>
