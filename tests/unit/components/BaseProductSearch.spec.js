import { shallowMount } from "@vue/test-utils";
import BaseProductSearch from "@/components/BaseProductSearch.vue";

describe("BaseProductSearch", () => {
  describe("BaseProductSearch User Interface", () => {
    it("has an input field for searching", () => {
      const wrapper = shallowMount(BaseProductSearch, {
        stubs: ["font-awesome-icon"]
      });
      expect(wrapper.contains("input")).toBe(true);
    });
    it("has an button for searching", () => {
      const wrapper = shallowMount(BaseProductSearch, {
        stubs: ["font-awesome-icon"]
      });
      expect(wrapper.contains("button")).toBe(true);
    });
  });
});
