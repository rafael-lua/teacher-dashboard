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
        <v-btn @click="changeUsername('new name')"
          >temp button {{ user }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",

  computed: {
    // local computeds,

    ...mapState("user", {
      user: (state) => state.username,
    }),
  },

  methods: {
    // local methods,

    ...mapActions("user", {
      changeUsername: "changeUsername",
    }),

    // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  },
};
</script>

<style scoped>
.full-height {
  height: 100vh;
}
</style>
