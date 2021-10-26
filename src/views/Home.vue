<template>
  <div class="home">
    <h1>Bloggers</h1>

    <div v-if="showLogin">
      <h2>Login</h2>
      <Login />
      <p>
        no account yet? <span @click="showLogin = false">Signup</span> instead
      </p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <Signup />
      <p>
        already registered?
        <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: { Signup, Login },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>
