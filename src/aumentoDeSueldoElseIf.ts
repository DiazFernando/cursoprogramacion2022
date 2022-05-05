let sueldoActual: number = Number(prompt("ingrese su sueldo"));
let sueldoConAumento: number = 0;

if (sueldoActual < 15000) {
  sueldoConAumento = sueldoActual * 1.2;
  console.log(
    "obtiene un 20% de aumento, su sueldo será de " + sueldoConAumento
  );
} else if (sueldoActual > 15000 && sueldoActual < 20000) {
  sueldoConAumento = sueldoActual * 1.1;
  console.log(
    "obtiene un 10% de aumento, su sueldo será de " + sueldoConAumento
  );
} else if (sueldoActual > 20000 && sueldoActual < 25000) {
  sueldoConAumento = sueldoActual * 1.05;
  console.log(
    "obtiene un 5% de aumento, su sueldo será de " + sueldoConAumento
  );
} else {
  sueldoConAumento = sueldoActual;
  console.log("esta vez no obtiene aumento ");
}
