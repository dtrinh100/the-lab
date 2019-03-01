const actions = {
  getKeyword: jest.fn(),
  getResults: jest.fn()
};

const mutations = {
  SET_KEYWORD: jest.fn(),
  SET_RESULTS: jest.fn()
};

const state = {
  keyword: "",
  results: []
};

const search = {
  namespaced: true,
  state,
  mutations,
  actions
};

export { state, mutations, actions, search };
