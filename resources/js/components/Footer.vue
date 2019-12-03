<template>
  <div id="footer" class="p-5 mt-5">
    <h5>JourneyToDev &copy;{{getYear}}</h5>
    <h6><router-link to="about">Contact</router-link></h6>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getYear(){
      const year = new Date().getFullYear();
      return year;
    }
  }
}
</script>

<style lang="scss" scoped>

#footer {
  background-color: rgba(2,0,9,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  a {
    color: darken(white, 15%);
  }
}

</style>