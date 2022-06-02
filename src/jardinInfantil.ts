//Funcion para calcular butacas libres y asignar el aula indicado
function calcularButacaslibres(): string {
  let butacasLibres: number = 0;
  let aula: string;
  if (capacidadAulaAmarilla - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado es el amarillo";
  } else if (capacidadAulaVerde - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado es el verde";
  } else if (capacidadAulaAzul - cantidadDeInfantes >= butacasLibres) {
    aula = "El aula asignado es el azul";
  } else {
    aula = "No disponemos con aulas para la capacidad indicada";
  }
  return aula;
}

let capacidadAulaAzul: number = 40;
let capacidadAulaVerde: number = 35;
let capacidadAulaAmarilla: number = 30;
let cantidadDeInfantes: number = Number(
  prompt("Ingrese cantidad de infantes: ")
);
let resultado: string = calcularButacaslibres();

console.log(resultado);
