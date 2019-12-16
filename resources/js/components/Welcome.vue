<template>
  <div class="container">
    <section id="welcome-content">
      <WelcomeAnimation />
      <WelcomeLogo />
    </section>
  </div>   
</template>

<script>
import WelcomeAnimation from './WelcomeAnimation';
import WelcomeLogo from './WelcomeLogo';

export default {
  name: 'Welcome',
  components: {
    WelcomeAnimation,
    WelcomeLogo
  },
  mounted(){
    window.scrollTo(0, 0);
  }

}
</script>

<style scoped>

#welcome-content {
  /* margin-bottom: 2rem; */
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