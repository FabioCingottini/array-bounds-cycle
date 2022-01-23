const {getElement} = require("./index");

describe("Test index.js::getElement(...)", () => {
  it("should access the correct numbers", () => {
    // arrange
    const accessibleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expectedValues = [...accessibleArray, ...accessibleArray];
    const computedValues = [];

    // act
    for (let i = 0; i < accessibleArray.length * 2; i++) {
      const computedValue = getElement(accessibleArray, i);
      computedValues.push(computedValue);
    }

    // arrange
    expect(computedValues).toEqual(expectedValues)
  });
});
