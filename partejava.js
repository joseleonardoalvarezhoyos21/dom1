function cambiarTexto(){
    document.getElementById("p").innerHTML ="cambio";
}

function cambiarClase(){
    document.getElementById("p").classList.add("cambiado");
} 

function limpiar(){
    document.getElementById("p").classList.remove("cambiado");
    document.getElementById("p").innerHTML="primer texto";
}
