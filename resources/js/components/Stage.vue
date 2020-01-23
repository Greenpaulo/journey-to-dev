<template>
  <section class="stage my-5">
      <div class="stage-heading">
        <div class="inner" :class="[`bg-stage${stage}`]" :id="[`stage${stage}-tip`]" @click="showTip(tip)">
          <div class="inner-header">
            <svg version="1.1" id="lightbulb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve" height="50px" width="50px">
            <g transform="translate(0,-952.36218)">
              <circle cx="50" cy="1002.7" r="21.5"/>
              <path d="M41.9,1033.9c0.7,1.9,2.3,3.3,4.3,3.7v1c0,2,1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7v-1c2-0.3,3.7-1.8,4.3-3.7H41.9z"/>
              <rect x="41.6" y="1028.4" width="16.7" height="3.7"/>
              <rect x="41.6" y="1022.4" width="16.7" height="3.7"/>
              <path d="M11.9,1000.5c-1,0-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9h9.3c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9H11.9z"/>
              <path d="M23,973.6c-0.5,0-0.9,0.2-1.3,0.6c-0.7,0.7-0.7,1.9,0,2.6l6.6,6.6c0.7,0.7,1.9,0.7,2.6,0s0.7-1.9,0-2.6l-6.6-6.6 C24,973.8,23.5,973.6,23,973.6z"/>
              <path d="M50,962.4c-1,0-1.9,0.8-1.9,1.9v9.3c0,1,0.8,1.9,1.9,1.9c1,0,1.9-0.8,1.9-1.9v-9.3C51.8,963.2,51,962.4,50,962.4z"/>
              <path d="M76.9,973.6c-0.5,0-0.9,0.2-1.3,0.6l-6.6,6.6c-0.7,0.7-0.7,1.9,0,2.6c0.7,0.7,1.9,0.7,2.6,0l6.6-6.6c0.7-0.7,0.7-1.9,0-2.6 C77.8,973.8,77.4,973.6,76.9,973.6z"/>
              <path d="M78.8,1000.5c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9H88c1,0,1.9-0.8,1.9-1.9s-0.8-1.9-1.9-1.9H78.8z"/>
            </g>
            </svg>
            <h4>Tip</h4>
          </div>

          <p>{{getStageTip}}</p>
          
          <svg version="1.1" id="thumbs-up" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="50px" width="50px">
            <path class="st0" d="M466.3,286.7C475,271.8,480,256,480,236.9c0-44-37.2-85.6-85.8-85.6h-36.5c4.9-12.8,8.9-28.1,8.9-46.5
              C366.5,31.9,328.9,0,271.3,0c-61.6,0-58.1,94.9-71.8,108.6c-22.7,22.7-49.6,66.4-68.8,83.4H32c-17.7,0-32,14.3-32,32v240
              c0,17.7,14.3,32,32,32h64c14.9,0,27.4-10.2,31-24c44.5,1,75.1,39.9,177.8,39.9c7.2,0,15.2,0,22.2,0c77.1,0,112-39.4,112.9-95.3
              c13.3-18.4,20.3-43.1,17.3-67C467.1,331.2,470.9,309.3,466.3,286.7z M404.5,340.5c12.6,21.1,1.3,49.4-13.9,57.6
              c7.7,48.8-17.6,65.9-53.1,65.9h-37.8c-71.6,0-118-37.8-171.6-37.8V240h10.9c28.4,0,68-70.9,94.5-97.5c28.4-28.4,18.9-75.6,37.8-94.5
              c47.3,0,47.3,33,47.3,56.7c0,39.2-28.4,56.7-28.4,94.5h104c21.1,0,37.7,18.9,37.8,37.8c0.1,18.9-12.8,37.8-22.3,37.8
              C423.2,289.5,426.1,320.1,404.5,340.5L404.5,340.5z M88,432c0,13.3-10.7,24-24,24s-24-10.7-24-24s10.7-24,24-24S88,418.7,88,432z"/>
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
          v-for="(course, index) in currentStageRoadmap"
          :key="course.id"
          @click="handleClick($event, course)"
          :id="course.id">
          <div class="card-header">
            <h6>Stage {{course.stage}}</h6>
            <div class="tick">
              <i class="fas fa-check fa-lg"></i>
            </div>
            </div>
          <div class="card-body">
            <div class="course-info">
              <h5 class="card-title">{{course.title}}</h5>
              <p class="card-text">{{course.creator}}</p>
              <p class="card-text">{{course.hours}} Hours</p>
            </div>
            <div class="link">
              <a :href=course.url target="_blank"><i class="fas fa-link fa-lg"></i></a>
            </div>
          </div>
          <div class="card-footer">
          <div class="left-arrow">
            <i class="fas fa-arrow-left fa-2x" @click='moveCourse([course, index, -1])'></i>
          </div>
          <div class="delete-btn">
            <i class="fas fa-times fa-2x"></i>
          </div>
          <div class="right-arrow">
            <i class="fas fa-arrow-right fa-2x" @click='moveCourse([course, index, 1])'></i>
          </div>
          </div>
        </div>
        <div class="empty-stage" v-if="currentStageRoadmap.length === 0">
          <h4>Add a course!</h4>
        </div>
      </div>
    
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Stage",
  props: ['stage'],
  data () {
    return {
      tipOpen: false,
      tip: null
    }
  },
  created(){
    // Get the roadmap by stage only after the initial data has been loaded
    const waitForInitialDataLoad = () => {
    if(this.courseList.length === 0){
      setTimeout(() => {
        waitForInitialDataLoad();
      }, 500)
    } else {
      this.callGetByStage(this.stage);
    }
    };
    
    waitForInitialDataLoad();
  },
  mounted() {
    // Enable touch alternative for hover for "stage tips" on smartphones
    // Store the tip element in data object to be able to pass to click handler
    const tip = document.getElementById([`stage${this.stage}-tip`]);
    this.tip = tip;
  },
  computed: {
    ...mapGetters({courseList: 'getCourseList'}),
    // Returns the current stage roadmap
    currentStageRoadmap() {
      return this.$store.getters.getRoadmapByStage(this.stage);
    },
    // Calculate the total course hours for the stage
    totalHours() {
      const courses = this.currentStageRoadmap;
      let total = 0;
      courses.forEach(course => {
        total += Number(course.hours)
      })
      return total;
    },
    // Get the tip for each stage
    getStageTip(){
      switch(this.stage) {
        case 1: return "Don't feel you need to master HTML & CSS before moving onto Stage 2 as you'll get lots of practice in every stage!";
        case 2: return "CSS Frameworks are very useful but don't become over-reliant on them.";
        case 3: return "JS is very important! Make sure you have a good grasp of vanilla JS before moving onto Stage 4.";
        case 4: return "Try to focus on one framework. Try them all, but focus on one.";
        case 5: return "You only really need one server-side language to start off. Resist the temptation to learn too many!";
        case 6: return "Make sure you learn an SQL database and a no-SQL database.";
        case 7: return "Build an API with your framework and use it as the back-end for a CRUD application!";
        case 8: return "Git and Github are great ways to save and share your projects. Start using git in your personal projects.";
        case 9: return "Netlify is best for static sites, Digital Ocean is best for full stack applications.";
        default: break;
      }
    }
  },
  methods: {
    ...mapActions(['deleteCourseFromRoadmap', 'moveCourse', 'toggleCourseCompleted']),
    callGetByStage(stage){
      this.$store.dispatch('retrieveRoadmapByStage', stage);
    },
    // Enable opening and closing tip on touch/click for mobile devices
    showTip(tip){
      // Only enable on mobiles and tablets - inc. landscape
      if(window.innerWidth <= 1366){
        // Check if tip is already showing
        if (this.tipOpen){
          // If open then close it
          tip.style.clipPath = "circle(20% at 0% 0%)"
          this.tipOpen = false;
        }
        // Else tip is closed
        else{
          tip.style.clipPath = "circle(75%)";
          this.tipOpen = true;
        }
      }
    },
    handleClick($event, course){
      // Check that the delete button was clicked
     if (event.target.className === "fas fa-times fa-2x"){
       const card = document.getElementById(`${course.id}`);
        // Animate the card using animate.css
        card.classList.add("animated", "fadeOut");

        // Call the store action when the animation ends
        card.addEventListener('animationend', () => {
          this.$store.dispatch('deleteCourseFromRoadmap', course);
        });

      } else if (event.target.className === "fas fa-check fa-lg"){
        // Checking that the completed button was clicked
        const card = document.getElementById(course.id);
        card.classList.toggle("course-completed");
        // Call the store action
        this.$store.dispatch('toggleCourseCompleted', course);
        
      }    
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'resources/sass/variables';
@import 'resources/sass/colors';
@import 'resources/sass/animations';

.stage {
  display: flex;
  box-shadow: 1rem 0 3rem #000;
  padding: 0 0.3rem 1rem 0;
  border-radius: 10px;
}

.stage-heading {
  position: relative;
  border-radius: 10px;
  height: 290px;
  min-width: 260px;
  // max-width: 260px;
  text-align: center;

  h2 {
    font-size: 2.8rem;
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
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  clip-path: circle(20% at 0% 0%);
  transition: clip-path 0.5s ease-in-out;

  p {
    margin-bottom: 0.5rem;
    padding: 1rem;
  }

  .inner-header {
    display: grid;
    grid-template-columns: 1.65fr 2.35fr;

    #lightbulb {
    fill: white;
    padding-top: 0.2rem;
    }

    h4 {
      margin: 0;
      text-align: left;
      padding-top: 1rem;
    }
  }
}

.inner:hover {
  clip-path: circle(75%)
}

#thumbs-up path {
  fill: none;
  stroke:white;
  stroke-width:8;
  stroke-miterlimit:10;
  stroke-dasharray: 3174.48388671875;
  stroke-dashoffset: 3174.48388671875;
}

.inner:hover .st0{
  animation-name: line-anim, fill-white;
  animation-duration: 1.5s, 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-delay: 0.4s, 0.4s;
}

.inner.bg-stage9{

  & #lightbulb {
    fill: black;
  }

  h4 {
    color: black;
  }

  & #thumbs-up .st0 {
    stroke: black;
  }

  &:hover .st0 {
  animation-name: line-anim, fill-black;
  }
}
              

