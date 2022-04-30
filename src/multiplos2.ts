// variable para primer numero
let numero1: number = Number(prompt("ingrese el primer numero"));
//variable para segundo numero
let numero2: number = Number(prompt("ingrese el segundo numero"));
//variable para la suma
let suma: number = 0;

//bucle para realizar la suma de los 2 numeros ingresados
for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
for (let indice: number = numero1; indice >= numero2; indice--) {
  suma = suma + indice;
}
console.log(suma);
