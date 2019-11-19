<template>
  <section class="stage my-5">
      
      <div class="stage-heading">
        <h3 class="stage-number mb-4 pr-5">Stage {{stage}}</h3>
        <h6 class="stage-hrs">Total Hrs: {{totalHours}}</h6>
      </div>
        
      <div class="stage-courses ml-3"> 
        <div class="stage-course card text-white mb-3 mx-2" :class="`bg-stage${course.stage}`" v-for="(course, index) in currentRoadmap" :key="course.id">
          <div class="card-header">Stage {{course.stage}}</div>
          <div class="card-body">
            <h5 class="card-title">{{course.title}}</h5>
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
        total += course.hours
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
    ...mapActions(['deleteCourseFromRoadmap', 'moveCourse']),
    callGetByStage(stage){
      this.$store.dispatch('getRoadmapByStage', stage);
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

  h5 {
    font-size: 0.8rem;
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

  .card-body > h5 {
    font-size: 1.4rem;
  }
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