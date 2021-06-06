import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

import user from "./modules/user";

Vue.use(Vuex);

const tempUsersData = [
  { username: "admin", password: "admin", name: "admin" },
  { username: "rafael", password: "123", name: "Rafael" },
];

/**
 * The global state hold general information, like the authentication status.
 */

export default new Vuex.Store({
  state: {
    authenticated: false,
  },

  mutations: {
    authenticate(state, auth) {
      state.authenticated = auth;
    },
  },

  actions: {
    // Can be async
    // Can commit multiple mutations
    // `context` is being destructured to commit. There is also `dispatch`, etc...
    checkCredentials({ commit }, credentials) {
      const user = tempUsersData.find(
        (u) => u.username === credentials.username
      );
      if (user && user.password === credentials.password) {
        commit("authenticate", true);
        commit("user/setUser", { user });
      }
    },

    logout({ commit, state }) {
      if (state.authenticated) {
        commit("user/clearUser");
        commit("authenticate", false);
        router.push({ name: "Home" });
      }
    },
  },

  modules: {
    user,
  },
});
