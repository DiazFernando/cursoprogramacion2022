// variable para primer numero
let primerNumero: number = Number(prompt("ingrese el primer numero"));
//variable para segundo numero
let segundoNumero: number = Number(prompt("ingrese el segundo numero"));
//variable para la suma
let suma: number = 0;

//bucle para realizar la suma de los 2 numeros ingresados
for (let indice: number = primerNumero; indice <= segundoNumero; indice++) {
  suma = suma + indice;
}
for (let indice: number = primerNumero; indice >= segundoNumero; indice--) {
  suma = suma + indice;
}
console.log(suma);
