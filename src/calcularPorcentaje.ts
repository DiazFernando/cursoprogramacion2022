//variable para el precio del producto
let precioProducto: number = Number(prompt("ingrese el precio"));

//variable para el porcentaje del descuento
let porcentajeDescuento: number = 0.1;

//calculo del descuento
let descuento: number = precioProducto * porcentajeDescuento;

//calculo para el precio final
let precioFinal: number = precioProducto - descuento;

//Precio final mostrado en consola
console.log("el precio final es: " + precioFinal);
