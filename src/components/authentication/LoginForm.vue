<template>
  <v-form v-model="isValid">
    <v-container>
      <v-text-field
        v-model="username"
        name="username"
        label="Username"
        counter="16"
      ></v-text-field>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      isValid: false,
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>
