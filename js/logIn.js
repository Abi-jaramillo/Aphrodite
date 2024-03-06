let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnRegistrarse = document.getElementById("btnRegistrarse");
let btnClear = document.getElementById ("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Se agregaron las excepciones de simbolos que no deben estar en correo
let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regex = new RegExp ("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")

//alerta Validación 
btnRegistrarse.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();

    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";

    let hayError = false;

    if (txtCorreo.value.length < 3 ) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Correo electrónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtCorreo.style.border = "solid red thin";
        hayError=true;
            
        }//alert("El correo electrónico no es válido."); 
        
    
    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Nombre </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtNombre.style.border = "solid red thin";
        hayError=true;
        
    }//alert("El nombre debe tener al menos 3 caracteres."); 

    if(! regex.test(txtTelefono.value) || /^(.)\1+$/.test(txtTelefono.value) || (txtTelefono.value.length < 10)) {  //se agregó la condición de la expresión regular que no acepta ceros consecutivos
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Número telefónico </strong> tiene un formato incorrecto <br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        hayError=true;
        
    } 
        //Se usa el boton de enviar con estos campos requeridos
                txtNombre.value="";
                txtTelefono.value="";
                txtCorreo.value="";

        txtNombre.focus();

    }
); //btnEnviar

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtTelefono.value="";
    txtCorreo.value="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
});


function validarNombre() {
    return txtNombre.value.length >= 3;
}//ValidarNombre

function validarCorreo(correo) {
    return expReg.test(correo);
}//validarCorreo


 


