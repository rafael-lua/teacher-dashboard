<template>
  <v-app-bar color="green darken-1 white--text fixIndex">
    <v-container
      fill-height
      fluid
      class="d-flex justify-space-between pa-0 ma-0s"
    >
      <v-btn
        color="white"
        class="text-uppercase font-weight-medium text-body-2 pa-0 ma-0"
        @click="home"
      >
        home
      </v-btn>
      <v-btn
        color="red"
        class="text-uppercase font-weight-medium text-body-2 pa-0 ma-0"
        @click="logout"
      >
        log-out
      </v-btn>
      <p class="font-weight-regular pa-0 ma-0">
        Welcome, <span class="font-weight-bold">{teacher name}</span>
      </p>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
/**
 * The top navigation bar of the main dashboard, with user information and general status
 */
export default {
  name: "DashboardTopNavigation",

  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
    logout() {
      this.clearUser();
      this.$router.push({ name: "Home" });
    },
    ...mapActions({
      clearUser: "logout",
    }),
  },
};
</script>

<style scoped>
.fixIndex {
  z-index: 1;
}
</style>
