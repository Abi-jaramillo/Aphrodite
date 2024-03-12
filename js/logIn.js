let txtNombre = document.getElementById("Nombre");
let txtTelefono = document.getElementById("Telefono");
let txtCorreo = document.getElementById("Correo");
let btnRegistrarse = document.getElementById("btnRegistrarse");
let btnClear = document.getElementById ("btnClear");
let txtContrasena1 = document.getElementById("Contrasena1");
let txtContrasena2 = document.getElementById("Contrasena2");
let btnInicio = document.getElementById("btnIniciar");
let emailInicio = document.getElementById("emailInicio");
let passInicio = document.getElementById("passInicio");


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
let regexContrasena = (/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){8,15}$/)

let storedData =localStorage.getItem("informacion");
let info = new Array();
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

    if((txtContrasena1.value.lenght<8) && regexContrasena.test(txtContrasena1.value)){
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> Contraseña </strong> 
        debe tener: <br> -Mínimo <strong>8</strong> caracteres y máximo <strong>15</strong>. <br>
        -Una letra mayúscula y mínimo una minuscula. <br> -Al menos un número y un carácter especial. <br>`);
        alertValidaciones.style.display = "block";
        txtContrasena1.style.border = "solid red thin";
        hayError=true;
    }

    if (!hayError){
        let usuario=`{"Nombre":"${txtNombre.value}", 
                        "Telefono":"${ txtTelefono.value }",
                        "Correo":"${txtCorreo.value}",
                        "Contraseña":"${txtContrasena1.value}"}`;
                                        
    let correoRegistrado = info.find(usuario => usuario.Correo === txtCorreo.value)
    if (correoRegistrado){
        return Swal.fire({
            title: "¡Ops!",
            text: "Este usuario ya está registrado",
            icon: "error"
    });
    }

    info.push(JSON.parse(usuario));
    localStorage.setItem("informacion",JSON.stringify(info));
    Swal.fire({
        title: "¡Felicidades!",
        text: "Registro exitóso",
        icon: "success"
    });
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

btnInicio.addEventListener("click",function(event){
    event.preventDefault();
    let validaInicio = info.find(usuario => usuario.Correo === emailInicio.value && usuario.Contraseña === passInicio.value)
    if(!validaInicio){
        return Swal.fire({
            title: "¡Ops!",
            text: "¡Usuario y/o contraseña incorrectos!",
            icon: "error"
    });
    }

    Swal.fire({
        title: "¡Bienvenido!",
        text: `${validaInicio.Nombre}`,
        icon: "success"
    });
    window.location.href = "index.html";

    //Nombre de usuario
    // Limpiamos el contenido actual del navbar
    navbar.innerHTML = "";

     // Insertamos el nuevo contenido con el nombre de usuario y el botón de cerrar sesión
    navbar.insertAdjacentHTML("beforeend", `
    <nav class= "navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid">
        <a class="navbar-brand" href="../HTML/index.html">Aphrodite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-transparent" id="lista">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../HTML/index.html">Inicio</a>
                </li>
                
                <li class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-current="page">
                    <strong>Tienda</strong>
                    </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/HTML/puntosNegros.html">Puntos negros</a></li>
                            <li><a class="dropdown-item" href="../HTML/tienda.html">Tienda</a></li>
                            <li><a class="dropdown-item" href="/HTML/cuidadocabello.html">Cuidado cabello</a></li>
                        </ul>
                </li>

                <li="nav-item">
                    <a class="nav-link active" aria-current="page" href="../HTML/contactanos.html">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../HTML/acercadenosotros.html">Nosotros</a>
                </li>
                
                <li class="nav-item dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Blog</strong>
                    </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/HTML/puntosNegros.html">Puntos negros</a></li>
                            <li><a class="dropdown-item" href="/HTML/peeling.html">Peeling</a></li>
                            <li><a class="dropdown-item" href="/HTML/cuidadocabello.html">Cuidado cabello</a></li>
                        </ul>
                </li>
                                                    
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../HTML/administrador.html">Administrador</a>
                </li>
            
                <a href="/HTML/login.html" target="_blank"><i id="login" class="bi bi-person-circle">${usuario.Nombre}</i></a>
                <a href="#" target="_blank"><i id="carrito1" class="bi bi-cart3"></i></a>
            </ul>
        </div>
    </div>
    </nav >
`);


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


window.addEventListener("load", function(event){
    event.preventDefault();

    


    if (this.localStorage.getItem("informacion") !==null){
        info=JSON.parse(this.localStorage.getItem("informacion"));
   
        console.log (info);
    } 

});