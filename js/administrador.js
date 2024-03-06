let nombreProducto = document.getElementById("NombreProducto");
let txtCategoria = document.getElementById("Categoria");
let txtPrecio = document.getElementById ("Precio");
let txtInput = document.getElementById("TextInput");
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById ("btnClear");
const boton_foto=document.querySelector("#btn-foto");
const imagen = document.querySelector("#user-foto");
let img = document.querySelector("#user-foto");



let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let datos = new Array();

//se agrega la validación para el precio
let regex = new RegExp ("^[$]+[0-9]+([.][0-9]+)?$");


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

    nombreProducto.value = nombreProducto.value.trim();
    txtPrecio.value = txtPrecio.value.trim();
    txtCategoria.value = txtCategoria.value.trim();
    txtInput.value = txtInput.value.trim();

    nombreProducto.style.border="";
    txtPrecio.style.border="";
    txtCategoria.style.border="";
    txtInput.style.border="";

    let existError = false;

    if (txtPrecio.value.length < 1) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `Ingresa <strong> un Precio </strong> válido <br/>`);
        alertValidaciones.style.display = "block";
        txtPrecio.style.border = "solid red thin";
        existError=true;
    } //alert("El precio debe tener más de 1 dígito.");

    if (txtCategoria.value.length < 3 ) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `No se encontró esa <strong> categoría </strong> <br/>`);
        alertValidaciones.style.display = "block";
        txtCategoria.style.border = "solid red thin";
        existError=true;
            
    }//alert 
        
    
    if (nombreProducto.value.length < 5) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong>Nombre del Producto </strong> ingresado no es válido <br/>`);
        alertValidaciones.style.display = "block";
        nombreProducto.style.border = "solid red thin";
        existError=true;
        
    }//alert

    if (txtInput.value.length < 9) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `La <strong> Descripción </strong> es muy corta <br/>`);
        alertValidaciones.style.display = "block";
        txtInput.style.border = "solid red thin";
        existError=true;
        
    }//alert("El Mensaje debe tener más de 10 carácteres"); 
    

    if(! regex.test(txtPrecio.value)) { 
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> precio </strong> tiene que tener un formato 00.00 <br/>`);
        alertValidaciones.style.display = "block";
        txtPrecio.style.border = "solid red thin";
        existError=true;
        
    } //alert precio
     
    let imgUrl = img.src; 
   
    if(!existError){
        let elemento= `{"name":"${nombreProducto.value}",
                    "section":"${txtCategoria.value}",
                    "img":"${imgUrl}",
                    "description":"${txtInput.value}",
                    "price":"${txtPrecio.value}"}`;   
                    
        datos.push(JSON.parse(elemento));   
        console.log(datos)
        localStorage.setItem("datos",JSON.stringify(datos));
        Swal.fire({
            icon: "success",
            title: "Producto añadido",
            showConfirmButton: false,
            timer: 1500
          });
    };
                nombreProducto.value="";
                txtPrecio.value="";
                txtCategoria.value="";
                txtInput.value="";
                nombreProducto.focus();

});

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    nombreProducto.value="";
    txtPrecio.value="";
    txtCategoria.value="";
    txtInput.value="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    nombreProducto.style.border="";
    txtPrecio.style.border="";
    txtCategoria.style.border="";
    txtInput.style.border="";
});

function validarNombre() {
    return nombreProducto.value.length >= 3;
}//ValidarNombre

function validarMensaje() {
    return txtInput.value.length >= 10;
}//Validar mensaje

//Se agrega el botón para subir imágenes
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName : 'dgvtyuvyw',
    uploadPreset : 'aphrodite'
},(err,result)=>{
    if(!err && result && result.event === 'success'){
        console.log('Imagen subida con exito',result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto.addEventListener("click",()=>{
    widget_cloudinary.open();
},false);

