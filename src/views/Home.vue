<template>
  <v-container>
    <v-row class="full-height" align-content="center">
      <v-col>
        <p class="text-center text-h2 font-weight-bold">TEACHER DASHBOARD</p>
        <v-divider class="my-7"></v-divider>
        <p class="text-center text-h5 font-italic">
          Crie uma conta para começar...
        </p>
        <router-link to="/dashboard">dashboard</router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
