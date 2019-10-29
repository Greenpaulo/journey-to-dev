<template>
  <div class="my-5">
    <h1 class="display-3">Welcome To Your Journey To Dev!</h1>
    
    <div class="p-3">
      
      <div class="icon-text-group my-4">
        <i class="fas fa-laptop-code fa-3x text-orangered py-2"></i>
        <p class="lead px-4">Journey To Dev is a guide for learning full stack web development. It was born out of the need for a online curriculum for self-taught prospective developers.
        </p>
      </div>
      
      <div class="icon-text-group my-4">
        <i class="fas fa-road fa-3x text-orange"></i>
        <p class="lead px-4">On this site you will be able to make your own "Roadmap" to plan you own journey to becoming a web developer! 
        </p>
      </div>
      
      <div class="icon-text-group my-4">
        <i class="fas fa-graduation-cap fa-3x text-success py-2"></i>
        <p class="lead px-4">In the past, students would have to spend time trying to figure out what to learn to become a developer. Now, you can benefit from their past research, build yourself a custom roadmap and get straight to learning!
        </p>
      </div>

      <p class="lead my-5 welcome-btn">
        <a class="btn btn-info btn-lg" href="#" role="button">Login</a>
        <a class="btn btn-primary btn-lg" href="#" role="button">Register</a>
      </p>
    </div>
</div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang='scss'>
 
.welcome-btn {
  text-align: center;
}

.icon-text-group {
    display: flex;
    margin: 1.7rem 0;
}

.text-orangered {
  color: orangered;
}

.text-orange {
  color: orange;
}

.lead {
  font-size: 1.25rem !important;
}

</style>