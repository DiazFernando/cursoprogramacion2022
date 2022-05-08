let valorIngresado: number = Number(prompt("ingrese un valor")); // variable para ingresar un numero entero
let valoresMáximos: number = 0;  // variable para cantidad de valores máximos ingresados
let valoresTotales: number = 0;  // variable para la cantidad de valores ingresados (cualquier numero entero)
let porcentajeDeMáximos: number = 0;  //Variable para el porcentaje de valores maximos ingresados sobre el total

// mientras el valor ingresado sea distinto a 0 inciar el bucle
while (valorIngresado !== 0) {
  if (valorIngresado > 0) { //si el valor ingresado es mayor a 0
    valoresMáximos++;  // suma 1 por cada vuelta en la variable de valores maximos
  }
  valoresTotales++; // suma 1 por cada velta en la variable de valores totales
  valorIngresado = Number(prompt("ingrese un valor")); // si el valor ingresado es distinto a 0 volver a ingresar un numero entero
}
if (valoresTotales > 0) {  // si la variable valoresTotales es mayor a 0 realizar el calculo del porcentaje
  porcentajeDeMáximos = (valoresMáximos * 100) / valoresTotales; // 
  console.log(
    valoresMáximos + " valores positivos, " + porcentajeDeMáximos + "% del total de valores ingresados");
}
