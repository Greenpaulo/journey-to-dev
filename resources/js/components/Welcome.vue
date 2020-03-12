<template>
  <div>
    <section id="welcome-content" class=" container animated fadeIn">
      <WelcomeAnimation />
      <WelcomeLogo />
      <ScrollDown />
    </section>

    <section>
      <WebsiteGuide />
    </section>

    <Footer />
  </div>   
</template>

<script>
import WelcomeAnimation from './WelcomeAnimation';
import WelcomeLogo from './WelcomeLogo';
import ScrollDown from './ScrollDown';
import WebsiteGuide from './WebsiteGuide';
import Footer from './Footer';

export default {
  name: 'Welcome',
  components: {
    WelcomeAnimation,
    WelcomeLogo,
    ScrollDown,
    WebsiteGuide,
    Footer
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