let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById ("btnClear");
let txtInput = document.getElementById("TextInput");
let deselectSelect =document.getElementById("deselectSelect");


let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Se agregaron las excepciones de simbolos que no deben esta en correo
let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regex = new RegExp ("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")


//alerta Validación 

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();
    txtInput.value = txtInput.value.trim();

    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
    txtInput.style.border="";


    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Nombre </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        
    }

    //alert("El nombre debe tener al menos 3 caracteres."); 
    if (txtCorreo.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Correo electrónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid red thin";
        
    }
    //alert("El correo electrónico no es válido."); 

    if (txtTelefono.value.length < 10) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Número telefónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        
    }


    //alert("El teléfono debe tener 10 dígitos numéricos."); 

    if (txtInput.value.length < 9) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Mensaje </strong> ingresado no es válido <br/>`);
        alertValidaciones.style.display = "block";
        txtInput.style.border = "solid red thin";
        
    }
    //alert("El Mensaje debe tener más de 10 carácteres"); 
    if(regex.test(txtTelefono.value)) {
        alertValidacionesTexto.innerHTML="";
    } else {
        alertValidacionesTexto.innerHTML="El Número telefónico tiene un formato incorrecto";
    }
    

        txtNombre.value="";
        txtTelefono.value="";
        txtCorreo.value="";
        txtInput.value="";
        txtNombre.focus();



}); //btnEnviar

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtTelefono.value="";
    txtCorreo.value="";
    txtInput.value="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
    txtInput.style.border="";
});


function validarNombre() {
    return txtNombre.value.length >= 3;
}//ValidarNombre

function validarCorreo(correo) {
    return expReg.test(correo);
}//validarCorreo

//txtTelefono.value = txtNombre.value.trim();
//function validarTelefono() {
    //if (txtTelefono.value.length < 10) {
        //return false;
    //}//if length
    //if (isNaN(txtTelefono.value)) {
        //return false
    //}//isNaN
    //if (Number(txtTelefono.value) <= 0) {
        //return false
    //}//if
    //return true;


//}//validarTelefono

function validarMensaje() {
    return txtInput.value.length >= 10;
}//Validar mensaje
 
function validaNumero() {
    if(regex.test(txtTelefono.value)) {
        alertValidacionesTexto.innerHTML="";
    } else {
        alertValidacionesTexto.innerHTML="El Número telefónico tiene un formato incorrecto";
    }//else
    txtTelefono.focus();

    return txtTelefono.value.length >=10;
}
 


  
