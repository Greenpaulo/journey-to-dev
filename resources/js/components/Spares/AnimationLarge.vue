<template>
  <AnimationSVG />
</template>

<script>
import AnimationSVG from './AnimationSVG';

export default {
  name: 'AnimationLarge',
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

    // Idea
    tl.from(head, { y: -100, duration: 1, opacity: 0});
    tl.to(smallCircle, { opacity: 1 , duration: 0.5});
    tl.to(bigCircle, { opacity: 1 , duration: 0.5});
    tl.to(cloud, { opacity: 1 , duration: 0.5});

    // First arrow
    tl.to(circle1, { opacity: 1 , duration: 0.3});
    tl.to(circle2, { opacity: 1 , duration: 0.3});
    tl.to(circle3, { opacity: 1 , duration: 0.3});
    tl.to(arrowHead1, { opacity: 1 , duration: 0.3});

    // Study
    tl.from(studyMain, { y: -50, duration: 1, opacity: 0});
    tl.to(lightRays, { opacity: 1 , duration: 0.5});

    // Second arrow
    tl.to(circle4, { opacity: 1 , duration: 0.3});
    tl.to(circle5, { opacity: 1 , duration: 0.3});
    tl.to(circle6, { opacity: 1 , duration: 0.3});
    tl.to(arrowHead2, { opacity: 1 , duration: 0.3});

    // Handshake
    tl.from(handshake, { y: -100, duration: 1, opacity: 0});
    tl.to(jobComplete, { opacity: 1, duration: 0.5});
  }, 
}
</script>

<style lang="scss" scoped>

</style>