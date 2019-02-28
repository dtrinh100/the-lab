import SearchAPI from "@/utils/api/SearchAPI";
import BaseEvents from "@/models/BaseEvents";

const state = {
  results: [],
  keyword: "",
  size: 10,
  loading: true
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
  getSearch(context) {
    const params = {
      keyword: state.keyword,
      size: state.size
    };
    return SearchAPI.getSearch(params)
      .then(results => {
        context.commit("SET_RESULTS", results._embedded.events);
      })
      .catch(error => console.log(error))
      .finally(() => {
        state.loading = false;
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
