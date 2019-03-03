import { shallowMount } from "@vue/test-utils";
import ProductInformation from "@/views/ProductInformation";
import mockResults from "../mocks/eventMocks";
import flushPromises from "flush-promises";

let mockError = false;
jest.mock("axios", () => ({
  get: () => {
    return new Promise(resolve => {
      if (mockError) throw Error();
      resolve({ data: mockResults });
    });
  }
}));

describe("ProductInformation", () => {
  let fetchData;
  beforeEach(() => {
    fetchData = jest.fn();
  });

  it("should call fetchData when created", async () => {
    shallowMount(ProductInformation, {
      methods: {
        fetchData
      },
      mocks: {
        $route: {
          params: { eventId: "123" }
        }
      }
    });
    expect(fetchData).toHaveBeenCalledWith("123");
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  it("should call fetchData when the URL gets updated", () => {
    const wrapper = shallowMount(ProductInformation, {
      mocks: {
        $route: {
          params: { eventId: "123" }
        }
      },
      methods: {
        fetchData
      }
    });

    wrapper.setData({
      $route: {
        params: { eventId: "323" }
      }
    });

    expect(fetchData).toHaveBeenCalledWith("323");
    expect(fetchData).toHaveBeenCalledTimes(2);
  });

  it("should properly handle an error", async () => {
    console.log = jest.fn();
    mockError = true;
    const parseData = jest.fn();

    const wrapper = shallowMount(ProductInformation, {
      mocks: {
        $route: {
          params: { eventId: "123" }
        }
      },
      methods: {
        parseData
      }
    });

    wrapper.vm.parseData(mockResults);
    await flushPromises();

    expect(wrapper.vm.error).toEqual(true);
    expect(wrapper.vm.loading).toEqual(false);
  });

  it("should parse the data and set the results", async () => {
    const wrapper = shallowMount(ProductInformation, {
      mocks: {
        $route: {
          params: { eventId: "123" }
        }
      }
    });
    wrapper.vm.parseData(mockResults);

    expect(wrapper.vm.result).toEqual({
      _genre: "Robos",
      _segment: "Sports",
      _subGenre: "Top Dancing Robots",
      date: "2016-03-06",
      id: "wrj233j42o4j2",
      images: ["http://testing.jpg"],
      name: "Robot Dance Party 1",
      pleaseNote: "I like pugs"
    });
  });
});
