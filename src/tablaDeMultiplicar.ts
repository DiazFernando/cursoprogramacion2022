let numeroParaMultiplicar : number = Number(prompt("Ingrese el numero que desea multiplicar"));
let hastaQueNumeroMultiplicar : number = Number(prompt("Hasta que desea multiplicar"));
let resultado : number = 0;

for (let contador : number = 1; contador <= hastaQueNumeroMultiplicar; contador++) {
  resultado = numeroParaMultiplicar*contador;
  console.log(numeroParaMultiplicar + "x" + contador + " = " + resultado);
}
