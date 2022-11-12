const { Dish } = require("../models/dishes");

describe("Dish", () => {
  it("should be a Dish model", () => {
    const model = Dish;

    expect(new model).toBeInstanceOf(Dish);
  })
})