.stage-courses {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.stage-courses {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.stage-courses > .stage-course {
  position: relative;
  min-height:240px;
  min-width: 260px;
  max-width: 260px;
  border-radius: 10px;
  margin-top: 1.8rem;
  box-shadow: 1rem 0 3rem #000;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div.tick {
      cursor: pointer;

      &:hover i{
        animation: pulse 500ms ease-in;
        animation-iteration-count: infinite;
      }
    }
  }
  
  .card-body > h5 {
    font-size: 1.4rem;
  }

  .card-body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: space-between;

    p.card-text {
      margin-bottom: 0.6rem;
    }
  
    .link a {
      position: absolute;
      bottom: 15px;
      left: 217px;
    }
    
    i {
      color: white;
      margin-top: 0.5rem;
      transition: color 200ms ease-in-out;

      &:hover {
        color: darken(white, 15%);
      }
    }
  }
}

.stage-courses > .bg-stage9 > .card-body i{
  color: black;
  
  &:hover {
      color: lighten(black, 25%);
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
  background-color: lightgreen;
  opacity: 0.8;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.empty-stage {
  width: 53%;
  margin: auto;
  text-align: left;
}

.left-arrow, .right-arrow, .delete-btn {
  cursor: pointer;
  padding: 0.75rem;
}

.left-arrow {
  padding-left: 1.25rem;
 
  // &:hover{
  //   animation: left-point 500ms ease-in;
  //   animation-iteration-count: 2;
  // }
}

// @keyframes left-point {
//   50% {
//     transform: translateX(-15px)
//   }
//   100% {
//     transform: translateX(0px)
//   }
// }

.right-arrow {
  padding-right: 1.25rem;
 
  // &:hover{
  //   animation: right-point 500ms ease-in;
  //   animation-iteration-count: 2;
  // }
}

// @keyframes right-point {
//   50% {
//     transform: translateX(15px)
//   }
//   100% {
//     transform: translateX(0px)
//   }
// }

.delete-btn:hover {
  animation: pulse 500ms ease-in; // Keyframes is in _animation.scss
  animation-iteration-count: infinite;
}


// Media queries
// Ipad
@media (max-width: 768px){
  .stage {
    display: grid;
  }

  .stage-courses {
    margin: 0 !important;
    padding-left: 2rem;
    padding-right: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 260px));
    justify-items: center;
    justify-content: space-around;

  }
}

// Smartphone - smaller
// @media (max-width: 375px){

//   .stage-heading {
//     // margin: auto;
//   }
// }

</style>