<template>
  <v-container>
    <v-row class="full-height" align-content="center">
      <v-col>
        <p class="text-center text-h2 font-weight-bold">TEACHER DASHBOARD</p>
        <v-divider class="my-7"></v-divider>
        <LoginForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "../components/authentication/LoginForm";

/**
 * The home component is the first view of a user accessing the application
 */
export default {
  name: "Home",

  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
