//variante para la posición final
let posiciónFinal: number = Number(prompt("Ingrese posición"));

//Si llega en 1º lugar
if (posiciónFinal === 1) {
  console.log("Felicitaciones a llegado en el " + posiciónFinal + "º puesto");
  console.log("Gano la medalla de ORO!!");
}
//Si llega en 2º lugar
if (posiciónFinal === 2) {
  console.log("Felicitaciones a llegado en el " + posiciónFinal + "º puesto");
  console.log("Gano la medalla de PLATA!!");
}
//Si llega en 3º lugar
if (posiciónFinal === 3) {
  console.log("Felicitaciones a llegado en el " + posiciónFinal + "º puesto");
  console.log("Gano la medalla de BRONCE!!");
}
//Si llega en una posicion mayor al 3º lugar
if (posiciónFinal > 3) {
  console.log("Usted a llegado en el " + posiciónFinal + "º puesto");
  console.log(
    "Por haber finalizado la carrera con exito se entrega un Diploma!!"
  );
}
