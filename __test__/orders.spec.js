const { Order } = require("../models/orders");

describe("Order", () => {
  it("should be an Order model", () => {
    const model = Order;

    expect(new model).toBeInstanceOf(Order);
  })
})