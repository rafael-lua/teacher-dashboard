<template>
  <v-app-bar color="teal darken-1 white--text fixIndex">
    <v-container
      fill-height
      fluid
      class="d-flex justify-space-between pa-0 ma-0s"
    >
      <nav>
        <v-btn
          text
          color="white"
          class="text-uppercase font-weight-medium text-body-2 ma-0"
          @click="home"
        >
          home
        </v-btn>
        <v-btn
          text
          color="white"
          class="text-uppercase font-weight-medium text-body-2 ma-0"
        >
          doc
        </v-btn>
        <v-btn
          text
          color="white"
          class="text-uppercase font-italic font-weight-medium text-body-2 ma-0"
          @click="logout"
        >
          log-out
        </v-btn>
      </nav>
      <div>
        <p class="font-weight-regular pa-0 ma-0">
          Welcome, <span class="font-weight-bold">{{ user.name }}</span>
        </p>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
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

  computed: {
    ...mapState("user", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style scoped>
.fixIndex {
  z-index: 1;
}
</style>
