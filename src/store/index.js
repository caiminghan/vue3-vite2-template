import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {},
    systemInfo: {},
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload.user;
    },
    SET_SYSTEM_INFO(state, payload) {
      state.systemInfo = payload;
    },
  },
  actions: {},
  modules: {},
});
