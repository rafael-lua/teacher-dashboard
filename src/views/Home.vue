<template>
  <v-container>
    <v-row class="full-height" align-content="center">
      <v-col>
        <p class="text-center text-h2 font-weight-bold">TEACHER DASHBOARD</p>
        <v-divider class="my-7"></v-divider>
        <div v-if="authenticated">Welcome...</div>
        <LoginForm v-else-if="show === 'login'" />
        <div v-else-if="show === 'signup'"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import LoginForm from "../components/authentication/LoginForm";

/**
 * The home component is the first view of a user accessing the application
 */
export default {
  name: "Home",

  components: {
    LoginForm,
  },

  data() {
    return {
      show: "login",
    };
  },

  computed: {
    ...mapState({
      authenticated: (state) => state.authenticated,
    }),
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
