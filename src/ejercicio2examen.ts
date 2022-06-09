function cargar(v, l) {
  for (let i: number = 0; i < l; i++) {
    v[i] = Math.floor(Math.random() * 100);
  }
}
function mostrar(v, l): void {
  let c = "";
  for (let i: number = 0; i < l; i++) {
    c += v[i] + " ";
  }
  console.log(c);
}

function metodo(v, l, n): void {
  let oc: number;
  for (let i = 0; i < l; i++) {
    if (v[i] === n) {
      oc++;
    }
  }
}

let elem: number = Number(prompt("ingrese tamaño: "));
let arr: number[] = new Array(elem);
cargar(arr, elem);
let nro: number = Number(prompt("ingrese numero"));
let ocu = metodo(arr, elem, nro);
console.log("el numero " + nro + " ... " + ocu);
mostrar(arr, elem);
