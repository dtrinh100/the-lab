import SearchAPI from "@/utils/api/SearchAPI";
import BaseEvents from "@/models/BaseEvents";

const state = {
  results: [],
  keyword: ""
};

const mutations = {
  SET_RESULTS(state, payload) {
    payload.forEach(result => {
      const event = Object.create(BaseEvents);
      event.populate(result);
      state.results.push(event);
    });
  },
  SET_KEYWORD(state, payload) {
    state.keyword = payload;
  }
};

const actions = {
  async fetchResults(context, params) {
    return SearchAPI.getSearch(params)
      .then(results => {
        let events;
        if (results._embedded) {
          events = results._embedded.events;
        } else {
          events = [];
        }
        context.commit("SET_RESULTS", events);
      })
      .catch(e => {
        throw Error(e);
      });
  },
  getKeyword(context, payload) {
    return context.commit("SET_KEYWORD", payload);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
