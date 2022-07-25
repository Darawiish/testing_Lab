const {returnTwo, greeting, add} = require("./functions.js");

test("checkfor2", () => {
    expect(returnTwo()).toBe(2)
})


test("check greeting", () => {
    expect(greeting("James")).toBe("Hello, James")
    expect(greeting("Jill")).toBe("Hello, Jill")
})


test("how to add", () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})




