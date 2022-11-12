const { Restaurant } = require("../models/restaurants");

describe("Restaurant", () => {
  it("should be a Restaurant model", () => {
    const model = Restaurant;

    expect(new model).toBeInstanceOf(Restaurant);
  })
})