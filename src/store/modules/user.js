const initialState = {
  username: "admin",
  password: "admin",
};

const module = {
  namespaced: true,

  state: initialState,

  mutations: {
    changeUsername(state, newUsername) {
      state.username = newUsername;
    },
  },

  actions: {
    // Can be async
    // Can commit multiple mutations
    // `context` is being destructured
    changeUsername({ commit }, newUsername) {
      const n = Math.floor(Math.random() * 100);
      commit("changeUsername", newUsername + n);
    },
  },
};

export default module;
