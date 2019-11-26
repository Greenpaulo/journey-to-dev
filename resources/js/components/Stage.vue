<template>
  
  <section class="stage my-5">
      <div class="stage-heading">
        <h2 class="stage-number mb-4 pr-5">Stage {{stage}}</h2>
        <h5 class="stage-hrs">Total Hrs: {{totalHours}}</h5>
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

.stage {
  display: flex;
}

.stage-heading {
  padding: 2rem 2rem 2rem 0;
  align-self: center;

  h2 {
    font-size: 2.8rem;
  }
  
  h5 {
    font-size: 1.2rem;
  }
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