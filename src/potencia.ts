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
