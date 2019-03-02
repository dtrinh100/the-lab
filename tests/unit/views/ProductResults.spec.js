import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductResults from "@/views/ProductResults.vue";
import { search } from "../mocks/searchModuleMocks";
import Vuex from "vuex";
import flushPromises from "flush-promises";

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

  it("should call fetchData when created", async () => {
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
    expect(fetchData).toHaveBeenCalled();
  });

  it("should call fetchData when the URL gets updated", () => {
    let fetchData = jest.fn();
    shallowMount(ProductResults, {
      computed: {
        keyword: () => "",
        results: () => []
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

    expect(fetchData).toHaveBeenCalled();
  });

  it("should set the right error and loading states after fetchData is called", async () => {
    const wrapper = shallowMount(ProductResults, {
      computed: {
        keyword: () => "",
        results: () => []
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
    wrapper.vm.fetchData("testing");
    await flushPromises();
    expect(wrapper.vm.loading).toBe(false);
    expect(wrapper.vm.error).toBe(false);
  });
});
