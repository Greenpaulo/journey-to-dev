<template>
  <div class="container my-5 animated fadeIn">
    <form @submit.prevent="login">
      <fieldset>
      <h2 class="mt-2 mb-4">Login</h2>
      <flash-message class=""></flash-message>
      <div class="form-group">
        <label for="email" class="lead text-stage2">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password" class="lead text-success">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
      </div>
      <button type="submit" class="btn btn-info my-3">Login</button>
    </fieldset>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.email,
        password: this.password,
      });
    }
  }
}
</script>

<style scoped>


</style>