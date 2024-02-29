let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById ("btnClear");
let txtInput = document.getElementById("TextInput");
let deselectSelect =document.getElementById("deselectSelect");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

//Se agregaron las excepciones de simbolos que no deben estar en correo
let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
let regex = new RegExp ("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")


//llaves de acceso a emailJS(sin ellas no funciona)
const publickey ="P52ZacbrVINZjA08C";
const serviceID ="service_de1smlf";
const templateID ="contact_form"


emailjs.init(publickey);

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
    deselectSelect.style.border="";

    let hayError = false;

    if (txtTelefono.value.length < 10) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Número telefónico </strong> ingresado no es correcto <br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        hayError=true;
    } //alert("El teléfono debe tener 10 dígitos.");

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

    if (txtInput.value.length < 9) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Mensaje </strong> ingresado no es válido <br/>`);
        alertValidaciones.style.display = "block";
        txtInput.style.border = "solid red thin";
        hayError=true;
        
    }//alert("El Mensaje debe tener más de 10 carácteres"); 
    
    if (deselectSelect.value ==0){
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `No ha <strong> seleccionado </strong> una opción <br/>`);
        alertValidaciones.style.display = "block";
        deselectSelect.style.border = "solid red thin";
        hayError=true;
    }

    if(! regex.test(txtTelefono.value) || /^(.)\1+$/.test(txtTelefono.value)) {  //se agregó la condición de la expresión regular que no acepta ceros consecutivos
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Número telefónico </strong> tiene un formato incorrecto <br/>`);
        alertValidaciones.style.display = "block";
        txtTelefono.style.border = "solid red thin";
        hayError=true;
        
    } 
    
        //Se usa el boton de enviar con estos campos requeridos
       if(!hayError){
        const inputFields ={
        user_name : txtNombre.value,
        user_email : txtCorreo.value,
        user_phone : txtTelefono.value,
        message : txtInput.value,
        user_selection : deselectSelect.value,
        };
         console.log(inputFields);



          emailjs.send(serviceID,templateID, inputFields)
          .then(() => {
            Swal.fire({
                icon: "success",
                title: "Envio exitoso",
                showConfirmButton: false,
                timer: 1500
              });
                 
          }, (error)=>{
          console.log(error);
          });

                txtNombre.value="";
                txtTelefono.value="";
                txtCorreo.value="";
                txtInput.value="";
                deselectSelect.value="";
        txtNombre.focus();

    }

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
    deselectSelect.style.border="";
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


//}

function validarMensaje() {
    return txtInput.value.length >= 10;
}//Validar mensaje


 


