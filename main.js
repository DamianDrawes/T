function abrir1() {
    // Obtener el botón por su ID
    var barra = document.getElementById("desc");
    // Verificar si tiene la clase actual y cambiarla
    if (barra.classList.contains("CloseD")) {
        barra.classList.remove("CloseD");
        barra.classList.add("OpenD");
    } else {
        barra.classList.remove("OpenD");
        barra.classList.add("CloseD");
    }
}
function abrir2() {
    // Obtener el botón por su ID
    var barra = document.getElementById("env");
    // Verificar si tiene la clase actual y cambiarla
    if (barra.classList.contains("CloseD")) {
        barra.classList.remove("CloseD");
        barra.classList.add("OpenD");
    } else {
        barra.classList.remove("OpenD");
        barra.classList.add("CloseD");
    }
}
function abrir3() {
    // Obtener el botón por su ID
    var barra = document.getElementById("pag");
    // Verificar si tiene la clase actual y cambiarla
    if (barra.classList.contains("CloseD")) {
        barra.classList.remove("CloseD");
        barra.classList.add("OpenD");
    } else {
        barra.classList.remove("OpenD");
        barra.classList.add("CloseD");
    }
}