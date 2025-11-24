// Función para convertir desde kilómetros
function kmaMetros(km) {
    return km * 1000;
}
function kmaCentimetros(km) {
    return km * 100000;
}
// Función para convertir desde metros
function metrosaKm(m) {
    return m / 1000;
}
function metrosaCentimetros(m) {
    return m * 100;
}
// Función para convertir desde centímetros
function cmaKm(cm) {
    return cm / 100000;
}
function cmaMetros(cm) {
    return cm / 100;
}
// Programa principal con menú
let opcion = prompt(
    "Selecciona una opción:\n1. Convertir km\n2. Convertir m\n3. Convertir cm"
);

if (opcion === "1") {
    let km = parseFloat(prompt("Ingresa la cantidad en kilómetros:"));
    alert(km + " km = " + kmaMetros(km) + " m\n" + km + " km = " + kmaCentimetros(km) + " cm");
} 
else if (opcion === "2") {
    let m = parseFloat(prompt("Ingresa la cantidad en metros:"));
    alert(m + " m = " + metrosaKm(m) + " km\n" + m + " m = " + metrosaCentimetros(m) + " cm");
} 
else if (opcion === "3") {
    let cm = parseFloat(prompt("Ingresa la cantidad en centímetros:"));
    alert(cm + " cm = " + cmaKm(cm) + " km\n" + cm + " cm = " + cmaMetros(cm) + " m");
} 
else {
    alert("Opción no válida");
}
