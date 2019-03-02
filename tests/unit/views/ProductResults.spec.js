import { shallowMount, createLocalVue } from "@vue/test-utils";
import ProductResults from "@/views/ProductResults.vue";
import { search } from "../mocks/searchModuleMocks";
import Vuex from "vuex";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductResults", () => {
  let store;
  let fetchData;
  beforeEach(() => {
    fetchData = jest.fn();
    store = new Vuex.Store({
      modules: {
        search
      }
    });
  });

  it("should call fetchData when created", async () => {
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
    expect(fetchData).toHaveBeenCalledWith("testing");
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  it("should call fetchData when the URL gets updated", () => {
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
      methods: {
        fetchData
      },
      store,
      localVue
    });

    wrapper.setData({
      $route: {
        query: {
          keyword: "cool"
        }
      }
    });

    expect(fetchData).toHaveBeenCalledWith("cool");
    expect(fetchData).toHaveBeenCalledTimes(2);
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
