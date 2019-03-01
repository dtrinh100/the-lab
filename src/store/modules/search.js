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
    return new Promise(async resolve => {
      const results = await SearchAPI.getSearch(params).catch(error => {
        throw Error(error);
      });
      if (results._embedded) {
        const events = results._embedded.events;
        resolve(context.commit("SET_RESULTS", events));
      }
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
