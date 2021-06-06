<template>
  <ValidationObserver ref="observer" v-slot="{ valid }">
    <v-form @submit.prevent="handleSubmit">
      <v-container class="d-flex justify-center">
        <v-card elevation="1" class="pa-2" outlined shaped :width="cardWidth">
          <!-- providers can be refactored into smaller components, 
          see: https://vee-validate.logaretm.com/v3/advanced/refactoring-forms.html -->
          <v-card-title>Log-in to start:</v-card-title>
          <v-alert v-model="showAlert" dense outlined dismissible type="error">
            The credentials are not valid or doesn't exist.
          </v-alert>
          <v-row class="d-flex justify-center">
            <v-col cols="10">
              <!-- username text field and validation rules -->
              <ValidationProvider
                name="Username"
                v-slot="{ errors }"
                rules="required|min:4|max:16"
              >
                <v-text-field
                  v-model="username"
                  append-icon="mdi-account"
                  label="Username"
                  counter="16"
                  required
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>

              <!-- password text field and validation rules -->
              <ValidationProvider
                name="Password"
                v-slot="{ errors }"
                rules="required"
              >
                <v-text-field
                  v-model="password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  @click:append="showPassword = !showPassword"
                  required
                  :error-messages="errors"
                ></v-text-field>
              </ValidationProvider>
              <div
                class="
                  d-flex
                  flex-column
                  align-center
                  flex-sm-row
                  justify-space-between
                "
              >
                <v-btn
                  color="success"
                  elevation="2"
                  rounded
                  class="my-2 my-sm-0"
                  width="12em"
                  type="submit"
                  :disabled="!valid"
                  :loading="isChecking"
                >
                  Log-In
                  <v-icon right dark> mdi-account-arrow-right </v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  elevation="2"
                  rounded
                  class="my-2 my-sm-0"
                  width="10em"
                >
                  Sign Up
                  <v-icon right dark> mdi-pencil-plus </v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-form>
  </ValidationObserver>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, min, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("aggressive");

//https://vee-validate.logaretm.com/v3/guide/basics.html#messages
extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} has to be at least {length}",
});

extend("max", {
  ...max,
  message: "{_field_} max length is {length}",
});

/**
 * the login form for acessing the system dashboard
 */
export default {
  name: "LoginForm",

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      isChecking: false,
      showAlert: false,
    };
  },

  methods: {
    async handleSubmit() {
      // https://vee-validate.logaretm.com/v3/api/validate.html#validate
      this.isChecking = true;
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        await this.login({
          username: this.username,
          password: this.password,
        });
        this.isChecking = false;
        if (!this.authenticated) {
          this.showAlert = true;
        } else {
          // Succefully logged in, route it to the dashboard
          this.$router.push({ name: "Dashboard" });
        }
      }
      this.isChecking = false;
    },

    ...mapActions({
      login: "checkCredentials",
    }),
  },

  computed: {
    cardWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "95%";
        case "sm":
          return "75%";
        case "md":
        case "lg":
        case "xl":
          return "50%";
        default:
          return "100%";
      }
    },

    ...mapState({
      authenticated: (state) => state.authenticated,
    }),
  },
};
</script>
