<template>
  <v-container>
    <v-row class="full-height" align-content="center">
      <v-col>
        <p class="text-center text-h2 font-weight-bold">TEACHER DASHBOARD</p>
        <v-divider class="my-7"></v-divider>
        <v-container v-if="authenticated" fluid class="d-flex justify-center">
          <div class="d-flex flex-column">
            <v-btn x-large color="success" @click="gotoDashboard" class="my-5"
              >DASHBOARD</v-btn
            >
            <p class="text-subtitle-1">You are already logged in :)</p>
          </div>
        </v-container>
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

  methods: {
    gotoDashboard() {
      if (this.authenticated) {
        this.$router.push({ name: "Dashboard" });
      }
    },
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
