let sueldoInicial: number = Number(prompt("Ingrese su sueldo"));
let sueldoConAumento: number = 0;
switch (true) {
  case sueldoInicial > 0 && sueldoInicial <= 15000:
    sueldoConAumento = sueldoInicial * 1.2;
    console.log(
      "obtiene un 20% de aumento, su sueldo será de $" + sueldoConAumento
    );
    break;

  case sueldoInicial > 15000 && sueldoInicial <= 20000:
    sueldoConAumento = sueldoInicial * 1.1;
    console.log(
      "obtiene un 10% de aumento, su sueldo será de $" + sueldoConAumento
    );
    break;

  case sueldoInicial > 20000 && sueldoInicial <= 25000:
    sueldoConAumento = sueldoInicial * 1.05;
    console.log(
      "obtiene un 5% de aumento, su sueldo será de $" + sueldoConAumento
    );
    break;

  case sueldoInicial > 25000:
    sueldoConAumento = sueldoInicial;
    console.log("Esta vez no recibe aumento");
    break;
}
