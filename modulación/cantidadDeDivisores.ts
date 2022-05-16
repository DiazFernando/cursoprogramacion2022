//funcion para saber si un numero es multiplo
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

//Funcion para calcular la cantidad de divisores que tiene el numero ingresado por el usuario
function cantidadDeDivisores(numeroIngresado: number): number {
  let cantidad: number = 0;
  let contador: number;
  for (contador = 0; contador <= numeroIngresado; contador++) {
    if (esMultiplo(numeroIngresado, contador) === true) {
      cantidad++;
    }
  }
  return cantidad;
}

//variable para ingresar un numero por el usuario
let numeroIngresado: number = Number(prompt("ingrese un numero para saber cuantos divisores tiene:"));
console.log("el numero " + numeroIngresado + " tiene " + cantidadDeDivisores(numeroIngresado) + " divisores");
