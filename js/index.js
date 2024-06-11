function saludar() {
  document.querySelector(
    "h1"
  ).innerHTML = `Bienvenido/a <b>${nombre.toUpperCase()}</b>!`;
}

function pedirNombre(input) {
  let nombre = input;
  while (nombre.length <= 2 || !isNaN(nombre)) {
    if (nombre.length <= 2) {
      alert("El nombre ingresado tiene menos de 2 caracteres!");
    } else {
      alert("El nombre ingresado es incorrecto");
    }
    nombre = prompt("Ingrese un nombre nuevamente:");
  }
  localStorage.setItem("nombre", nombre);
}

let nombre = localStorage.getItem("nombre");

if (!(nombre == "")) {
  console.log(nombre);
} else {
  pedirNombre(prompt("Ingrese su nombre"));
}

console.log("Contador de caracteres de " + nombre);
for (let i = 1; i <= nombre.length; i++) {
  console.log(i);
}

let edad = parseInt(prompt("Ingrese su edad:"));
while (isNaN(edad) || edad <= 0) {
  edad = parseInt(prompt("Ingrese una edad correcta:"));
}
console.log("Edad del usuario: " + edad);

saludar();
