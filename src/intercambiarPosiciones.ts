//Funcion para dar un numero aleatorio entre un numero minimo y un maximo cargados como parametros
function numeroAleatorio(min, max): number {
  return Math.floor(Math.random() * max - min) + min;
}

//Funcion para cargar numeros aleatorios a un arreglo
function cargarNumerosAleatorios(array: number[]) {
  for (let i: number = 0; i < array.length; i++) {
    array[i] = numeroAleatorio(0, 100);
  }
}

//Funcion para sumar dos arreglos y cargarlos en un tercer arreglo
function sumarArreglos() {
  for (let i: number = 0; i < array1.length; i++) {
    array3[i] = array1[i] + array2[i];
  }
}
//Funcion para intercambiar posiciones
function intercambiarPosicionDeArreglo(arr: number[], x: number, y: number) {
  let aux: number;
  aux = arr[x];
  arr[x] = arr[y];
  arr[y] = aux;
}

//funcion para invertir un arreglo
function invertirArreglo(arr, s) {
  let i, d, aux;
  i = 0;
  d = s - 1;
  while (i < d) {
    intercambiarPosicionDeArreglo(arr, i, d);
    i = i + 1;
    d = d - 1;
  }
}

let arreglo: number[] = [1, 2, 3, 4];

invertirArreglo(arreglo, 4);
console.log(arreglo);
