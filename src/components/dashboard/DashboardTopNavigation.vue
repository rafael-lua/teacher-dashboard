<template>
  <v-app-bar color="teal darken-1 white--text fixIndex">
    <v-container
      fill-height
      fluid
      class="d-flex justify-space-between pa-0 ma-0"
    >
      <v-app-bar dense flat color="teal" rounded>
        <v-btn
          text
          color="white"
          class="text-uppercase font-weight-medium text-body-2 ma-0"
          @click="home"
        >
          <v-icon small class="mr-0 mr-sm-1">mdi-home</v-icon>
          <span v-if="!hideText">home</span>
        </v-btn>
        <v-btn
          text
          color="white"
          class="text-uppercase font-weight-medium text-body-2 ma-0"
        >
          <v-icon small class="mr-0 mr-sm-1"
            >mdi-book-open-page-variant-outline</v-icon
          >
          <span v-if="!hideText">doc</span>
        </v-btn>
        <v-btn
          text
          color="white"
          class="text-uppercase font-italic font-weight-medium text-body-2 ma-0"
          @click="logout"
        >
          <v-icon small class="mr-0 mr-sm-1">mdi-account-arrow-left</v-icon>
          <span v-if="!hideText">log-out</span>
        </v-btn>
      </v-app-bar>
      <div class="ml-3">
        <p
          class="
            font-weight-regular
            pa-0
            ma-0
            text-subtitle-2 text-sm-subtitle-1
          "
        >
          Welcome, <span v-if="hideText"><br /></span>
          <span class="font-weight-bold">{{ user.name }}</span>
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
    hideText() {
      if (this.$vuetify.breakpoint.name === "xs") {
        return true;
      }
      return false;
    },
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
