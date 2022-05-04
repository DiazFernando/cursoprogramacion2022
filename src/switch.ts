let num1: number = Number(prompt("ingrese el primer numero"));
let num2: number = Number(prompt("ingrese el segundo numero"));
let num3: number = Number(prompt("ingrese el tercer numero"));

if (num1 > num2 && num1 > num3) {
  console.log("el numero mayor ingresado es " + num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("el numero mayor ingresado es " + num2);
} else if (num3 > num1 && num3 > num2) {
  console.log("el numero mayor ingresado es " + num3);
} else {
  console.log("no se puede determinar");
}

/*let numeroIngresado: number = Number(prompt("ingrese un numero"));
let numeroPar: boolean = true;
if (numeroIngresado % 2 === 0) {
  numeroPar = true;
} else {
  numeroPar = false;
}

switch (numeroPar) {
  case true:
    if (numeroIngresado === 0) {
      console.log("el numero ingresado es par");
    }
    break;
  case false:
    console.log("el numero ingresado es impar");
    break;
}
*/
