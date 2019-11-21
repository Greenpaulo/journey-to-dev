<template>
  <div class="container my-5">
    <h1 class="display-4">{{name}}'s Roadmap</h1>

    <section class="course-selector mt-5">
      <div id="select-menu">
        <ul id ="select-menu-links">
          
          <li class="select-links btn bg-stage1 text-white" data-toggle="tooltip" data-placement="top" title="HTML & CSS" @click="getUserCoursesByStage(1)">Stage 1</li>

          <li class="select-links btn bg-stage2 text-white" data-toggle="tooltip" data-placement="top" title="CSS Frameworks"  @click="getUserCoursesByStage(2)">Stage 2</li>
          
          <li class="select-links btn bg-stage3 text-white" data-toggle="tooltip" data-placement="top" title="JavaScript" @click="getUserCoursesByStage(3)">Stage 3</li>
          
          <li class="select-links btn bg-stage4 text-white" data-toggle="tooltip" data-placement="top" title="Front-End JS Frameworks"  @click="getUserCoursesByStage(4)">Stage 4</li>
          
          <li class="select-links btn bg-stage5 text-white" data-toggle="tooltip" data-placement="top" title="Server Side Languages" @click="getUserCoursesByStage(5)">Stage 5</li>
          
          <li class="select-links btn bg-stage6 text-white" data-toggle="tooltip" data-placement="top" title="Databases" @click="getUserCoursesByStage(6)">Stage 6</li>
          
          <li class="select-links btn bg-stage7 text-white" data-toggle="tooltip" data-placement="top" title="Server Side Frameworks" @click="getUserCoursesByStage(7)">Stage 7</li>
          
          <li class="select-links btn bg-stage8 text-white" data-toggle="tooltip" data-placement="top" title="Version Control" @click="getUserCoursesByStage(8)">Stage 8</li>
          
          <li class="select-links btn btn-stage9 bg-stage9" data-toggle="tooltip" data-placement="top" title="Deployment" @click="getUserCoursesByStage(9)">Stage 9</li>
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

    <h3>Total Hours: {{calcTotalHours}}</h3>

  </div>
</template>

<script>
import CourseList from './CourseList';
import Stage from './Stage';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Roadmap",
  created () {
    this.loadInitialUserData();
  },
  mounted () {
    // Intialise bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Render the courseList stage 1 default only after the initial data has been loaded
    const initialLoad = () => {

    if(this.userCourseList.length === 0){
      setTimeout(() => {
        initialLoad();
      }, 1000)
    } else {
      this.getUserCoursesByStage(1);
    };
    };

    initialLoad()
  },
  computed: {
    ...mapGetters({userCourseList: 'retrieveUserCourseList', name: 'getName'}),
    calcTotalHours() {
      const { roadmap } = this.$store.state.roadmap;
      let total = 0;
      roadmap.forEach(course => {
        total += course.hours
      });
      return total;
    }
  },
  methods: mapActions(['loadInitialUserData', 'getUserCoursesByStage']),
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

.btn-stage9 {
  color: black;
}

// Tooltip


</style>