<template>
<div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
        <div class="mb-3">
            <label for="email" class="form-label">Email Adress</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p class="mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
     if (this.email === "huntu@ngait.com" && this.password === "ngait") {
        const userData = {
          email: this.email,
            token: "xxxx"
        };
        localStorage.setItem("user", JSON.stringify(userData));
        this.$router.push("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    }
  }
}
</script>