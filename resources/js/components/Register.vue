<template>
  <div class="container my-5 animated fadeIn" id="register-form">
    <form @submit.prevent="registerSubmit">
      <fieldset>
      <h2 class="mt-2 mb-4">Register</h2>
      <flash-message class=""></flash-message>
      <div class="form-group">
        <label for="name" class="lead text-stage2">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email" class="lead text-stage3">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" required>
        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password" class="lead text-stage4">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="password_confirmation" class="lead text-stage8">Confirm password</label>
        <input type="password" class="form-control" id="password_confirmation" placeholder="Password" v-model="password_confirmation" required>
      </div>
      <button type="submit" class="btn btn-primary my-3">
        <span v-if="!requestBeingMade">Register</span>
        <span v-if="requestBeingMade">
          <span class="mr-2">Registering</span>
          <SmallLoader v-if="requestBeingMade"></SmallLoader>
        </span> 
      </button>
    </fieldset>
  </form>
  </div>
</template>

<script>
import SmallLoader from './SmallLoader';
import { mapGetters } from 'vuex';

export default {
  name: 'Register',
  components: {
    SmallLoader
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  computed: mapGetters({ requestBeingMade:'isRequestBeingMade'}),
  methods: {
    registerSubmit(){
      // Check the password is at least 8 characters long
      if (this.password.length <= 7){
        this.flash('Password must be at least 8 characters.', 'error',
          {
            timeout: 3000
          });
        return
      }
      // Check the passwords are the same
      if (this.password !== this.password_confirmation){
        this.flash('Passwords do not match.', 'error',
          {
            timeout: 3000
          });
        return
      };
      
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
    }
  }
}
</script>

<style>
  #register-form {
    width: 35%;
  }

  @media (max-width: 1500px) {
    #register-form {
    width: 40%;
    }
  }

  @media (max-width: 1300px) {
    #register-form {
    width: 60%;
    }
  }

  @media (max-width: 900px) {
    #register-form {
    width: 100%;
    }
  }
</style>