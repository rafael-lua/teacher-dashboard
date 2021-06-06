import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { headers, API_SERVER } from "../utils/config";

import user from "./modules/user";

Vue.use(Vuex);

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
    async checkCredentials({ commit }, credentials) {
      console.log(process.env.AUTH);
      // This is not how you should do, but for this simple application, its fine.
      const response = await axios.get(`${API_SERVER}/users`, { headers });
      const users = response.data;
      const user = users.find((u) => u.username === credentials.username);
      if (user && user.password === credentials.password) {
        commit("authenticate", true);
        commit("user/setUser", { user });
      }
    },

    logout({ commit, state }) {
      if (state.authenticated) {
        commit("user/clearUser");
        commit("authenticate", false);
      }
    },
  },

  modules: {
    user,
  },
});
