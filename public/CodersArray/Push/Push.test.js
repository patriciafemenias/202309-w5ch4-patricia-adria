describe("Given a Push function", () => {
  describe("When it receives a car", () => {
    test("Then it should return 4", () => {
      const car = "Opel";
      const cars = ["Lambo", "Ferrari", "Seat"];
      const expectedResult = 4;

      const pushCar = cars.push(car);

      expect(pushCar).toBe(expectedResult);
    });
  });
});
