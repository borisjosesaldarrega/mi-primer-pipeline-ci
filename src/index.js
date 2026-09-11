function saludar(nombre = "mundo") {
  return `Hola, ${nombre}!`;
}

if (require.main === module) {
  console.log(saludar());
}

module.exports = { saludar };
