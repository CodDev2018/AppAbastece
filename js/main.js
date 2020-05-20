import Binding from "./Binding.js";

const setterRadio = (element, data) => {
  if (element.value == data) {
    element.checked = true;
  }
};

const init = () => {
  const abastecimento = {
    data: "19/05/2020",
    km: 1000,
    litros: 40,
    valor: 200,
    combustivel: "Gasolina",
    completou: true,
  };
  const inputData = document.getElementById("inputData");
  const inputKm = document.getElementById("inputKM");
  const inputLitros = document.getElementById("inputLitros");
  const inputValor = document.getElementById("inputValor");
  const radioGasolina = document.getElementById("radioGasolina");
  const radioEtanol = document.getElementById("radioEtanol");
  const radioDiesel = document.getElementById("radioDiesel");
  const checkCompletou = document.getElementById("checkCompletou");

  new Binding(abastecimento, "data").addBinding(inputData, "value", "keyup");

  new Binding(abastecimento, "km").addBinding(inputKm, "value", "keyup");

  new Binding(abastecimento, "litros").addBinding(
    inputLitros,
    "value",
    "keyup"
  );

  new Binding(abastecimento, "valor").addBinding(inputValor, "value", "keyup");

  new Binding(abastecimento, "combustivel")
    .addBinding(radioGasolina, "value", "change", setterRadio)
    .addBinding(radioEtanol, "value", "change", setterRadio)
    .addBinding(radioDiesel, "value", "change", setterRadio);

  new Binding(abastecimento, "completou").addBinding(
    checkCompletou,
    "checked",
    "change"
  );
};

export default { init };
