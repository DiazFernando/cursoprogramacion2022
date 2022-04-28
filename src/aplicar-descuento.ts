let precioIngresado : number = Number(prompt("ingrese precio"));

let cantidadDeProducto : number = Number(prompt("ingrese cantidad"));

let precioNeto: number = precioIngresado * cantidadDeProducto;

let porcentajeDescuento : number = 0.1;

let descuentoAplicado : number = precioNeto * porcentajeDescuento;

if (precioNeto > 1000) {
  let precioCondescuento: number = precioNeto - descuentoAplicado;
  console.log("el precio final es " + precioCondescuento);
} else {
  console.log("El precio final es " + precioNeto);
}
