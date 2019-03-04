import imageHelper from "@/utils/imageHelper";

describe("imageHelper", () => {
  const mockImageArray = [
    {
      url: "testing1.jpg",
      height: 115
    },
    { url: "testing2.jpg", height: 1532 },
    { url: "testing3.jpg", height: 223 }
  ];

  it("should return an image object that matches the given image height parameter", async () => {
    const expectedResult = { url: "testing2.jpg", height: 1532 };
    const result = imageHelper(mockImageArray, 1532);
    expect(result).toEqual(expectedResult);
  });
  it("should return an empty object if the image height parameters doesn't match anything in the image array", async () => {
    const expectedResult = {};
    const result = imageHelper(mockImageArray, 98);
    expect(result).toEqual(expectedResult);
  });
});
