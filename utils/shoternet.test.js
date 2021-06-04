const shortener = require("./shorterner")

test("Should return a when parameter is 0", () => {
    expect(shortener.encode(0)).toBe("a")
})

test("Should return b when parameter is 1", () => {
    expect(shortener.encode(1)).toBe("b")
})
