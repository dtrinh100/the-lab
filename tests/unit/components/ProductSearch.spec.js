import { shallowMount, createLocalVue } from "@vue/test-utils";
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
      mocks: {
        $router: {
          push: pushSpy
        }
      }
    });
  });

  describe("ProductSearch User Interface", () => {
    it("has an input field for searching", () => {
      expect(wrapper.contains("input")).toBe(true);
    });
    it("has an button for searching", () => {
      expect(wrapper.contains("button")).toBe(true);
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
        path: "search",
        query: { keyword: "" }
      });
    });
    it("should clear the value when the reset prop is set to true", () => {
      const input = wrapper.find("input");
      input.element.value = "testing";

      expect(wrapper.find("input").element.value).toEqual("testing");

      wrapper.setProps({ reset: true });

      expect(wrapper.find("input").element.value).toEqual("");
    });
  });
});
