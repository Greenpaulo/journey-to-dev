<template>
  <div class="welcome-head">
    <div class="welcome-image">
    </div>
    <h1>Welcome To Your Journey To Dev!</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang='scss' scoped>
 
@import 'resources/sass/utilities';

.welcome-head {
  position: relative;
}

.welcome-image {
  width: 100%;
  height: 50vh;
  text-align: center;
  background-image: url('/images/code.jpg');
  opacity: 0.3;
  background-position:center;
  background-size: cover;
  background-repeat:no-repeat;

}
    
h1 {
  margin: auto;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 3rem;
}






</style>