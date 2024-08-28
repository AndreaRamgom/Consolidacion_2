
$(document).ready(function(){

function limpiar() {
    $("#nombre-text").html("")
    $("#apellido-text").html("")
    $("#correo-text").html("")
    $("#lbl-nombre").removeClass("text-danger")
    $("#lbl-apellido").removeClass("text-danger")
    $("#lbl-correo").removeClass("text-danger")

    
}

$("#formulario").submit(function(evento) {


    evento.preventDefault();

    limpiar();


    var nombre = $("#txt-nombre").val();
    var apellido = $("#txt-apellido").val();
    var correo = $("#txt-correo").val();
        
    
        if(nombre == "") {
            $("#nombre-text").html("Ingresar  el Nombre")
            $("#nombre-text").addClass("text-danger")

        }

        if(apellido == "") {
            $("#apellido-text").html("Ingresar el Apellido")
            $("#apellido-text").addClass("text-danger")
    
         }

        if(correo == "") {
            $("#correo-text").html("Ingresar el Correo")
            $("#correo-text").addClass("text-danger")
        }
     })

})