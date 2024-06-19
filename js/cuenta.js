document.addEventListener("DOMContentLoaded", () => {
  const cuenta = document.querySelector("form");
  const crearDiv = document.createElement("div");
  const textActualizado = document.createElement("h4");

  let nombre = "";
  let edad = "";
  let pais = "";

  cuenta.addEventListener("submit", (e) => {
    e.preventDefault();

    crearDiv.appendChild(textActualizado);
    textActualizado.innerHTML = `Cuenta actualizada`;
    cuerpo.appendChild(crearDiv);
    crearDiv.classList = 'cuenta-actualizada'

    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    pais = document.getElementById("pais").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("pais", pais);
  });
});
