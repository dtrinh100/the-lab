import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductResults from "@/views/ProductResults.vue";
import { search } from "../mocks/searchModuleMocks";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductResults", () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        search
      }
    });
  });

  it("is called upon being created", () => {
    let fetchData = jest.fn();
    shallowMount(ProductResults, {
      computed: {
        keyword: () => "",
        results: () => []
      },
      methods: {
        fetchData
      },
      mocks: {
        $route: {
          query: {
            keyword: "testing"
          }
        }
      },
      store,
      localVue
    });
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(fetchData).toHaveBeenCalled();
  });
});
