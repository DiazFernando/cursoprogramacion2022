//If-Else

/*let numeroIngresado : number = Number(prompt("ingrese un numero"));
  if (5 < numeroIngresado) {
    console.log("toma el camino de la derecha");
    } else {
      console.log("toma el camino de la izquierda");
    }*/

//operadores logicos

let numeroIngresado: number = Number(prompt("ingrese un numero"));

if (5 < numeroIngresado && numeroIngresado < 8) {
  console.log("Ambos son verdaderos");
}

if (numeroIngresado === 7 || numeroIngresado > 10) {
  console.log("Uno es verdadero, el otro no");
}

if (!(numeroIngresado === 6)) {
  console.log("Negación");
}
