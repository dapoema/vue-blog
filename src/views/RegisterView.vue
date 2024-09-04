<template>
    <div class="container">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="name" required>  
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Adress</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <p class="mt-3">Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
        console.log('registering', this.name, this.email, this.password);
        this.$router.push('/login');
    }
  }
}
      
</script>