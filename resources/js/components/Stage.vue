<template>
  
  <section class="stage my-5">
      <div class="stage-heading">
        <div class="inner" :class="[
          `bg-stage${stage}`]">
          <h4 class="mb-3">Tip</h4>
          <p>Don't feel you need to master HTML & CSS before moving onto Stage 2 as you'll be doing lots of HTML & CSS from now on!</p>
          <!-- <svg id="tick" version="1.1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="50px" width="50px">
            <path class="st0" d="M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M256,56c110.5,0,200,89.5,200,200
              c0,110.5-89.5,200-200,200c-110.5,0-200-89.5-200-200C56,145.5,145.5,56,256,56 M396.2,186.3l-22.5-22.7c-4.7-4.7-12.3-4.7-17-0.1
              L215.3,303.7l-59.8-60.3c-4.7-4.7-12.3-4.7-17-0.1l-22.7,22.5c-4.7,4.7-4.7,12.3-0.1,17l90.8,91.5c4.7,4.7,12.3,4.7,17,0.1
              l172.6-171.2C400.8,198.6,400.9,191,396.2,186.3L396.2,186.3z"/>
          </svg> -->
          <svg version="1.1" id="thumbs-up" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve" height="70px" width="70px">
      
            <path class="st0" d="M71.1,25.5c0,1.4,1.1,2.5,2.5,2.5h5.6c1.4,0,2.5-1.1,2.5-2.5S80.6,23,79.2,23h-5.6C72.2,23,71.1,24.1,71.1,25.5
            z M32.7,25.5c0,1.4,1.1,2.5,2.5,2.5h5.6c1.4,0,2.5-1.1,2.5-2.5S42.1,23,40.8,23h-5.6C33.8,23,32.7,24.1,32.7,25.5z M59.7,9.1V3.5
            c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5v5.6c0,1.4,1.1,2.5,2.5,2.5S59.7,10.5,59.7,9.1z M71,8.2l-4,4c-1,1-1,2.6,0,3.5
            c1,1,2.6,1,3.5,0l4-4c1-1,1-2.6,0-3.5C73.6,7.2,72,7.2,71,8.2z M45.6,16.4c1.4,0,2.5-1.1,2.5-2.5c0-0.7-0.3-1.3-0.7-1.8l-4-4
            c-1-1-2.6-1-3.5,0c-1,1-1,2.6,0,3.5l4,4C44.3,16.1,44.9,16.4,45.6,16.4z"/>
            <path class="st0" d="M15.5,45.2c-2.8,0-5,2.2-5,5V94c0,2.8,2.2,5,5,5H30c2.6,0,4.8-2,5-4.7l3.1,1.9c3,1.8,6.3,2.7,9.8,2.7H69
              c2.6,0,5.1-0.5,7.4-1.5c6.8-3,7.8-8.3,7.3-11.8c3.6-3,4.9-7.9,3.3-12.2c1.7-2,2.6-4.6,2.5-7.2c-0.1-2.1-0.8-4-2.1-5.7
              c1.6-3.6,0.7-7.8-2.3-10.5c-0.2-0.2-0.4-0.4-0.7-0.5c-1.1-0.8-2.4-1.4-3.8-1.7h-0.1c-6.6-1.4-11.1-1.5-17.7-1.5
              c-0.3-1.5-0.2-4.7,1.7-10.7c1.8-5.5,1.7-10.1-0.5-13.6c-1.8-2.8-4.8-4.7-8.1-5.1h-0.3c-2.4,0-4.5,1.5-5.2,3.7c0,0.1-0.1,0.2-0.1,0.4
              l-0.8,5.4c-0.2,1.6-0.7,3.2-1.4,4.7l-7.3,15.3c-1.1,2.6-3.4,4.4-6.1,5v-1.2c0-2.8-2.2-5-5-5H15.5z M15.5,94V50.2H30V94H15.5z
              M35.5,56.5c4.5-0.8,8.3-3.8,10.1-8l7.2-15.3c0.9-1.9,1.5-4,1.8-6.1l0.8-5l0.1-0.1c1.8,0.3,3.3,1.3,4.3,2.8c1.3,2.1,1.3,5.4,0,9.4
              C57.9,40,57.3,44.7,58,47.9c0.5,2.1,2.3,3.5,4.4,3.5c6.6,0,10.7,0.1,17,1.4h0.1c0.7,0.1,1.3,0.4,1.8,0.8l0.3,0.3
              c2.6,2.3,0.9,5.3,0.6,5.8c-0.7,1-0.5,2.4,0.4,3.2c1,1,1.6,2.3,1.7,3.7c-0.1,1.9-0.9,3.6-2.3,4.9c-0.8,0.8-0.9,2-0.3,3
              c0.1,0.2,2.7,4.7-2.4,8.4c-0.9,0.7-1.2,1.8-0.9,2.8c0.3,0.8,1.3,4.9-4.2,7.3c-1.7,0.7-3.6,1.1-5.5,1H47.8c-2.5,0-5-0.7-7.2-2
              L35,88.5v-32H35.5z"/>
            <circle class="st0" cx="22.8" cy="86.2" r="3.1"/>
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
  },
  // mounted() {
  //     //Calculate path lengths of the svg logo
  //     const logo = document.querySelectorAll('#thumbs-up path');
  //     console.log(logo)
      
  //     for(let i = 0; i < logo.length; i++){
  //       console.log(`Letter ${i+1} is ${logo[i].getTotalLength()}`);
  //     }
  // }
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


// #tick .st0 {
//   fill: none;
//   stroke:#FFFFFF;
//   stroke-width:15;
//   stroke-miterlimit:10;
//   stroke-dasharray: 3629.587890625;
//   stroke-dashoffset: 3629.587890625;
// }

#thumbs-up path:nth-child(odd){
  fill:none;
  stroke:white;
  stroke-width:2;
  stroke-miterlimit:10;
  stroke-dasharray: 134.77935791015625;
  stroke-dashoffset: 134.77935791015625;
}

#thumbs-up path:nth-child(even){
  fill:none;
  stroke:white;
  stroke-width:2;
  stroke-miterlimit:10;
  stroke-dasharray: 633.6428833007812;
  stroke-dashoffset: 633.6428833007812;
}

// .inner:hover .st0 {
//   animation-name: line-anim, fill-white;
//   animation-duration: 1.5s, 1s;
//   animation-fill-mode: forwards;
//   animation-timing-function: ease;
//   animation-delay: 0.5s, 0.5s;
// }

.inner:hover .st0{
  
  animation-name: line-anim, fill-white;
  animation-duration: 1s, 1s;
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