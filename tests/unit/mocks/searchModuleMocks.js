const actions = {
  getKeyword: jest.fn(),
  fetchResults: jest.fn()
};

const mutations = {
  SET_KEYWORD: jest.fn(),
  SET_RESULTS: jest.fn()
};

const state = {
  keyword: "",
  results: [],
  noResults: false
};

const search = {
  namespaced: true,
  state,
  mutations,
  actions
};

export { state, mutations, actions, search };
