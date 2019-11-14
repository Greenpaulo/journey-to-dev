<template>
  <section class="stage my-5">
      
      <div class="stage-heading">
        <h3>Stage {{stage}}</h3>
      </div>
        
      <div class="stage-courses card text-white bg-info mb-3" v-for="course in courses" :key="course.id">
        <div class="card-header">Stage {{course.stage}}</div>
        <div class="card-body">
          <h5 class="card-title">{{course.title}}</h5>
          <p class="card-text">{{course.creator}}</p>
        </div>
      </div>
      
      <div class="stage-total">
        <h3>Total Hrs: {{totalHours}}</h3>
      </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Stage",
  data() {
    return {
      courses: []
    }
  },
  props: ['stage'],
  computed: {
    ...mapGetters({courseList: 'getCourseList'}),
    totalHours() {
      const { courses } = this;
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
    async callGetByStage(stage){
      const courses = await this.$store.dispatch('getRoadmapByStage', stage);
      this.courses = courses;
    }
  }
}
</script>

<style lang="scss" scoped>

.stage {
  display: flex;
}

.stage-courses {
  max-width: 20rem;

}

</style>