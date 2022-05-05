//variable para ingresar el sueldo
let sueldoActual: number = Number(prompt("ingrese su sueldo"));
//variable para el sueldo con aumento
let sueldoConAumento: number = 0;

// estructura de selección para saber que porcentaje de aumento le corresponde segun su sueldo
if (sueldoActual < 15000) {
  sueldoConAumento = sueldoActual * 1.2; //obtiene un 20% de aumento
  console.log(
    "obtiene un 20% de aumento, su sueldo será de " + sueldoConAumento
  );
} else if (sueldoActual > 15000 && sueldoActual < 20000) {
  sueldoConAumento = sueldoActual * 1.1; //obtiene un 10% de aumento
  console.log(
    "obtiene un 10% de aumento, su sueldo será de " + sueldoConAumento
  );
} else if (sueldoActual > 20000 && sueldoActual < 25000) {
  sueldoConAumento = sueldoActual * 1.05; //obtiene un 5% de aumento
  console.log(
    "obtiene un 5% de aumento, su sueldo será de " + sueldoConAumento
  );
} else {
  sueldoConAumento = sueldoActual; //no obtiene aumento
  console.log("esta vez no obtiene aumento ");
}
