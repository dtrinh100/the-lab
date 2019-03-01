import BaseEvents from "@/models/BaseEvents";
import mockResults from "../mocks/searchMocks";

describe("BaseEvents", () => {
  describe(" BaseEvents formatting", () => {
    const event = Object.create(BaseEvents);
    const completeEvent = mockResults._embedded.events[0];
    event.populate(completeEvent);
    it("should format the segment field to all uppercase letters", () => {
      expect(event.segment).toEqual("SPORTS");
    });
    it("should format the genre field to all uppercase letters", () => {
      expect(event.genre).toEqual("ROBOS");
    });
    it("should format the subGenre field to all uppercase letters", () => {
      expect(event.subGenre).toEqual("TOP DANCING ROBOTS");
    });
  });
  describe("Incomplete BaseEvents", () => {
    const event = Object.create(BaseEvents);
    const incompleteEvent = mockResults._embedded.events[1];
    event.populate(incompleteEvent);

    it("should only populate the dates field if the dates field exists", () => {
      expect(event.date).toEqual("TBD");
    });
    it("should only populate the segment field if the segment field exists", () => {
      expect(event.segment).toEqual("");
    });
    it("should only populate the genre field if the genre field exists", () => {
      expect(event.genre).toEqual("");
    });
    it("should only populate the subGenre field if the subGenre field exists", () => {
      expect(event.subGenre).toEqual("");
    });
  });
});
