let claveIngresada: string;
//let clave : string = "eureka";
let intentos: number = 0;
let continuar: string = "y";

while (intentos < 3 && continuar === "y") {
  claveIngresada = prompt("ingrese su clave");
  if (claveIngresada === "eureka") {
    console.log("clave correcta");
    continuar = "n";
  } else {
    console.log("clave incorrecta");
  }
  intentos++;
}
if (continuar === "y") {
  console.log("acabaste los intentos");
}
