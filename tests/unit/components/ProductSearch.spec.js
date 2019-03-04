import { mount, createLocalVue } from "@vue/test-utils";
import ProductSearch from "@/components/ProductSearch.vue";
import Vuex from "vuex";
import { search, actions } from "../mocks/searchModuleMocks";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductSearch", () => {
  let store;
  let wrapper;
  let pushSpy;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        search
      }
    });

    pushSpy = jest.fn();

    wrapper = mount(ProductSearch, {
      propsData: {
        reset: false
      },
      computed: {
        keyword: () => ""
      },
      stubs: ["font-awesome-icon"],
      store,
      localVue,
      mocks: {
        $router: {
          push: pushSpy
        },
        $route: {
          path: "/search"
        }
      }
    });
  });
  describe("ProductSearch functions", () => {
    it("calls the getKeyword action when an input event is triggered", () => {
      const input = wrapper.find("input");
      input.element.value = "testing";
      input.trigger("input");

      expect(actions.getKeyword).toHaveBeenCalled();
    });
    it("should push you to a new route when you click the button", () => {
      const button = wrapper.find("button");
      button.trigger("click");

      expect(pushSpy).toBeCalledWith({
        path: "/search",
        query: { keyword: "" }
      });
    });
  });
});
