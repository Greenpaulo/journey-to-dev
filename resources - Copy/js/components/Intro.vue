<template>
  <section class="intro">
    <div class="intro-paragraph">
      <i class="fas fa-laptop-code fa-3x"></i>
      <p>
        Journey To Dev is a guide for learning full stack web development. It was born out of the need for a online curriculum for self-taught prospective developers.
      </p>
    </div>
      <p>
        On this site you will be able to make your own "Roadmap" to plan you own journey to becoming a web developer. 
      </p>
      <p>  
        When I was at the start of my studies I realised there was no set curriculum for learning web development, and I had to do all the research myself to build myself a roadmap. Now you can benefit from my past research and spend more time learning as you build your own roadmap and get straight to learning!
      </p>
    </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/utilities';
@import 'resources/sass/colors';

section.intro {
  margin: 4rem 0rem;
}

.intro-paragraph {
  display: flex;
}

p {
  margin: 0 1.5rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
}

i {
  color: $secondary-color;
  margin-top: 1rem;
}

</style>