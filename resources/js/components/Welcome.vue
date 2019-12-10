<template>
   <section id="welcome-page" class="animated fadeIn">
     <section id="welcome-content">
      <WelcomeAnimation />
      <WelcomeLogo />
     </section>
   </section>
</template>

<script>
import WelcomeAnimation from './WelcomeAnimation';
import WelcomeLogo from './WelcomeLogo';

export default {
  name: 'Welcome',
  components: {
    WelcomeAnimation,
    WelcomeLogo
  }

}
</script>

<style scoped>

#welcome-page {
  position: relative;
  background: url("/images/1.jpg") cover no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#welcome-content {
  margin-bottom: 10rem;
}


</style>