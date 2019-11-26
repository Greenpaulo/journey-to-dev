<template>
  <section class="welcome">
    <div id="welcome-carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#welcome-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#welcome-carousel" data-slide-to="1"></li>
        <li data-target="#welcome-carousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" id="slide1">
          <img src="/images/1.jpg" class="d-block w-100" alt="laptop with code">
          <div class="carousel-caption d-none d-md-block">
            <h1 class="my-3">Welcome To Your Journey To Dev!</h1>
            <p class="lead py-4">Journey To Dev is a guide for learning full stack web development. It was born out of the need for a online curriculum for self-taught prospective developers.</p>
            <p class="lead">
              <router-link class="btn btn-info btn-lg" to="/login" role="button">Login</router-link>
              <router-link class="btn btn-primary btn-lg" to="/register" role="button">Register</router-link>
            </p>
          </div>
        </div>
        <div class="carousel-item" id="slide2">
          <img src="/images/2.jpg" class="d-block w-100" alt="road with sunset">
          <div class="carousel-caption d-none d-md-block">
            <h1 class="my-3">Build Your Roadmap</h1>
            <p class="lead py-4">Make a "Roadmap" to plan you own journey to becoming a web developer!</p>
            <p class="lead">
              <router-link class="btn btn-info btn-lg" to="/login" role="button">Login</router-link>
              <router-link class="btn btn-primary btn-lg" to="/register" role="button">Register</router-link>
            </p>
          </div>
        </div>
        <div class="carousel-item" id="slide3">
          <img src="/images/3.jpg" class="d-block w-100" alt="student with a laptop">
          <div class="carousel-caption d-none d-md-block">
            <h1 class="my-3">Get Straight To Learning!</h1>
            <p class="lead py-4">Benefit from other student's past research, build yourself a custom roadmap and get straight to learning!</p>
            <p class="lead">
              <router-link class="btn btn-info btn-lg" to="/login" role="button">Login</router-link>
              <router-link class="btn btn-primary btn-lg" to="/register" role="button">Register</router-link>
            </p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#welcome-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#welcome-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Welcome'
}
</script>

<style lang="scss" scoped>


.welcome {
  max-height: 90vh;
}

.lead {
  font-size: 1.5rem !important;
}

#welcome-carousel {
  max-height: 90%;
}

.carousel-inner {
  max-height: 93vh;
}

.carousel-caption {
  bottom: 40%;
}

#slide2 .img {
  bottom: -400px;
}


</style>

