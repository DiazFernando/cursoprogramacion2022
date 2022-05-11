/*Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.*/

function potenciar() {
  if (exponente === 0) {
    resultado = 1;
  } else {
    resultado = numeroBase ** exponente;
  }
  console.log("El resultado es " + resultado);
}

let numeroBase: number = Number(prompt("Ingrese el numero a base"));
let exponente: number = Number(prompt("Ingrese el exponente"));
let resultado: number = 0;

if (exponente >= 0) {
  potenciar();
}
