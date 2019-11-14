<template>
  <div class="course-list">

    <!-- <div class="course-card" v-for="course in courses" :key="course.id"> -->
    <div class="course-card" :class='bgClass[course.stage]' v-for="course in courses" :key="course.id">
      <div class="card-header">Stage {{course.stage}}</div>
      <div class="card-body">
        <h5 class="card-title">{{course.title}}</h5>
        <p class="card-text">{{course.creator}}</p>
        <p class="card-text">{{course.hours}} Hours</p>
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
      bgClass: {
        '1' : 'border-stage1',
        '2' : 'border-stage2',
        '3' : 'border-stage3',
        '4' : 'border-stage4',
        '5' : 'border-stage5',
        '6' : 'border-stage6',
        '7' : 'border-stage7',
        '8' : 'border-stage8',
        '9' : 'border-stage9',
      }
    }
  },
  computed: mapGetters({courses: 'getUserCoursesByStage'}),
}

</script>

<style lang="scss" scoped>

@import 'resources/sass/variables';



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
</style>