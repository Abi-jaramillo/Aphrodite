
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
  'name': 'Mascara de almendras',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-AlmondMascara-EP-WEB_568x756.jpg?v=1653317650ttps://www.thebodyshop.mx/cdn/shop/products/TBS_ShampooTeaTree_250ml_Haircare_1800x1800.jpg?v=1670532464',
  'description': 'Este esencial de belleza contiene los beneficios del aceite de almendras para brindar desempeño y nutrición.',
  'price': '$160'
});

addItem({
  'name': 'Tinte de betabel',
  'img': 'https://bnatural.com.mx/cdn/shop/products/EP_BeetrootTint_SQ_Joy2.jpg?v=1695104661&width=1445', 'description': 'Nuestro tinte para labios y mejillas está repleto de un vibrante pigmento que dura todo el día. Con extracto de betabel para nutrir e hidratar.',
  'price': '$100'
});

addItem({
  'name': 'Corrector con lichi',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-LycheeCremeCorrector-EP-WEB-02-Dos5_568x756.jpg?v=1699402268',
  'description': 'Transforma tu piel con este cremoso corrector para neutralizar las ojeras y corregir el tono de piel.',
  'price': '$180'
});

addItem({
  'name': 'Iluminador de vainilla',
  'img': 'https://ereperez.mx/cdn/shop/products/ErePerez-VanillaHighlighter-EP-WEB-FallingStar_568x756.jpg?v=1699402070',
  'description': 'Disfruta del brillo de nuestro increíble iluminador de vainilla.',
  'price': '$150'
});

addItem({
  'name': 'Maquillaje de quinoa',
  'img': 'https://ereperez.mx/cdn/shop/products/ere-perez-quinoa-water-foundation-rise-web-new_568x756.jpg?v=1699402640',
  'description': 'Repleta de ingredientes naturales antiinflamatorios, esta base liviana como una pluma está bellamente formulada para dar una cobertura fina y natural que se fija como un acabado mate uniforme.',
  'price': '$190'
});

addItem({
  'name': 'Mascara con sábila en gel',
  'img': 'https://ereperez.mx/cdn/shop/products/EP_MascarasAloe_WebNew_568x756.jpg?v=1632175015',
  'description': '¡Dale un poco de amor a tus cejas y pestañas con una fórmula acondicionadora que peina y da una capa de brillo!',
  'price': '$90'
});



