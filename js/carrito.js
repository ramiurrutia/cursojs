document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoDiv = document.querySelector('.carrito-div');

    carritoDiv.innerHTML = '';

    if (carrito.length === 0) {
        carritoDiv.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach(producto => {
            const crearDiv = document.createElement("div");
            crearDiv.classList.add('product-div');
            crearDiv.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <h4>USD$${producto.precio}</h4>
                <p>Categoria: ${producto.categoria}</p>
                <p>Cantidad: ${producto.cantidad}</p>`;
            carritoDiv.appendChild(crearDiv);
        });
    }
});
