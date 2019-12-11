<template>
   <!-- <section id="welcome-page" class="animated fadeIn"> -->
  <div class="container">
    <section id="welcome-content">
      <WelcomeAnimation />
      <WelcomeLogo />
    </section>
  </div>   
   <!-- </section> -->
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
  /* position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

#welcome-content {
  margin-bottom: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Media queries
Ipad */
@media (max-width: 970px){
  
  #welcome-content {
    text-align: center;
  }
}


</style>