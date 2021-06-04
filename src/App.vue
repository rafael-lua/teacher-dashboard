<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
/**
 * Main component of the whole app.
 */
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
