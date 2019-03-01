import search from "@/store/modules/search";
import mockResults from "../../mocks/searchMocks";

let url = "";
let mockError = false;
jest.mock("axios", () => ({
  get: _url => {
    return new Promise(resolve => {
      if (mockError) throw Error();
      url = _url;
      resolve({ data: mockResults });
    });
  }
}));

describe("Search store", () => {
  describe("Search mutations", () => {
    describe("SET_KEYWORD", () => {
      it("should update the keyword state given a payload", () => {
        const state = {
          keyword: ""
        };
        search.mutations.SET_KEYWORD(state, "robots");
        expect(state.keyword).toEqual("robots");
      });
    });
    describe("SET_RESULTS", () => {
      it("should update the results state given a payload", () => {
        const state = {
          results: []
        };
        search.mutations.SET_RESULTS(state, mockResults._embedded.events);
        expect(state.results).toEqual([
          {
            date: "2016-03-06",
            _genre: "Robos",
            id: "wrj233j42o4j2",
            images: ["http://testing.jpg"],
            name: "Robot Dance Party 1",
            _segment: "Sports",
            _subGenre: "Top Dancing Robots"
          },
          {
            date: "TBD",
            _genre: "",
            id: "etetrefaf",
            images: ["http://testingihi.jpg"],
            name: "Robot Dance Party II",
            _segment: "",
            _subGenre: ""
          }
        ]);
      });
    });
  });
  describe("Search actions", () => {
    const commit = jest.fn();
    describe("getKeyword", () => {
      it("should commit the keyword to the store", () => {
        search.actions.getKeyword({ commit }, "testing");
        expect(commit).toHaveBeenCalledWith("SET_KEYWORD", "testing");
      });
    });
    describe("fetchResults", () => {
      it("should commit the results to the store", async () => {
        const events = mockResults._embedded.events;
        await search.actions.fetchResults(
          { commit },
          { keyword: "testing", size: 10 }
        );
        expect(url).toBe(
          `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${
            process.env.VUE_APP_KEY
          }`
        );
        expect(commit).toHaveBeenCalledWith("SET_RESULTS", events);
      });
      it("should throw an error", async () => {
        console.log = jest.fn();
        mockError = true;
        await expect(
          search.actions.fetchResults({ commit }, {})
        ).rejects.toThrow();
      });
    });
  });
});
