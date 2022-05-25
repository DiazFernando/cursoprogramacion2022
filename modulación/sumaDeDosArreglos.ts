function cargarVectores(vectorACargar: number[]): void {
  for (let indice: number = 0; indice < vectorACargar.length; indice++) {
    vectorACargar[indice] = Number(prompt("Ingrese numeros para sumar"));
  }
}

function sumarVectores(
  vector1: number[],
  vector2: number[],
  vector3: number[]
): void {
  for (let indice: number = 0; indice < vector3.length; indice++) {
    vector3[indice] = vector1[indice] + vector2[indice];
    /*console.log(vector3[indice]);*/
  }
}

function mostrarResultado(resultado: number[]): void {
  for (let indice: number = 0; indice < resultado.length; indice++) {
    console.log(resultado[indice]);
  }
}

//primer arreglo que almacena los primeros 6 numeros ingresados por el usuario
let vectores1: number[] = new Array(6);
//segundo arreglo que almacena el segundo bloque de 6 numeros ingresados por el usuario
let vectores2: number[] = new Array(6);
//arreglo que almacena la suma de los numeros ingresados por el usuario
let sumaDeVectores: number[] = new Array(6);

cargarVectores(vectores1);
cargarVectores(vectores2);
sumarVectores(vectores1, vectores2, sumaDeVectores);
mostrarResultado(sumaDeVectores);
