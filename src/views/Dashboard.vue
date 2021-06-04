<template>
  <v-container fluid>
    <v-app-bar color="blue-grey darken-3 white--text" app>
      <v-container fill-height fluid class="d-flex justify-space-between">
        <p class="text-uppercase font-weight-medium text-body-2">log-out</p>
        <p class="font-weight-regular">
          Welcome, <span class="font-weight-bold">{teacher name}</span>
        </p>
      </v-container>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>

<style scoped></style>
