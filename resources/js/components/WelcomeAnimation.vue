<template>
  <div id="animation-container">
    <AnimationLarge v-if="!smallScreen" />
    <AnimationSmall v-if="smallScreen" />
  </div>
</template>

<script>
import AnimationLarge from './AnimationLarge';
import AnimationSmall from './AnimationSmall';

export default {
  name: 'WelcomeAnimation',
  components: {
    AnimationLarge,
    AnimationSmall
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

@media (max-width: 639px){

  #animation-container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
    width: 300px;
  }
}

</style>