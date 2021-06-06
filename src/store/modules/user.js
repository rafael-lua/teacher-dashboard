// Temporary state for testing purposes
const initialState = {
  username: "",
  name: "",
  surname: "",
};

/**
 * This module keep and modify the logged user data
 */

const module = {
  namespaced: true,

  state: initialState,

  mutations: {
    setUser(state, userData) {
      state = { ...state, userData };
    },
  },
};

export default module;
