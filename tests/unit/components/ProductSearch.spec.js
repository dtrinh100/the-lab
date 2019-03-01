import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductSearch from "@/components/ProductSearch.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter();

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

    wrapper = shallowMount(ProductSearch, {
      propsData: {
        reset: false
      },
      computed: {
        keyword: () => ""
      },
      stubs: ["font-awesome-icon"],
      store,
      localVue,
      router
    });
  });

  describe("ProductSearch User Interface", () => {
    it("has an input field for searching", () => {
      expect(wrapper.contains("input")).toBe(true);
    });
    it("has an button for searching", () => {
      expect(wrapper.contains("button")).toBe(true);
    });
    it("calls the getKeyword action when an input event is triggered", () => {
      const input = wrapper.find("input");
      input.element.value = "testing";
      input.trigger("input");
      expect(actions.getKeyword).toHaveBeenCalled();
    });
    it("should push you to a new route when you click the button", () => {});
  });
});
