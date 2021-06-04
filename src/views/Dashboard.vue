<template>
  <v-container fluid class="pa-0">
    <!-- dashboard main navigation  -->
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

    <v-row>
      <v-col>
        <!-- dashboard left control panel -->
        <v-navigation-drawer permanent cliped class="lighten-5">
          <v-list shaped dense>
            <v-list-item class="py-1">
              <v-list-item-content>
                <v-list-item-title class="text-h6 text-uppercase">
                  dashboard
                </v-list-item-title>
                <v-list-item-subtitle>General controllers</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item-group
              mandatory
              v-model="currentControllerId"
              color="cyan darken-2"
            >
              <v-list-item rounded @click="setController('overview')">
                <v-list-item-content> Overview </v-list-item-content>
              </v-list-item>
              <v-list-item @click="setController('subjects')">
                <v-list-item-content> Subjects </v-list-item-content>
              </v-list-item>
              <v-list-item @click="setController('students')">
                <v-list-item-content> Students </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col>
        <v-container>
          <div v-if="view('overview')">Overview</div>
          <div v-if="view('subjects')">Subjects</div>
          <div v-if="view('students')">Students</div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/**
 * Teacher dashboard for interaction with the system
 */
export default {
  name: "Dashboard",

  data() {
    return {
      currentControllerId: 0,
      controller: "overview",
    };
  },

  methods: {
    view: function (v) {
      return v === this.controller;
    },

    setController: function (c) {
      this.controller = c;
    },
  },
};
</script>

<style scoped>
.fixIndex {
  z-index: 1;
}
</style>
