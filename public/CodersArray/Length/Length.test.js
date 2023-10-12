import { numbers } from "../..";

describe("Given a Length function", () => {
  describe("When it receives a list of 4 elements", () => {
    test("Then should return 4", () => {
      const expectedResult = 4;

      const numberLength = numbers.length;

      expect(numberLength).toBe(expectedResult);
    });
  });
});
