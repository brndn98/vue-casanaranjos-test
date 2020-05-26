import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    event: {},
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    setEvent(state, event) {
      state.event = event[0];
    },
  },
  actions: {
    fetchAllEvents({ commit }) {
      fetch("http://distritotec.itesm.mx/wp-json/wp/v2/eventos?per_page=5")
        .then((response) => response.json())
        .then((data) => {
          commit("setEvents", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchSingleEvent({ commit }, slug) {
      fetch("http://distritotec.itesm.mx/wp-json/wp/v2/eventos?slug=" + slug)
        .then((response) => response.json())
        .then((data) => {
          commit("setEvent", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
