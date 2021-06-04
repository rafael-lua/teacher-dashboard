<template>
  <v-app-bar color="green darken-1 white--text fixIndex">
    <v-container
      fill-height
      fluid
      class="d-flex justify-space-between pa-0 ma-0s"
    >
      <p class="text-uppercase font-weight-medium text-body-2 pa-0 ma-0">
        log-out
      </p>
      <p class="font-weight-regular pa-0 ma-0">
        Welcome, <span class="font-weight-bold">{teacher name}</span>
      </p>
    </v-container>
  </v-app-bar>
</template>

<script>
/**
 * The top navigation bar of the main dashboard, with user information and general status
 */
export default {
  name: "DashboardTopNavigation",
};
</script>

<style scoped>
.fixIndex {
  z-index: 1;
}
</style>
