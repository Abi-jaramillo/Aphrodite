
function addItem(item) {
  const itemHTML = ` <div class=col> <div class="card"       >
  <img src="`+ item.img + `" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">`+ item.name + `</h5>
    <p class="card-text">`+ item.description + `</p>
    <p class="card-text">`+ item.price + `</p>
    <a href="#" class="btn btn-primary" id="carrito-productos" >Agregar al carrito</a>
    
  </div>
</div> 
</div> 
</br>`;
  const itemsContainer = document.getElementById("list-itemsMakeUp");
  itemsContainer.innerHTML += itemHTML;
}


addItem({
  'name': 'Máscara con Aceite de Almendras',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-AlmondMascara-EP-WEB_568x756.jpg?v=1653317650ttps://www.thebodyshop.mx/cdn/shop/products/TBS_ShampooTeaTree_250ml_Haircare_1800x1800.jpg?v=1670532464',
  'description': 'Deslumbra con una mirada cautivadora con nuestro rímel y los beneficios que ofrece al combinarse con el aceite de almendras. Disfruta de unas pestañas largas, rizadas y nutridas',
  'price': '$160'
});

addItem({
  'name': 'Tinte de Betabel',
  'img': 'https://bnatural.com.mx/cdn/shop/products/EP_BeetrootTint_SQ_Joy2.jpg?v=1695104661&width=1445', 'description': 'Goza de nuestro vibrante tinte aplicándolo en labios y mejillas. Con extracto de betabel para nutrir e hidratar. Dura hasta 24 hrs',
  'price': '$100'
});

addItem({
  'name': 'Corrector con Extracto de Lichi',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-LycheeCremeCorrector-EP-WEB-02-Dos5_568x756.jpg?v=1699402268',
  'description': 'Transforma tu piel con nuestro corrector para corregir las ojeras y neutralizar el tono de piel',
  'price': '$180'
});

addItem({
  'name': 'Iluminador de Vainilla',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-VanillaHighlighter-EP-WEB-FallingStar_568x756.jpg?v=1699402070',
  'description': 'Luce un increíble brillo en tu rostro con nuestro iluminador con extracto de vainilla',
  'price': '$150'
});

addItem({
  'name': 'Maquillaje con Base de Quinoa',
  'img': 'https://ereperez.mx/cdn/shop/products/ere-perez-quinoa-water-foundation-rise-web-new_568x756.jpg?v=1699402640',
  'description': 'Con ingredientes naturales antiinflamatorios, base liviana de suave aplicación. Fórmula para dar una cobertura fina y natural con fijación y acabado mate uniforme',
  'price': '$190'
});

addItem({
  'name': 'Gel con Aceite de Sábila',
  'img': 'https://ereperez.mx/cdn/shop/products/EP_MascarasAloe_WebNew_568x756.jpg?v=1632175015',
  'description': '¡Dale un shot de amor a tus cejas y pestañas con una fórmula fijadora y nutrtiva poporcionando una capa de brillo y un diseño estilizado!',
  'price': '$90'
});

let mainProd = document.getElementById("list-itemsMakeUp")
window.addEventListener("load",function(event){
  event.preventDefault();
  if(this.localStorage.getItem("datos")!=null){
      datos = JSON.parse(this.localStorage.getItem("datos"));
      datos.forEach((r) => {
       let= card = `<div class=col> <div class="card">
       <img src=${r.img} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${r.name}</h5>
         <h6 class="card-title">${r.section}</h5>
         <p class="card-text">${r.description}</p>
         <p class="card-text">${r.price}</p>
         <a href="#" class="btn btn-primary"  id="carrito-productos"  >Agregar al carrito</a>
         
       </div>
     </div> 
     </div> 
     </br>`;
     if(r.section === 'maquillaje'){
     mainProd.insertAdjacentHTML("beforeend",card);
  };
     
  });//forEach
};//if
});


