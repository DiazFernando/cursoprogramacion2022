/*let indice: number;
let cadena: string = "";
for (let indice: number = 1; indice <= 100; indice++) {
  if (indice % 2 === 0 || indice % 3 === 0);
  cadena = cadena + " " + indice;
}
console.log(cadena);
*/

/*let numero1 : number = Number(prompt("ingrese el primer numero"));
let numero2 : number = Number(prompt("ingrese el segundo numero"));

let suma : number = 0;

for(let indice : number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
console.log(suma);
*/

let numero1: number = Number(prompt("ingrese el primer numero"));
let numero2: number = Number(prompt("ingrese el segundo numero"));

let suma: number = 0;

for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
for (let indice: number = numero1; indice >= numero2; indice--) {
  suma = suma + indice;
}
console.log(suma);
