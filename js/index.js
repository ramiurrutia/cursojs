document.addEventListener("DOMContentLoaded", () => {
  nombre = localStorage.getItem("nombre");
  edad = localStorage.getItem("edad");
  pais = localStorage.getItem("pais");

  function ingresarDatos() {
    const intro = document.querySelector(".intro");
    const h2 = document.createElement("h2");
    intro.appendChild(h2);
    h2.className = 'crear-cuenta'
    h2.innerHTML = `Personaliza tu cuenta haciendo click <a href="cuenta.html">aquí</a>`
  }

  function saludar() {
    document.querySelector(
      "#h1nombre"
    ).innerHTML = `Bienvenido/a <b>${nombre.toUpperCase()}</b>!`;
  }

  if (!(nombre == null)) {
    saludar();
  } else {
    ingresarDatos();
  }
});

// 
