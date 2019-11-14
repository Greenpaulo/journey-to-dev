<template>
  <section class="stage my-5">
      
      <div class="stage-heading">
        <h3 class="stage-number mb-4">Stage {{stage}}</h3>
        <h6 class="stage-hrs">Total Hrs: {{totalHours}}</h6>
      </div>
        
      <div class="stage-courses card text-white bg-info mb-3" v-for="course in courses" :key="course.id">
        <div class="card-header">Stage {{course.stage}}</div>
        <div class="card-body">
          <h5 class="card-title">{{course.title}}</h5>
          <p class="card-text">{{course.creator}}</p>
          <p class="card-text">{{course.hours}} Hours</p>
        </div>
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

.stage-heading {
  padding: 2rem;
  align-self: center;

  h6 {
    font-size: 1rem;
  }
}

.stage-courses {
  height:240px;
  width: 280px;
}

</style>