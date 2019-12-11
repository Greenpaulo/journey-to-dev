<template>
  <AnimationSVG />
</template>

<script>
import AnimationSVG from './AnimationSVG';

export default {
  name: 'AnimationSmall',
  components: {
    AnimationSVG
  },
  mounted() {
    // Grab the elements from the DOM
    // Idea SVG
    const head = document.getElementById('head');
    const smallCircle = document.getElementById('small-circle');
    const bigCircle = document.getElementById('big-circle');
    const cloud = document.getElementById('cloud');

    //First Arrow SVG
    const circle1 = document.getElementById('circle-1');
    const circle2 = document.getElementById('circle-2');
    const circle3 = document.getElementById('circle-3');
    const arrowHead1 = document.getElementById('arrow-head-1');

    // Study SVG
    const studyMain = document.getElementById('study-main');
    const lightRays = document.getElementById('light-rays');

    //Second Arrow SVG
    const circle4 = document.getElementById('circle-4');
    const circle5 = document.getElementById('circle-5');
    const circle6 = document.getElementById('circle-6');
    const arrowHead2 = document.getElementById('arrow-head-2');

    // Job SVG
    const handshake = document.getElementById('handshake');
    const jobComplete = document.getElementById('job-complete');
    
    // Initialise the gsap timeline
    const tl = gsap.timeline();

    const idea = document.getElementById('idea');
  
    tl.from(head, { y: -100, duration: 1, opacity: 0});
    tl.to(smallCircle, { opacity: 1 , duration: 0.5});
    tl.to(bigCircle, { opacity: 1 , duration: 0.5});
    tl.to(cloud, { opacity: 1 , duration: 0.5});
    tl.to(idea, {opacity:0, duration: 1});

    // Study
    tl.from(studyMain, { y: -50, duration: 1, opacity: 0});
    tl.to(lightRays, { opacity: 1 , duration: 1});
    tl.to('#study', { opacity: 0 , duration: 1});

    // Handshake
    tl.from(handshake, { y: -100, duration: 1.5, opacity: 0});
    tl.to(jobComplete, { opacity: 1, duration: 1});
  }
}
</script>

<style lang="scss" scoped>

</style>