function cargar(arreglo:number[], cantidad:number) {
let i : number;
for (i = 0 ; i<cantidad; i++ ) {
arreglo[i] = Number(prompt("Ingresar Numeros:"));
}
}

function escribirEnUnaLinea(arreglo:number[], cantidad:number) { 
  let i:number;
  let vector:string = "" ;
  for (i = 0 ; i<cantidad; i++) {
  vector += `${arreglo[i]} `;
  }
  console.log (vector); 
  }

function intercambiar(arreglo:number[], i:number, j:number) { 
  let aux:number; 
  aux = arreglo[i] ;
  arreglo[i] = arreglo[j] ;
  arreglo[j] = aux ;
  }

  function comparar(arreglo : number[], i : number, j : 
    number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
    }

  function seleccion(arreglo:number[], cantidad:number) {
    let i:number, j:number, posicion:number; 
    for (i = 0; i < (cantidad-1); i++) {
    posicion = i;
    for (j = i + 1; j < cantidad; j++) {
      if (comparar(arreglo, posicion, j) == 1) {
      posicion = j;
    } 
  }
  intercambiar(arreglo, i, posicion);
  }
}

//Algoritmo Orden 
let lim: number = 6;
let a: number[] = new Array(lim);  
cargar(a, lim); 
escribirEnUnaLinea(a, lim);
//seleccion 
seleccion(a, lim); 
escribirEnUnaLinea(a, lim);