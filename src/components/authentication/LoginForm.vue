<template>
  <v-form v-model="isValid">
    <v-container class="d-flex justify-center">
      <v-card elevation="1" class="pa-2" outlined shaped width="50%">
        <v-card-title>Log-in in to start:</v-card-title>
        <v-row class="d-flex justify-center">
          <v-col cols="6">
            <v-text-field
              v-model="username"
              append-icon="mdi-account"
              name="username"
              label="Username"
              counter="16"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              label="Password"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <div class="d-flex justify-space-between">
              <v-btn color="success" elevation="2" rounded>
                Log-In
                <v-icon right dark> mdi-account-arrow-right </v-icon>
              </v-btn>
              <v-btn color="primary" elevation="2" rounded>
                Sign Up
                <v-icon right dark> mdi-pencil-plus </v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
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
      showPassword: false,
    };
  },
};
</script>
