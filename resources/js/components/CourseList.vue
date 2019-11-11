<template>
  <div class="course-list">
    <div class="course-card">
      <h2>Card 1</h2>
    </div>
    <div class="course-card">
      <h2>Card 2</h2>
    </div>
    <div class="course-card">
      <h2>Card 3</h2>
    </div>
    <div class="course-card">
      <h2>Card 4</h2>
    </div>
    <div class="course-card">
      <h2>Card 5</h2>
    </div>
    <div class="course-card">
      <h2>Card 6</h2>
    </div>
  </div>
</template>

<script>
import Course from './Course';
import { mapActions } from 'vuex';

export default {
  name: "CourseList",
  components: {
    Course
  },
  methods: mapActions(['retrieveList', 'retrieveRoadmap']),
  created() {
  }
}

</script>

<style lang="scss" scoped>

.course-list{
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}

.course-card {
  background-color: #17141d;
  min-width: 300px;
  min-height: 350px;
  box-shadow: -1rem 0 3rem #000;
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