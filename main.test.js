const priceCheck = require("./main");
const { describe, expect, it } = require("@jest/globals");

describe("Price check function", () => {
  it("should return 2 errors", () => {
    expect(
      priceCheck(
        ["eggs", "milk", "cheese"],
        [2.89, 3.29, 5.79],
        ["eggs", "eggs", "cheese", "milk"],
        [2.89, 2.99, 5.97, 3.29]
      )
    ).toBe(2);
  });
});
