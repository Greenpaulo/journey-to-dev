<template>
  <div id="footer">
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
  padding: 2.7rem 1rem 2rem 1rem;

  h5 {
    margin-bottom: 0.8rem;
  }

  a {
    color: darken(white, 15%);
  }
}

</style>