<template>
  
  <section class="stage my-5">
      <div class="stage-heading">
        <div class="inner" :class="[
          `bg-stage${stage}`]">
          <h4 class="mb-3">Tip</h4>
          <p>Don't feel you need to master HTML & CSS before moving onto Stage 2 as you'll be doing lots of HTML & CSS from now on!</p>
          <svg id="tick" version="1.1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="50px" width="50px">
            <path class="st0" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M256,56c110.5,0,200,89.5,200,200
              c0,110.5-89.5,200-200,200c-110.5,0-200-89.5-200-200C56,145.5,145.5,56,256,56 M396.2,186.3l-22.5-22.7c-4.7-4.7-12.3-4.7-17-0.1
              L215.3,303.7l-59.8-60.3c-4.7-4.7-12.3-4.7-17-0.1l-22.7,22.5c-4.7,4.7-4.7,12.3-0.1,17l90.8,91.5c4.7,4.7,12.3,4.7,17,0.1
              l172.6-171.2C400.8,198.6,400.9,191,396.2,186.3L396.2,186.3z"/>
          </svg>
        </div>
        <div class="stage-heading-info">
          <h2 class="stage-number">Stage {{stage}}</h2>
          <h5 class="stage-hrs">Total Hrs: {{totalHours}}</h5>
        </div>
      </div>
        
      <div class="stage-courses ml-3"> 
        <div 
          class="stage-course card text-white mb-3 mx-2" 
          :class="[
          `bg-stage${course.stage}`,
           course.completed ? 'course-completed' : null 
           ]" 
          v-for="(course, index) in currentRoadmap" 
          :key="course.id" @dblclick='toggleCourseCompleted([$event, course])'
          :id="course.id">
          <div class="card-header">Stage {{course.stage}}</div>
          <div class="card-body">
            <h5 class="card-title"><a :href=course.url target="_blank">{{course.title}}</a></h5>
            <p class="card-text">{{course.creator}}</p>
            <p class="card-text">{{course.hours}} Hours</p>
          </div>
          <div class="card-footer">
          <div class="left-arrow">
            <i class="fas fa-arrow-left fa-2x" @click='moveCourse([course, index, -1])'></i>
          </div>
          <div class="delete-btn" @click='deleteCourseFromRoadmap(course)'>
            <i class="fas fa-times fa-2x"></i>
          </div>
          <div class="right-arrow">
            <i class="fas fa-arrow-right fa-2x" @click='moveCourse([course, index, 1])'></i>
          </div>
          </div>
        </div>
      </div>
    
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Stage",
  props: ['stage'],
  computed: {
    ...mapGetters({courseList: 'getCourseList'}),
    // Returns the current stage roadmap
    currentRoadmap() {
      return this.$store.getters.getRoadmapByStage(this.stage);
    },
    // Calculate the total course hours for the stage
    totalHours() {
      const courses = this.currentRoadmap;
      let total = 0;
      courses.forEach(course => {
        if (course.completed === 0){
          total += course.hours
        }
      })
      return total;
    }
  },
  created(){
    // Get the roadmap by stage only after the initial data has been loaded
    if(this.courseList.length === 0){
      setTimeout(() => {
        this.callGetByStage(this.stage);
      }, 1000)
    } else {
      this.callGetByStage(this.stage);
    }
  },
  methods: {
    ...mapActions(['deleteCourseFromRoadmap', 'moveCourse', 'toggleCourseCompleted']),
    callGetByStage(stage){
      this.$store.dispatch('retrieveRoadmapByStage', stage);
    }
  }
}
</script>


<style lang="scss" scoped>

@import 'resources/sass/variables';
@import 'resources/sass/colors';
@import 'resources/sass/animations';


.stage {
  display: flex;
}

.stage-heading {
  // padding: 2rem 2rem 2rem 0;
  // align-self: center;
  position: relative;
  // height: 100%;
  // border-bottom: $stage1 2px solid;
  // border-right: $stage1 2px solid;
  border-radius: 10px;
  // width: 30%;
  // height: 250px;
  height: 290px;
  min-width: 260px;
  max-width: 260px;
  text-align: center;
  // box-shadow: 1rem 0 3rem #000;


  h2 {
    font-size: 2.8rem;
    // padding: 3rem 2rem 0 2rem;
  }
  
  h5 {
    font-size: 1.2rem;
    // padding-left: 1rem;
  }
}

.stage-heading-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner {
  color: white;
  font-size: 1.1rem;
  padding: 1.5rem;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  clip-path: circle(20% at 0% 0%);
  transition: clip-path 0.5s ease-in-out;
}

.inner:hover {
  clip-path: circle(75%)
}


#tick .st0 {
  fill: none;
  stroke:#FFFFFF;
  stroke-width:15;
  stroke-miterlimit:10;
  stroke-dasharray: 3629.587890625;
  stroke-dashoffset: 3629.587890625;
  
}

.inner:hover .st0 {
  animation-name: line-anim, fill-white;
  animation-duration: 1.5s, 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-delay: 0.5s, 0.5s;
}
              

.stage-courses {
  display: flex;
  flex-wrap: wrap;
}

.stage-courses > .stage-course {
  min-height:240px;
  min-width: 260px;
  max-width: 260px;
  border-radius: 10px;
  box-shadow: 1rem 0 3rem #000;

  .card-body > h5 {
    font-size: 1.4rem;
  }
}

h5.card-title > a {
  color: white;
  text-decoration: none;

  &:hover {
    color: darken(white, 20%);
  }

}

.bg-stage9 a {
  color: black !important;
}

.course-completed {
  background-color: silver;
  opacity: 0.8;
}

.card-footer {
  display: flex;
  justify-content: space-between;
}

.left-arrow, .right-arrow {
  cursor: pointer;
}

.delete-btn {
  cursor: pointer;
}

</style>