<template>
  <div class="container my-5">
    <h1 class="display-4 py-3 my-5 text-center">{{name}}'s Roadmap</h1>

    <section class="course-selector mt-5">
      <div id="select-menu" class="pb-4">
        <ul id ="select-menu-links">
          
          <li class="select-links btn bg-stage1 text-white" data-toggle="tooltip" data-placement="top" title="HTML & CSS" @click="retrieveUserCoursesByStage(1)">Stage 1</li>

          <li class="select-links btn bg-stage2 text-white" data-toggle="tooltip" data-placement="top" title="CSS Frameworks"  @click="retrieveUserCoursesByStage(2)">Stage 2</li>
          
          <li class="select-links btn bg-stage3 text-white" data-toggle="tooltip" data-placement="top" title="JavaScript" @click="retrieveUserCoursesByStage(3)">Stage 3</li>
          
          <li class="select-links btn bg-stage4 text-white" data-toggle="tooltip" data-placement="top" title="Front-End JS Frameworks"  @click="retrieveUserCoursesByStage(4)">Stage 4</li>
          
          <li class="select-links btn bg-stage5 text-white" data-toggle="tooltip" data-placement="top" title="Server Side Languages" @click="retrieveUserCoursesByStage(5)">Stage 5</li>
          
          <li class="select-links btn bg-stage6 text-white" data-toggle="tooltip" data-placement="top" title="Databases" @click="retrieveUserCoursesByStage(6)">Stage 6</li>
          
          <li class="select-links btn bg-stage7 text-white" data-toggle="tooltip" data-placement="top" title="Server Side Frameworks" @click="retrieveUserCoursesByStage(7)">Stage 7</li>
          
          <li class="select-links btn bg-stage8 text-white" data-toggle="tooltip" data-placement="top" title="Version Control" @click="retrieveUserCoursesByStage(8)">Stage 8</li>
          
          <li class="select-links btn btn-stage9 bg-stage9" data-toggle="tooltip" data-placement="top" title="Deployment" @click="retrieveUserCoursesByStage(9)">Stage 9</li>
        </ul>
      </div>

      <h4 id="stage-description" class="my-5">Stage {{stage}} - {{getStageTitle}}: <h5>Select Your Courses</h5></h4>
      
      <CourseList></CourseList>
    </section>

    <section id="roadmap" class="mt-5 pt-5">
      
      <Stage :stage="1"></Stage> 
      <Stage :stage="2"></Stage> 
      <Stage :stage="3"></Stage> 
      <Stage :stage="4"></Stage> 
      <Stage :stage="5"></Stage> 
      <Stage :stage="6"></Stage> 
      <Stage :stage="7"></Stage> 
      <Stage :stage="8"></Stage> 
      <Stage :stage="9"></Stage>

      <h3 class="my-4 py-4">Total Hours: {{calcTotalHours}}</h3>
      <h5 class="mt-4">Hours Remaining: {{calcTotalHoursRemaining}}</h5>
      <h6> Double click a course to mark as complete</h6>
    </section>


  </div>
</template>

<script>
import CourseList from './CourseList';
import Stage from './Stage';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Roadmap",
  data () {
    return {
      stageTitle: "HTML & CSS"
    }
  },
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
      this.retrieveUserCoursesByStage(1);
    };
    };

    initialLoad()
  },
  computed: {
    ...mapGetters({userCourseList: 'getUserCourseList', name: 'getName', stage: 'getCurrentStage'}),
    getStageTitle(){
      switch(this.stage) {
        case 1: return "HTML & CSS";
        case 2: return "CSS Frameworks";
        case 3: return "JavaScript";
        case 4: return "Front-End JS Frameworks";
        case 5: return "Server Side Languages";
        case 6: return "Databases";
        case 7: return "Server Side Frameworks";
        case 8: return "Version Control";
        case 9: return "Deployment";
        default: break;
      }
    },
    calcTotalHours() {
      const { roadmap } = this.$store.state.roadmap;
      let total = 0;
      roadmap.forEach(course => {
          total += course.hours
      });
      return total;
    },
    calcTotalHoursRemaining() {
      const { roadmap } = this.$store.state.roadmap;
      let total = 0;
      roadmap.forEach(course => {
        if (course.completed === 0){
          total += course.hours
        }
      });
      return total;
    }
  },
  methods: {
    ...mapActions(['loadInitialUserData', 'retrieveUserCoursesByStage']),
  },
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