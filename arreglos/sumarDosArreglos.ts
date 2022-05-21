//primer arreglo que almacena los primeros 6 numeros ingresados por el usuario
let vectores1: number = new Array(6);
//segundo arreglo que almacena el segundo bloque de 6 numeros ingresados por el usuario
let vectores2: number = new Array(6);
//arreglo que almacena la suma de los numeros ingresados por el usuario
let sumaDeVectores: number = new Array(6);

//bucle para ingresar los primeros 6 numeros al primer arreglo vectores1
for (let indice: number = 0; indice < 6; indice++) {
  vectores1[indice] = Number(prompt("Ingrese los primeros 6 numeros para sumar"));
}

//bucle para ingresar los segundos 6 numeros al arreglo vectores2
for (let indice: number = 0; indice < 6; indice++) {
  vectores2[indice] = Number(prompt("Ingrese los segundos 6 numeros para sumar"));
}

//bucle para sumar y almacenar los datos en el arreglo sumaDeVectores
for (let indice: number = 0; indice < 6; indice++) {
  sumaDeVectores[indice] = vectores1[indice] + vectores2[indice];
  console.log("La suma de " + vectores1[indice] + " + " + vectores2[indice] + " es: " + sumaDeVectores[indice]);
}
