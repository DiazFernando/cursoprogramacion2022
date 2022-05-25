function dibujarLinea() {
   let linea : string = "-";
  for (let index = 0; index <=5; index++) {
     linea = linea + linea;
    }
    console.log(linea);
}


let numero1 : number = Number(prompt("ingrese el primer numero"));
let numero2 : number = Number(prompt("ingrese el segundo numero"));
let operación : number = Number(prompt("ingrese 1 para sumar, 2 para restar"));
let resultado : number = 0;
if (operación===1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
} else if (operación===2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
}