<template>
  <div id="welcome-logo">
    <LogoLarge v-if="!smallScreen" />
    <LogoSmall v-if="smallScreen" />
  </div>
</template>

<script>
import LogoLarge from './LogoLarge';
import LogoSmall from './LogoSmall';

export default {
  name: 'WelcomeLogo',
  components: {
    LogoLarge,
    LogoSmall
  },
  data () {
    return {
      smallScreen: ''
    }
  },
  created () {
    // Check the screen size
    const checkScreenSize= () => {
      if (window.innerWidth <= 639){
        this.smallScreen = true;
      } else {
        this.smallScreen = false;
      };
    }
    checkScreenSize();

    // Add event listener to check screen size on change
    let globalResizeTimer = null;

    window.addEventListener('resize', () => {
      if(globalResizeTimer != null) {
        window.clearTimeout(globalResizeTimer);
      }
        globalResizeTimer = window.setTimeout(() => {
          checkScreenSize();
        }, 200)
    });
  }
}
</script>

<style scoped>

#welcome-logo {
  margin-bottom: 2rem;
}
</style>