<template>
  <v-navigation-drawer permanent cliped class="lighten-5">
    <v-list shaped dense>
      <v-list-item class="py-1">
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-uppercase">
            <v-icon dense>mdi-view-dashboard</v-icon> dashboard
          </v-list-item-title>
          <v-list-item-subtitle>General management</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item-group
        mandatory
        v-model="currentControllerId"
        color="cyan darken-2"
      >
        <template v-for="controller in controllerList">
          <v-list-item
            :key="controller.name"
            @click="$emit('setController', controller.name)"
          >
            <v-list-item-icon>
              <v-icon dense>{{ controller.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ controller.text }}
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/**
 * The left panel with list of control sections to be selected
 */
export default {
  name: "DashboardControlPanel",

  data() {
    return {
      currentControllerId: 0,
      controllerList: [
        { name: "overview", text: "Overview", icon: "mdi-card-search-outline" },
        { name: "subjects", text: "Subjects", icon: "mdi-shape-outline" },
        { name: "students", text: "Students", icon: "mdi-google-classroom" },
      ],
    };
  },
};
</script>
