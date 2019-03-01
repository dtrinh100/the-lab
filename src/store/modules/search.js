import SearchAPI from "@/utils/api/SearchAPI";
import BaseEvents from "@/models/BaseEvents";

const state = {
  results: [],
  keyword: "",
  size: 10
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
    const results = await SearchAPI.getSearch(params).catch(error => {
      throw Error(error);
    });
    const events = results._embedded.events;
    context.commit("SET_RESULTS", events);
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
