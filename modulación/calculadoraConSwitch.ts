//Funcion para dibujar linea
function dibujarLinea() {
  let linea: string = "-";
  for (let index = 0; index <= 5; index++) {
    linea = linea + linea;
  }
  console.log(linea);
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
let resultado: number = 0;

switch (
  operación //Estructura de control - Selección Multiple
) {
  case 1: //si el usuario selecciona el 1 se realiza la suma
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado suma es: " + resultado);
    dibujarLinea();
    break;

  case 2: //Si el usuario selecciona el 2 se realiza la resta
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado resta es: " + resultado);
    dibujarLinea();
    break;

  case 3: //Si el usuario selecciona el 3 se realiza la división
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado división es: " + resultado);
    dibujarLinea();
    break;

  case 4: //Si el usuario selecciona el 4 se realiza la multiplicación
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es: " + resultado);
    dibujarLinea();
    break;

  default:
    //Si el usuario selecciona un numero mayor a cuatro no se realiza ninguna opción
    dibujarLinea();
    console.log("Operación erronea, seleccione una opción valida");
    dibujarLinea();
    break;
}
