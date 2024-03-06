let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnRegistrarse = document.getElementById("btnRegistrarse");
let btnClear = document.getElementById ("btnClear");
let txtContrasena1 = document.getElementById("Contrasena1");
let txtContrasena2 = document.getElementById("Contrasena2");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let alertConfirmaciones = document.getElementById("alertConfirmaciones");
let alertConfirmacionesTexto = document.getElementById("alertConfirmacionesTexto");

let container = document.querySelector(".container");
let btnSignIn = document.getElementById("btn-sign-in");
let btnSignUp = document.getElementById("btn-sign-up");
//Se agregaron las excepciones de simbolos que no deben estar en correo
let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regex = new RegExp ("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")
let regexContraseña = (/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){8,15}$/)
//alerta Validación 
btnRegistrarse.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    alertConfirmacionesTexto.innerHTML="";
    alertConfirmaciones.style.display="none";

    txtNombre.value = txtNombre.value.trim();
    txtTelefono.value = txtTelefono.value.trim();
    txtCorreo.value = txtCorreo.value.trim();
    txtContrasena1.value= txtContrasena1.value.trim();
    txtContrasena2.value= txtContrasena2.value.trim();

    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
    txtContrasena1.style.border="";
    txtContrasena2.style.border="";

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

    if((txtContrasena1.value.lenght<8) && !regexContraseña.test(txtContrasena1.value)){
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> Contraseña </strong> 
        debe tener: <br> -Mínimo <strong>8</strong> caracteres y máximo <strong>15</strong>. <br>
        -Una letra mayúscula y mínimo una minuscula. <br> -Al menos un número y un carácter especial. <br>`);
        alertValidaciones.style.display = "block";
        txtContrasena1.style.border = "solid red thin";
        hayError=true;
    }

    if(txtContrasena1.value !=txtContrasena2.value){
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `Las <strong> Contraseñas </strong> 
        no coinciden <br>`);
        alertValidaciones.style.display = "block";
        txtContrasena1.style.border = "solid red thin";
        txtContrasena2.style.border = "solid red thin";
        hayError=true;
    } else { alertConfirmacionesTexto.insertAdjacentHTML("beforeend", `Las <strong> Contraseñas </strong> coinciden <br>`);
        alertConfirmaciones.style.display = "block";
        txtContrasena1.style.border = "solid green thin";
        txtContrasena2.style.border = "solid green thin";
        hayError=false;
    }

                txtNombre.value="";
                txtTelefono.value="";
                txtCorreo.value="";
                txtContrasena1.value="";
                txtContrasena2.value="";

        txtNombre.focus();

    }
); //btnEnviar

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtTelefono.value="";
    txtCorreo.value="";
    txtContrasena1.value="";
    txtContrasena2.value="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    alertConfirmacionesTexto.innerHTML="";
    alertConfirmaciones.style.display="none";
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtCorreo.style.border="";
    txtContrasena1.style.border="";
    txtContrasena2.style.border="";

});


function validarNombre() {
    return txtNombre.value.length >= 3;
}//ValidarNombre

function validarCorreo(correo) {
    return expReg.test(correo);
}//validarCorreo

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});

 


