const { Customer } = require("../models/customers");

describe("Customer", () => {
  it("should be a Customer model", () => {
    const model = Customer;

    expect(new model).toBeInstanceOf(Customer);
  })
})