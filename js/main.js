

let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnEnviar = document.getElementById("btnEnviar");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//alerta Validación NATASHA

btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Nombre </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        isValid = false;
    }

    //alert("El nombre debe tener al menos 3 caracteres."); NATASHA
    if (txtCorreo.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Correo electrónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        isValid = false;
    }
    //alert("El correo electrónico no es válido."); NATASHA

    if (txtTelefono.value.length < 10) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Número telefónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        isValid = false;
    }
    //alert("El teléfono debe tener 10 dígitos numéricos."); NATASHA

});


function validarNombre() {
    return txtNombre.value.length >= 3;
}//if length Nombre

function validarCorreo(correo) {
    return expReg.test(correo);
}//validarCorreo

txtTelefono.value = txtNombre.value.trim();
function validarTelefono() {
    if (txtTelefono.value.length < 10) {
        return false;
    }//if length
    if (isNaN(txtTelefono.value)) {
        return false
    }//isNaN
    if (Number(txtTelefono.value) <= 0) {
        return false
    }//if
    return true;
}//validarCantidad

