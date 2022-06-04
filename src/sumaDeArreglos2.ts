//Funcion para dar un numero aleatorio entre un numero minimo y un maximo cargados como parametros
function numeroAleatorio(min,max):number {
  return Math.floor(Math.random()* max - min)+min;
}

//Funcion para cargar numeros aleatorios a un arreglo
function cargarNumerosAleatorios(array:number[]) {
  for (let i:number=0;i<array1.length;i++) {
    array[i]= numeroAleatorio(0,100);
  }
}

//Funcion para sumar dos arreglos y cargarlos en un tercer arreglo
function sumarArreglos() {
  for(let i:number=0;i<array1.length;i++) {
    array3[i] = array1[i] + array2[i]
  }
}

//Variable para determinar la longitud de los arreglos
let longitud : number = Number(prompt("Ingrese la longitud del los arreglos"));
//Arreglo 1 almacena numeros aleatorios
let array1: number[] = new Array(longitud);
//Arreglo 2 almacena numeros aleatorios
let array2: number[] = new Array(longitud);
//Arreglo 3 va a almacenar la suma de los arreglos 1 y 2.
let array3: number[] = new Array(longitud);

cargarNumerosAleatorios(array1);
cargarNumerosAleatorios(array2);
sumarArreglos();
console.log("arreglo 1: ", array1);
console.log("arreglo 2: ", array2);
console.log("suma de los arreglos: ", array3);
