<template>
  <div class="container my-5">
    <h1 class="display-4">Your Roadmap</h1>

    <section class="course-selector mt-5">
      <div id="select-menu">
        <ul id ="select-menu-links">
          <li class="select-links btn btn-info">Stage 1</li>
          <li class="select-links btn btn-info">Stage 2</li>
          <li class="select-links btn btn-info">Stage 3</li>
          <li class="select-links btn btn-info">Stage 4</li>
          <li class="select-links btn btn-info">Stage 5</li>
          <li class="select-links btn btn-info">Stage 6</li>
          <li class="select-links btn btn-info">Stage 7</li>
          <li class="select-links btn btn-info">Stage 8</li>
          <li class="select-links btn btn-info">Stage 9</li>
        </ul>
      </div>


      <!-- <div class="form-group" id="stage-selector">
        <select id="stage-select" name="stage-selector">
          <option selected="">Choose Stage ...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
          <option value="8">Eight</option>
          <option value="9">Nine</option>
        </select>
      </div> -->

      <CourseList></CourseList>
    </section>


  </div>
</template>

<script>
import CourseList from './CourseList';

export default {
  name: "Roadmap",
  components: {
    CourseList
  }
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