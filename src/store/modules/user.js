const noUser = {
  username: "",
  name: "",
  surname: "",
};

/**
 * This module keep and modify the logged user data
 */

const module = {
  namespaced: true,

  state: {
    user: noUser,
  },

  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
    clearUser(state) {
      state.user = noUser;
    },
  },
};

export default module;
