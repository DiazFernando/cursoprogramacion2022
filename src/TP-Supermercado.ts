//Funcion para registrar los productos, el precio unitario y la cantidad de articulos
//a su vez va cargando los arreglos productos,precioUnitarioDeProductos,cantidadDeCadaArticulo
function registrarCompra():void {
  for(let i:number=0;i<cantidadDeProductos;i++) {
    productos[i]= prompt("Ingrese nombre del producto: ");
    precioUnitarioDeProductos[i]= Number(prompt("Ingrese el precio de " + productos[i] + ":"));
      while(precioUnitarioDeProductos[i]<=0){
        precioUnitarioDeProductos[i]= Number(prompt("Error ingrese el precio de " + productos[i] + " correspondiente:"));
      }
    cantidadDeCadaArticulo[i]=Number(prompt("Ingrese la cantidad que lleva de " + productos[i] + ":"));
    while(cantidadDeCadaArticulo[i]<=0){
      cantidadDeCadaArticulo[i]= Number(prompt("Error ingrese la cantidad de " + productos[i] + " correspondiente:"));
      }
    }
  };

//Funcion para detallar la compra  
function detallarCompra ():void {
  let precioFinalDelProducto: number = 0;
  for (let i:number=0;i<cantidadDeProductos;i++) {
    precioFinalDelProducto = (cantidadDeCadaArticulo[i]*precioUnitarioDeProductos[i]);
    console.log(productos[i], cantidadDeCadaArticulo[i] + " uni * $" + precioUnitarioDeProductos[i] + "c/u = $" + precioFinalDelProducto);
    precioFinalDeLaCompra = precioFinalDelProducto + precioFinalDeLaCompra;
  }
  console.log("El total de la compra es: $" + precioFinalDeLaCompra);
};

//Funcion que verifica la participacion de los sorteos segun el total de la compra
function verificarParticipacionAlSorteo():void{
  if (precioFinalDeLaCompra>3000) {
    console.log("Por tu compra de $" + precioFinalDeLaCompra + " estas participando por un 0Km");
  } else if (precioFinalDeLaCompra>2000) {
    console.log("Por tu compra de $" + precioFinalDeLaCompra + " estas participando por una moto 0Km");
  } else if (precioFinalDeLaCompra>1000) {
    console.log("Por tu compra de $" + precioFinalDeLaCompra + " estas participando por un LED Tv de 42");
  } else {
    console.log("Por tu compra de $" + precioFinalDeLaCompra + " No participa en ninguno de nuestros sorteos");
  }
}

//variable para ingresar la cantidad de productos (indicara la longitud de los arreglos)
let cantidadDeProductos : number = Number(prompt("Ingrese cantidad de productos: "));
//Arreglo que almacena los productos ingresados por el usuario
let productos: string [] = new Array(cantidadDeProductos);
//Arreglo que almacena el precio unitario de cada producto ingresado por el usuario
let precioUnitarioDeProductos: number [] = new Array (cantidadDeProductos);
//Arreglo que almacena la cantidad de articulos que lleva ingresado por el usuario
let cantidadDeCadaArticulo: number [] = new Array (cantidadDeProductos);
//Variable que obtiene el precio final de la compra
let precioFinalDeLaCompra:number = 0;


registrarCompra();
detallarCompra();
verificarParticipacionAlSorteo();
