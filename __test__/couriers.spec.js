const { Courier } = require("../models/couriers");

describe("Courier", () => {
  it("should be a Courier model", () => {
    const model = Courier;

    expect(new model).toBeInstanceOf(Courier);
  })
})