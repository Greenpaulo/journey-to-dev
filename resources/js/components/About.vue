<template>
  <div>
    <div class="container my-5">
      <h1 class="display-4 text-center">About</h1>
      
      <section id="theApp" class="mb-5 pb-3">
        <h4 class="mt-5 mb-3">The App</h4>
        <p class="lead py-2">As a self taught developer I spent a lot of time, in the beginning, trying to figure out what to learn! Unlike a university course, there existed no curriculum for self-studying devs at home. So after spending time researching I built my own.</p>

        <p class="lead py-2">I realised that many other prospective developers could potentially benefit from my research and get straight to learning. So I built this app to share my knowledge. I hope you find it useful!</p>

        <p class="lead py-2">Much love! And good luck with your studies!</p>
      </section>

      <section id="creator" class="pb-4">
        <h4 class="mt-5 mb-3">Creator</h4>
        <p class="lead py-2">I'm Paul!</p>
        <p class="lead py-2">Check out my Github profile and other links below!</p>
        <div class="icon-group">
          <i class="far fa-envelope fa-3x pr-3"></i>
          <span class="lead contact-info">greenpaulo@yahoo.co.uk</span>
        </div>
        <div class="icon-group">
          <i class="fab fa-github fa-3x pr-3"></i>
          <a href='https://github.com/Greenpaulo' target="_blank" className="lead contact-info">https://github.com/Greenpaulo</a>
        </div>
      </section>

      <section id="credits" class="pb-4">
        <h4 class="mt-5">Credits</h4>
        <p class="lead py-2">The Stages for this curriculum are based on Brad Traversy's annual "Web Development" youtube video. Brad is a great teacher and I highly recommend his channel!</p>
        <a href="https://www.youtube.com/watch?v=UnTQVlqmDQ0" target="_blank" class="btn btn-info">Watch Brad's Video</a>
        <!-- <div class="icons-svgs">
          <h5 class="mt-4 py-3">Icons & SVGs</h5>
          <ul>
            <li class="lead"><a href="https://thenounproject.com/search/?q=road&i=1141292" target="_blank">'Road'</a> icon by Bakunetsu Kaito from the Noun Project.</li>
          </ul>
        </div> -->
      </section>

    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from './Footer';
export default {
  name: 'About',
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>

@import './resources/sass/variables';
@import './resources/sass/colors';

p.lead {
  color: darken(white, 15%);
  font-size: 1.3rem;
}

#theApp {
  border-bottom: 2px solid $stage1;
}

#creator {
  border-bottom: 2px solid $stage2;
  color: darken(white, 15%);

  a {
    text-decoration: none;
    color: darken(white, 15%);
    font-size: 1.2rem; 

    &:hover {
      color: darken(white, 30%);
    }
  }

  .icon-group {
    display: flex;
    padding: 1rem;
    align-items: center;
  }

}

#credits {
  border-bottom: 2px solid $stage3;
  color: darken(white, 15%);


  h5 {
    font-size: 1.3rem !important;
  }
}

</style>