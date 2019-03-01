import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductResults from "@/components/ProductResults.vue";
import { search } from "./mocks/searchModulesMocks";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductResults", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        search
      }
    });

    wrapper = shallowMount(ProductResults, {
      computed: {
        keyword: () => "",
        results: () => []
      },
      store,
      localVue
    });
  });
});
