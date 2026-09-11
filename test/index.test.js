const test = require("node:test");
const assert = require("node:assert/strict");
const { saludar } = require("../src/index");

test("genera el saludo esperado", () => {
  assert.equal(saludar("CI"), "Hola, CI!");
});
