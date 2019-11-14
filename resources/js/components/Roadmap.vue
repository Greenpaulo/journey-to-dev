<template>
  <div class="container my-5">
    <h1 class="display-4">Your Roadmap</h1>

    <section class="course-selector mt-5">
      <div id="select-menu">
        <ul id ="select-menu-links">
          <li class="select-links btn btn-info" @click="getCoursesByStage(1)">Stage 1</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(2)">Stage 2</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(3)">Stage 3</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(4)">Stage 4</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(5)">Stage 5</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(6)">Stage 6</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(7)">Stage 7</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(8)">Stage 8</li>
          <li class="select-links btn btn-info" @click="getCoursesByStage(9)">Stage 9</li>
        </ul>
      </div>
      
      <CourseList></CourseList>
    </section>

    <Stage :stage="1"></Stage> 
    <Stage :stage="2"></Stage> 
    <Stage :stage="3"></Stage> 
    <Stage :stage="4"></Stage> 
    <Stage :stage="5"></Stage> 
    <Stage :stage="6"></Stage> 
    <Stage :stage="7"></Stage> 
    <Stage :stage="8"></Stage> 
    <Stage :stage="9"></Stage> 

  </div>
</template>

<script>
import CourseList from './CourseList';
import Stage from './Stage';
import { mapActions } from 'vuex';

export default {
  name: "Roadmap",
  created () {
    console.log('parent fired');
    this.loadInitialUserData();
  },
  methods: mapActions(['loadInitialUserData', 'getCoursesByStage']),
  components: {
    CourseList,
    Stage
  },
};

</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';

#select-menu-links {
  display: flex;
  justify-content: space-between;
}

.select-links {
  list-style: none;
  cursor: pointer;
}

</style>