function mostrarMes(posicion:number):void {
  let mes:string="";
  if (posicion <4){
    mes="Enero";
  }else if (posicion <8){
    mes="Febrero";
  } else if (posicion <12){
    mes="Marzo";
  }
  console.log("Mes: ",mes);
}

function mostrarSemana(posicion:number):void {
  let semana:number;
  if (posicion === 0 || posicion === 4 || posicion === 8){
    semana=1;
  }else if (posicion === 1 || posicion === 5 || posicion === 9){
    semana=2;
  } else if (posicion === 2 || posicion === 6 || posicion === 10){
    semana=3;
  } else {
    semana=4
  } 
  console.log("Semana: ",semana);
}

function mostrarVentaMaxima(ventas: number[]):void {
  let ventaMaxima: number = 0;
  let posicion:number=0;
  let i:number=0;
  for (i = 0; i < ventas.length; i++) {
    while (ventas[i] > ventaMaxima) {
      ventaMaxima = ventas[i];
      posicion=i;
    }
  }
  console.log("Venta Maxima: ",ventaMaxima);
  mostrarMes(posicion);
  mostrarSemana(posicion);
}

function mostrarVentaMinima(ventas: number[]):void {
  let ventaMinima: number = ventas[0];
  let posicion:number=0;
  let i:number=0;
  for (i = 0; i < ventas.length; i++) {
    while (ventas[i] < ventaMinima) {
      ventaMinima = ventas[i];
      posicion=i;
    }
  }
  console.log("Venta Minima: ",ventaMinima);
  mostrarMes(posicion);
  mostrarSemana(posicion);
}

function mostrarPromedioSemanal(ventas: number[]):void {
  let totalDelTrimeste: number = 0;
  let promedioSemanal: number=0;
  for (let i: number = 0; i < ventas.length; i++) {
    totalDelTrimeste=ventas[i]+totalDelTrimeste;
  }
  promedioSemanal = totalDelTrimeste/ 12;
  console.log("Promedio Semanal: ",Math.floor(promedioSemanal));
}

function mostrarPromedioMensual(ventas: number[]):void {
  let totalDelTrimeste: number = 0;
  let promedioMensual: number=0;
  for (let i: number = 0; i < ventas.length; i++) {
    totalDelTrimeste=ventas[i]+totalDelTrimeste;
  }
  promedioMensual = totalDelTrimeste/ 3;
  console.log("Promedio Mensual: ",Math.floor(promedioMensual));
}
/*Dados estos 5 arreglos que representan las ventas semanales del primer trimentre, 
corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina, 
respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
Escribir un programa que permita determinar:Para cada vendedor mostrar su nombre y 
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
4- su promedio mensual de ventas.
Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre
Tenga en cuenta que cada valor en los arreglos es la venta de una semana, 
y que cuatro semanas forman un mes*/
let vendedores: String[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];
let ventasPrimerTrimestreCamila: number[] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652];
let ventasPrimerTrimestreFranco: number[] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855];
let ventasPrimerTrimestreSofia: number[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218];
let ventasPrimerTrimestreMatias: number[] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006];
let ventasPrimerTrimestreAgustina: number[] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562];


mostrarVentaMaxima(ventasPrimerTrimestreSofia);
mostrarVentaMinima(ventasPrimerTrimestreSofia);
mostrarPromedioSemanal(ventasPrimerTrimestreSofia);
mostrarPromedioMensual(ventasPrimerTrimestreSofia);
