<template>
  <v-container fluid class="pa-0">
    <!-- dashboard main navigation  -->
    <DashboardTopNavigation />

    <v-row>
      <v-col>
        <!-- dashboard left control panel -->
        <DashboardControlPanel @setController="setController" />
      </v-col>

      <!-- main content area for the controller components ocupy -->
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
import DashboardTopNavigation from "../components/dashboard/DashboardTopNavigation";
import DashboardControlPanel from "../components/dashboard/DashboardControlPanel";

/**
 * Teacher dashboard for interaction with the system
 */
export default {
  name: "Dashboard",

  components: {
    DashboardTopNavigation,
    DashboardControlPanel,
  },

  data() {
    return {
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
