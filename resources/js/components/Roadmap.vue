<template>
  <div>
    <div v-if="this.userCourseList.length !== 0">
      <div class="container my-5">
        <div id="roadmap-page">
          <h1 class="display-4 pt-4 pb-5 my-5 text-center">{{name}}'s Roadmap</h1>
          <section class="course-selector mt-5">
            <div id="select-menu" class="pb-4 mt-3">
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

            <h4 id="stage-description" class="mt-5 mb-3">Stage {{stage}} - {{getStageTitle}}:</h4> <h5>Select Your Courses</h5>
            
            <CourseList></CourseList>
          </section>

          <section id="roadmap" class="mt-5 pt-5">

            <Stage :stage="1"></Stage>
            <Arrow/>
            <Stage :stage="2"></Stage>
            <Arrow/>
            <Stage :stage="3"></Stage>
            <Arrow/> 
            <Stage :stage="4"></Stage>
            <Arrow/> 
            <Stage :stage="5"></Stage>
            <Arrow/> 
            <Stage :stage="6"></Stage>
            <Arrow/>
            <Stage :stage="7"></Stage>
            <Arrow/> 
            <Stage :stage="8"></Stage>
            <Arrow/> 
            <Stage :stage="9"></Stage>

            <div id="total-hours">
              <h3 class="my-3 py-3">Total Hours: {{calcTotalHours}}</h3>
              <h5 class="mt-3 py-2">Hours Remaining: {{calcTotalHoursRemaining}}</h5>
              <h6 class="p-3"> Double click a course to mark as complete!</h6>
            </div>
          </section>
        </div>
      </div>
      <Footer />  
    </div>
      
    <div v-else id="loader" class="mt-5 pt-5">
      <h2>Loading....</h2>
    </div>
  </div>
</template>

<script>
import CourseList from './CourseList';
import Stage from './Stage';
import Arrow from './Arrow';
import Footer from './Footer';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Roadmap",
  components: {
    CourseList,
    Stage,
    Arrow,
    Footer
  },
  data () {
    return {
      stageTitle: "HTML & CSS",
      totalHours: null,
      remainingHrs: null,
      progress: null
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

    initialLoad();

    // // Animate the stage selector buttons with GSAP
    // const tl = gsap.timeline({});
    
    // tl.add('drop')
    // tl.from('.select-links', { y: -200, duration: 1,  ease: "bounce.out",stagger: 0.2}, 'drop')
    //   .from('.select-links', {backgroundColor: '#ffffff', duration: 2}, 'drop');

    // tl.play();
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
      this.totalHours = total;
      return total;
    },
    calcTotalHoursRemaining() {
      const { roadmap } = this.$store.state.roadmap;
      let total = 0;
      roadmap.forEach(course => {
        if (course.completed == 0 ){
          total += course.hours
        }
      });
      this.remainingHrs = total;
      return total;
    },
    // calcProgress() {

    //   if (this.totalHours === null || this.remainingHrs === null){
    //     setTimeout(() => calcProgress(),
    //     500);
    //     return
    //   };
      
    //   const totalHours = this.totalHours;
    //   const remainingHrs = this.remainingHrs;
    //   const progress =  (remainingHrs/totalHours)*100;
    //   this.progress = progress;
    //   return progress;
    // }
  },
  methods: {
    ...mapActions(['loadInitialUserData', 'retrieveUserCoursesByStage']),
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
  transition: filter 200ms ease-in-out;

  &:hover {
    filter: brightness(120%);
  }
}

.btn-stage9 {
  color: black;
}

#total-hours {
  text-align: center;
}


// Media queries
// Ipad

</style>