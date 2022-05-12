//Funcion para dibujar linea
function dibujarLinea() {
  let linea: string = "-";
  for (let index = 1; index < 30; index++) {
    linea = linea + "-";
  }
  console.log(linea);
}
//Variable que declara el primer numero ingresado por el usuario
let numero1: number = Number(prompt("ingrese el primer numero"));
//Variable que declara el segundo numero ingresado por el usuario
let numero2: number = Number(prompt("ingrese el segundo numero"));
//Variable para seleccionar la operación que se desea realizar
let operación: number = Number(prompt("Eliga operación: 1-Sumar, 2-Restar, 3-Dividir, 4-Multiplicar"));
//Variable para guardar el valor del resultado final
let resultado: number = 0;

//Estructura de control - Selección Multiple
switch (operación) {
  //si el usuario selecciona el 1 se realiza la suma
  case 1: 
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado suma es: " + resultado);
    dibujarLinea();
    break;

    //Si el usuario selecciona el 2 se realiza la resta
  case 2: 
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado resta es: " + resultado);
    dibujarLinea();
    break;

    //Si el usuario selecciona el 3 se realiza la división
  case 3: 
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado división es: " + resultado);
    dibujarLinea();
    break;

    //Si el usuario selecciona el 4 se realiza la multiplicación
  case 4: 
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicación es: " + resultado);
    dibujarLinea();
    break;

    //Si el usuario selecciona un numero mayor a cuatro no se realiza ninguna opción
  default:
    dibujarLinea();
    console.log("Operación erronea, seleccione una opción valida");
    dibujarLinea();
    break;
}
