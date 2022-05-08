let valorIngresado: number = Number(prompt("ingrese un valor"));
let valoresMáximos: number = 0;
let valoresTotales: number = 0;
let porcentajeDeMaximos: number = 0;

while (valorIngresado !== 0) {
  if (valorIngresado > 0) {
    valoresMáximos++;
  }
  valoresTotales++;
  valorIngresado = Number(prompt("ingrese un valor"));
}
if (valoresTotales > 0) {
  porcentajeDeMaximos = (valoresMáximos * 100) / valoresTotales;
  console.log(
    valoresMáximos +
      " valores positivos, " +
      porcentajeDeMaximos +
      "% del total de valores ingresados"
  );
}
