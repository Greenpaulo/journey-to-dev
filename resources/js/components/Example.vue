<template>
  <div>
    <div class="container my-5">
      <h1 class="display-4 text-center">Example Roadmap</h1>
      <p> This is the my Roadmap to give you need an example curriculum - hope it helps! </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer';

export default {
  name: 'Example',
  component: 'Footer'

}
</script>

<style lang="scss" scoped>

p {
  color: darken(white, 15%);
  font-size: 1.3rem;
}

</style>