<template>
  <div class="course-list">
      <div class="course-card" v-for="course in courses" :key="course.id" :class="`border-stage${course.stage}`">
      <div class="card-header">Stage {{course.stage}}</div>
      <div class="card-body">
        <h5 class="card-title">{{course.title}}</h5>
        <p class="card-text">{{course.creator}}</p>
        <p class="card-text">{{course.hours}} Hours</p>
        <div class="add-btn" :class="`bg-stage${course.stage}`" @click="addCourseToRoadmap(course)">
          <i class="fas fa-plus fa-2x"></i></div>
        </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "CourseList",
  data() {
    return {
      stage: "1"
    }
  },
  computed: mapGetters({userCourseList: 'getUserCourseList', courses: 'getUserCoursesByStage'}),
  methods: mapActions(['addCourseToRoadmap', 'retrieveUserCoursesByStage'])
}

</script>

<style lang="scss" scoped>

@import 'resources/sass/variables';
@import 'resources/sass/colors';



.course-list{
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.course-card {
  background-color: #17141d;
  // min-width: 300px;
  width: 300px;
  min-height: 350px;
  box-shadow: -1rem 0 3rem #000;
  border-width: 4px;
  border-radius: 16px;
  padding: 1.5rem;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
}

.course-card:not(:first-child){
  margin-left: -130px;
}

.course-card h2 {
  color: white;
}

.course-card:hover {
  transform: translate(0,-1rem);
}

.course-card:hover~.course-card{
  transform: translateX(130px);
}

// Scrollbar
.course-list::-webkit-scrollbar {
    width: 10px;
    height: 15px;
}

.course-list::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25), inset -2px -2px 2px rgba(0,0,0,.25);
}

.course-list::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#17141d 1px,#17141d);
}


// Add button

.add-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.bg-stage9 i.fa-plus {
  color: black;
}

i.fa-plus {
  padding-top: 11px;
  padding-left: 13px;
  width: 50px;
  height: 50px;
  color: white;
}
</style>