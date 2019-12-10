<template>
   <section id="welcome-page" class="animated fadeIn">
     <WelcomeAnimation />
     <WelcomeLogo />
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


</style>