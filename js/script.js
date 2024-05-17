let nombre = prompt("Ingrese un nombre:");

while (nombre.length <= 3 || !isNaN(nombre)){
    if (nombre.length <= 3){
        alert("El nombre ingresado tiene menos de 2 caracteres!");
    } else {
        alert("El nombre ingresado es incorrecto");
    }
    nombre = prompt("Ingrese un nombre nuevamente:");
};

alert("Bienvenido " + nombre + "!");


console.log("Contador de caracteres de " + nombre);
for (i=1; i <= nombre.length; i++){
    console.log(i);
};

let edad = parseInt(prompt("Ingrese su edad:"));
while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Ingrese una edad correcta:"))
};
console.log("Edad del usuario: " + edad);

const ANIONACIMIENTO = 2024 - edad;
console.log(ANIONACIMIENTO);