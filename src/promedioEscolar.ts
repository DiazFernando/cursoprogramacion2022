//Variable para ingresar la cantidad de alumnos
let numeroDeAlumnos: number = Number(prompt("Ingrese cantidad de Alumnos"));
//Arreglo que almacena el nombre de los alumnos ingresados por el usuario
let nombresDeAlumnos: string[] = new Array(numeroDeAlumnos);
//Arreglo que almacena las notas del primer trimestre
let notasTrimestre1: number[] = new Array(numeroDeAlumnos);
//Arreglo que almacena las notas del segundo trimestre
let notasTrimestre2: number[] = new Array(numeroDeAlumnos);
//Arreglo que almacena las notas del tercer trimestre
let notasTrimestre3: number[] = new Array(numeroDeAlumnos);

//Bucle para ingresar los datos ingresados por el usuario a los distintos arreglos
for (let indice: number = 0; indice < numeroDeAlumnos; indice++) {
  nombresDeAlumnos[indice] = prompt("Ingrese nombre del Alumno");
  notasTrimestre1[indice] = Number(prompt("Ingrese nota del primer trimestre"));
  notasTrimestre2[indice] = Number(
    prompt("Ingrese nota del segundo trimestre")
  );
  notasTrimestre3[indice] = Number(prompt("Ingrese nota del tercer trimestre"));
}

//Variable para buscar un alumno ingresado por el usuario
let alumnoBuscado: string = prompt(
  "Ingrese el nombre del alumno que esta buscando"
);
//Variable para encontrar la posición del alumno buscado dentro del arreglo
let posición: number = 0;
//Variable para cortar el bucle una vez encontrado la posición del alumno buscado
let encontrado: boolean = false;
//Variable para calcular el promedio anual del alumno buscado
let promedioAnual: number = 0;
//Bucle para encontrar la posición del alumno buscado
while (posición < numeroDeAlumnos && !encontrado) {
  if (nombresDeAlumnos[posición] === alumnoBuscado) {
    encontrado = true;
    promedioAnual =
      (notasTrimestre1[posición] +
        notasTrimestre2[posición] +
        notasTrimestre3[posición]) /
      3;
  }
  posición++;
}

if (encontrado) {
  console.log("El promedio anual de " + alumnoBuscado + " es " + promedioAnual);
} else {
  console.log("No se encontro al alumno " + alumnoBuscado);
}
