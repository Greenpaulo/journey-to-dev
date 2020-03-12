<template>
  <div id="scrollDown">
    <i className="fas fa-chevron-down fa-5x scrollDownAnimate"></i>
  </div>
</template>

<script>
export default {
  name: 'ScrollDown'
}
</script>

<style lang="scss" scoped>

#scrollDown {
  z-index: 10;
  position: absolute;
  text-align: center;
  left: 0%;
  right: 0%;
  bottom: 2vh;
}

</style>