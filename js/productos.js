
class Producto {
    constructor(nombre, categoria, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }

    aplicarDescuento(descuento){
        if (descuento < 0 || descuento > 100) {
            console.warn(`Descuento incorrecto de ${this.nombre}, debe ser entre 0% y 100%`);
            return;
        } else {
            this.precio -= this.precio * (descuento / 100);
            this.precio = this.precio.toFixed(2);
            return this.precio;
        }
    }
};

function mostrarProducto(nombreProducto){
    let crearDiv = document.createElement("div")

    crearDiv.innerHTML = `<h3>${nombreProducto.nombre} | USD$${nombreProducto.precio}</h3>
    <h4>Categoria: ${nombreProducto.categoria}</h4>`

    document.body.appendChild(crearDiv);
};

const producto1 = new Producto("RTX 3090", "Tarjeta Gráfica", 499.99);
const producto2 = new Producto("Ryzen 7 3600G", "Procesador", 149.99);
const producto3 = new Producto("HyperX 8GB 3200Mhz", "RAM", 49.99);
const producto4 = new Producto("Cooler MF120", "Cooler", 19.99);
const producto5 = new Producto("RTX 4090", "Tarjeta Gráfica", 699.99);

producto1.aplicarDescuento(10);

const productos = [producto1, producto2, producto3, producto4, producto5];

productos.forEach(array => {
    mostrarProducto(array);
});

const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log(productosBaratos);