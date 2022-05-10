/* 
*Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
*Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
*Al aumentar el número de dados la probabilidad de sacar todos 6 es cada vez menor

*Escriba un programa que calcule la probabilidad de sacar todos los dados 6, siendo que tiramos N dados (dato ingresado por el usuario)
*/

let dadosUtilizados : number = Number(prompt("Ingrese la cantidad de dados que va a lanzar"));
let probabilidadDelDado : number = 1/6;
let probabilidadesDeDobleSeis : number;

if (dadosUtilizados === 1) {
  probabilidadesDeDobleSeis = probabilidadDelDado;
  } else if (dadosUtilizados > 1) {
    probabilidadesDeDobleSeis = (probabilidadDelDado**dadosUtilizados);
  }
  console.log ("la probabilidad de sacar doble 6 es: " + probabilidadesDeDobleSeis);

/*let probFinal : number = 1;

for (let contador : number = 1; contador <= dadosUtilizados; contador++) {
  probFinal = probFinal*probabilidadDelDado
}
console.log(probFinal)
*/