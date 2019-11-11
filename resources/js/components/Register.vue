<template>
  <div class="container">
    <form @submit.prevent="registerSubmit">
      <fieldset>
      <h2 class="my-4">Register</h2>
      <div class="form-group">
        <label for="name" class="lead text-orangered">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <label for="email" class="lead text-orange">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password" class="lead text-success">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary my-3">Submit</button>
    </fieldset>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerSubmit(){
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style>

</style>