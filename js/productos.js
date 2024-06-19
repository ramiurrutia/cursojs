class Producto {
    constructor(nombre, categoria, precio, imagen) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.imagen = imagen;
    }

    aplicarDescuento(descuento) {
        if (descuento < 0 || descuento > 100) {
            console.warn(`Descuento incorrecto de ${this.nombre}, debe ser entre 0% y 100%`);
            return;
        } else {
            this.precio -= this.precio * (descuento / 100);
            this.precio = parseFloat(this.precio.toFixed(2));
            return this.precio;
        }
    }
}

const producto1 = new Producto("RTX 3090", "Tarjeta Gráfica", 499.99, 'img/productos/producto1.png');
const producto2 = new Producto("Ryzen 3 3600G", "Procesador", 149.99, 'img/productos/producto2.png');
const producto3 = new Producto("HyperX 8GB 3200Mhz", "RAM", 49.99, 'img/productos/producto3.png');
const producto4 = new Producto("Cooler MF120", "Cooler", 19.99, 'img/productos/producto4.png');
const producto5 = new Producto("RTX 4090", "Tarjeta Gráfica", 699.99, 'img/productos/producto5.png');
const producto6 = new Producto("Intel I9 12900KF", "Procesador", 141.99, "img/productos/producto6.png")

producto1.aplicarDescuento(10);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarProductos(productos) {
    const productosDiv = document.querySelector(".productos-div");

    productosDiv.innerHTML = '';

    productos.forEach(producto => {
        const crearDiv = document.createElement("div");
        crearDiv.classList.add('product-div');
        crearDiv.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <h4>USD$${producto.precio}</h4>
            <p>Categoria: ${producto.categoria}</p>
            <button class="aniadir">Añadir al carrito</button>`;
        crearDiv.querySelector('.aniadir').addEventListener('click', () => aniadirAlCarrito(producto));
        productosDiv.appendChild(crearDiv);
    });
}

function aniadirAlCarrito(producto) {
    const index = carrito.findIndex(item => item.nombre === producto.nombre);
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

mostrarProductos(productos);

document.addEventListener('DOMContentLoaded', (e) => {
    const ordenarPor = document.getElementById('ordenar-por');

    ordenarPor.addEventListener('change', function() {
        const valorSeleccionado = this.value;

        if (valorSeleccionado === "ascendente") {
            mostrarProductos(ordenarPorPrecioAscendente(productos));
        } else if (valorSeleccionado === "descendente") {
            mostrarProductos(ordenarPorPrecioDescendente(productos));
        }
    });
});

function ordenarPorPrecioAscendente(productos) {
    return productos.sort((a, b) => a.precio - b.precio);
}

function ordenarPorPrecioDescendente(productos) {
    return productos.sort((a, b) => b.precio - a.precio);
}
