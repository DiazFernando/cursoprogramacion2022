//Funcion para dibujar linea
function dibujarLinea() {
  let linea: string = "-";
  for (let index = 1; index < 30; index++) {
    linea = linea + "-";
  }
  console.log(linea);
}
//Funcion para sumar
function sumar(valor1: number, valor2: number, valor3: number): number {
  valor3 = valor1 + valor2;
  return valor3;
}
//funcion para restar
function restar(valor1: number, valor2: number, valor3: number): number {
  valor3 = valor1 - valor2;
  return valor3;
}
//Funcion para dividir
function dividir(valor1: number, valor2: number, valor3: number): number {
  valor3 = valor1 / valor2;
  return valor3;
}
//Funcion para multiplicar
function multiplicar(valor1: number, valor2: number, valor3: number): number {
  valor3 = valor1 * valor2;
  return valor3;
}
//Funcion para realizar el calculo correspondiente
function calculadorConSwitch(
  valor1: number,
  valor2: number,
  valor3: number,
  valor4:number
) {
  //Estructura de control - Selección Multiple
  switch (valor3) {
    //si el usuario selecciona el 1 se realiza la suma
    case 1:
      valor4 = sumar(valor1, valor2, valor4);
      dibujarLinea();
      console.log("El resultado suma es: " + valor4);
      dibujarLinea();
      break;

    //Si el usuario selecciona el 2 se realiza la resta
    case 2:
      valor4 = restar(valor1, valor2, valor4);
      dibujarLinea();
      console.log("El resultado resta es: " + valor4);
      dibujarLinea();
      break;

    //Si el usuario selecciona el 3 se realiza la división
    case 3:
      valor4 = dividir(valor1, valor2, valor4);
      dibujarLinea();
      console.log("El resultado división es: " + valor4);
      dibujarLinea();
      break;

    //Si el usuario selecciona el 4 se realiza la multiplicación
    case 4:
      valor4 = multiplicar(valor1, valor2, valor4);
      dibujarLinea();
      console.log("El resultado de la multiplicación es: " + valor4);
      dibujarLinea();
      break;

    //Si el usuario selecciona un numero mayor a cuatro no se realiza ninguna opción
    default:
      dibujarLinea();
      console.log("Operación erronea, seleccione una opción valida");
      dibujarLinea();
      break;
  }
  return valor4;
}
//Variable que declara el primer numero ingresado por el usuario
let numero1: number = Number(prompt("ingrese el primer numero"));
//Variable que declara el segundo numero ingresado por el usuario
let numero2: number = Number(prompt("ingrese el segundo numero"));
//Variable para seleccionar la operación que se desea realizar
let operación: number = Number(
  prompt("Eliga operación: 1-Sumar, 2-Restar, 3-Dividir, 4-Multiplicar")
);
//Variable para guardar el valor del resultado final
let resultado: number;

calculadorConSwitch(numero1, numero2, operación, resultado);
