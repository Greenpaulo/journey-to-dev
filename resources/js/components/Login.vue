<template>
  <div class="container">
    <form>
      <fieldset>
      <h2 class="my-4">Login</h2>
      <div class="form-group">
        <label for="email" class="lead text-orange">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="password" class="lead text-success">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-info my-3">Login</button>
    </fieldset>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

</style>