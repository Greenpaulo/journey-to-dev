<template>
  <div id="website-guide">
    <div class="container">
      <h3>Welcome!</h3>
      <div id="guide-info">
        <div class="icon-text-group">
          <i class="fas fa-laptop-code fa-3x text-info py-2"></i>
          <p class="px-4">Journey To Dev is a guide for learning full stack web development. It was born out of the need for a online curriculum for self-taught prospective developers.
          </p>
        </div >
        <div class="icon-text-group">
          <i class="fas fa-road fa-3x text-stage3 mt-2"></i>
          <p class="px-4">On this site you will be able to make your own "Roadmap" to plan you own journey to becoming a web developer!
          </p>
        </div>
      </div>

      <div id="page-screenshots">
        <img src="/images/screenshot-1.png" alt="roadmap page screenshot">
        <img src="/images/screenshot-2.png" alt="roadmap page screenshot2">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebsiteGuide'
}
</script>

<style lang='scss' scoped>

@import 'resources/sass/variables';
@import 'resources/sass/colors';

#website-guide {
  border-top: 2px solid #cac3c3;
  padding: 1rem 1rem 7rem 1rem;
  background-color: lighten(rgb(19, 18, 18), 5%);
}

h3 {
  text-align: center;
  margin: 3rem 0;
}

.icon-text-group {
  display: flex;
  margin: 1.7rem 0;
}

#guide-info {
  margin: 4rem 0 5rem 0;
}

img {
  height: 400px;
}

#page-screenshots {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}

img {
  box-shadow: -5px 5px 10px -2px darken($body-bg, 2%);
}

  






section#intro {
  border-bottom: 2px solid rgb(202, 195, 195);
  padding: 1rem 1rem 2rem 1rem;

  .important {
    font-weight: bolder;
    color: lighten(rgb(202, 195, 195), 30%);
  }
}

p {
  font-size: 1.4rem !important;
  line-height: 2.2rem;
  // color: rgb(202, 195, 195);
  color: darken(white, 15%);
}




// Ipad and large phone landscape
@media (max-width: 900px){

}

// Smartphones with larger screens
@media(max-width: 742px) {

  h1 {
    margin-bottom: 0 !important;
  }

  .icon-text-group {
    flex-direction: column;
    text-align: center;

    i {
      margin-bottom: 1rem;
    }
  }

  p {
  font-size: 1.2rem !important;
  line-height: 2.2rem;
  // color: rgb(202, 195, 195);
  color: darken(white, 15%);
  padding: 0 !important;
  }

  #guide-info {
    margin-bottom: 3rem;
  }

  #page-screenshots {
    flex-direction: column;
    margin-top: 1rem;
  }

  img {
    margin: 1rem ;
    max-height: 230px;
    // max-width: 80vw;
  }


}

// Smartphones with width 360px
@media (max-width: 360px){

  .card-header {

    &>h3 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  }
}

</style>