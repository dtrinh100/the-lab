import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductSearch from "@/components/ProductSearch.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductSearch", () => {
  let store;
  let actions;
  let mutations;
  let state;
  let search;
  let wrapper;

  beforeEach(() => {
    actions = {
      getKeyword: jest.fn()
    };

    mutations = {
      SET_KEYWORD: jest.fn()
    };

    state = {
      keyword: ""
    };

    search = {
      namespaced: true,
      state,
      mutations,
      actions
    };

    store = new Vuex.Store({
      modules: {
        search
      }
    });

    wrapper = shallowMount(
      ProductSearch,
      {
        propsData: {
          reset: false
        },
        computed: {
          keyword: () => ""
        },
        stubs: ["font-awesome-icon"],
        store
      },
      localVue
    );
  });

  describe("ProductSearch User Interface", () => {
    it("has an input field for searching", () => {
      expect(wrapper.contains("input")).toBe(true);
    });

    it("has an button for searching", () => {
      expect(wrapper.contains("button")).toBe(true);
    });
  });
});
