//Función para cargar los datos por el usuario
function cargarDatos (nombresAlumnos:string[],nota1:number[],nota2:number[],nota3:number[]):void {
  for (let indice: number = 0; indice < nombresAlumnos.length; indice++) {
    nombresAlumnos[indice] = prompt("Ingrese nombre del Alumno");
    nota1[indice] = Number(prompt("Ingrese nota del primer trimestre"));
    nota2[indice] = Number(prompt("Ingrese nota del segundo trimestre"));
    nota3[indice] = Number(prompt("Ingrese nota del tercer trimestre"));
  }
}

//Función para calcular el promedio anual del alumno buscado
function calcularPromedio (nota1:number,nota2:number,nota3:number):number {
  let promedio:number = (nota1+nota2+nota3)/3;
  return promedio;
}

//Función para buscar un alumno
function buscarAlumno (alumnoBuscado:string,nombresDeAlumnos:string[],numeroDeAlumnos:number):number {
let indice: number = 0;
let posiciónDelAlumno:number = -1; 
while (indice < numeroDeAlumnos && posiciónDelAlumno === -1) {
  if (nombresDeAlumnos[indice] === alumnoBuscado) {
      posiciónDelAlumno=indice;
    }
    indice++ ;
  }
  return posiciónDelAlumno;
}

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

cargarDatos(nombresDeAlumnos,notasTrimestre1,notasTrimestre2,notasTrimestre3);
//Variable para buscar un alumno ingresado por el usuario
let alumnoBuscado: string = prompt("Ingrese el nombre del alumno que esta buscando");
//variable para guardar la posición del alumno buscado dentro del arreglo nombres nombresDeAlumnos
let indiceDelAlumno:number = buscarAlumno(alumnoBuscado,nombresDeAlumnos,numeroDeAlumnos);
//condicion para imprimir por consola el promedio anual del alumno buscado
if (indiceDelAlumno !== -1) {
  console.log("El promedio anual de " + alumnoBuscado + " es " + calcularPromedio(notasTrimestre1[indiceDelAlumno],notasTrimestre2[indiceDelAlumno],notasTrimestre3[indiceDelAlumno]));
} else {
  console.log("No se encontro al alumno " + alumnoBuscado);
}