function mostrarVariables() {
    let nombre = "Sergio"; // String
    let edad = 25; // Number
    let esEstudiante = true; // Boolean
    let estatura = 1.70; // Double

    document.getElementById("resultado").innerHTML =
        `<p>Nombre: ${nombre} (Tipo: ${typeof nombre})</p>
         <p>Edad: ${edad} (Tipo: ${typeof edad})</p>
         <p>Es Estudiante: ${esEstudiante} (Tipo: ${typeof esEstudiante})</p>
         <p>Estatura: ${estatura} (Tipo: ${typeof estatura})</p>`;
}

//para colocar codigo html se coloca este simbolo `  y se cierra con ` 
//para concatenar se usa ${variable}
