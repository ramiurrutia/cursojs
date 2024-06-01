function saludar() {
    document.querySelector("h1").innerHTML = (`Bienvenido/a <b>${nombre.toUpperCase()}</b>!`);
};

let nombre = prompt("Ingrese un nombre:");

while (nombre.length <= 2 || !isNaN(nombre)){
    if (nombre.length <= 2){
        alert("El nombre ingresado tiene menos de  caracteres!");
    } else {
        alert("El nombre ingresado es incorrecto");
    }
    nombre = prompt("Ingrese un nombre nuevamente:");
};

console.log("Contador de caracteres de " + nombre);
for (let i=1; i <= nombre.length; i++){
    console.log(i);
};

let edad = parseInt(prompt("Ingrese su edad:"));
while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Ingrese una edad correcta:"))
};
console.log("Edad del usuario: " + edad);

saludar();



class Productos {
    constructor(producto, precio, stock){
        this.producto = producto.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseFloat(stock);
    };
};

alert("Calcular IVA de un producto:")
const producto = prompt("Ingresar nombre de producto:")
const precio = prompt("Ingresar precio:")
const stock = prompt("Ingrese el stock del producto:")

const nuevoProducto = new Productos(producto, precio, stock);

const precioIva = nuevoProducto.precio * 1.21

let infoProducto = document.createElement("div");

infoProducto.innerHTML = `<h3>Información del producto:</h3>
<h4>Nombre del producto: ${nuevoProducto.producto}</h4>
<h4>Precio del producto: $${nuevoProducto.precio}</h4>
<h4>Precio del producto con IVA: $${precioIva}</h4>
<h4>Stock: ${nuevoProducto.stock}</h4>`

document.body.appendChild(infoProducto)