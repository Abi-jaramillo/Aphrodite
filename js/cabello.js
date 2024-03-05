

function addItem(item) {
  const itemHTML = ` <div class=col> <div class="card"       >
  <img src="`+ item.img + `" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">`+ item.name + `</h5>
    <h6 class="card-title">`+ item.section + `</h6>
    <p class="card-text">`+ item.description + `</p>
    <p class="card-text">`+ item.price + `</p>
    <a href="#" class="btn btn-primary"  id="carrito-productos"  >Agregar al carrito</a>
    
  </div>
</div> 
</div> 
</br>`;
  const itemsContainer = document.getElementById("list-itemsHair");
  itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'Kit Pro-Reconstrucción',
    'section':'Cabello',
    'img':'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw49370b91/6070_1.jpg',
    'description':'Kit para cabellos químicamente dañados. Proporciona fuerza y resistencia, además de que ofrece un reequilibrio de la fibra capilar',
    'price':'$220'});

addItem({'name':'Shampoo 2 en 1',
    'section':'Cabello',
    'img':'https://production.na01.natura.com/on/demandware.static/-/Sites-nat-mex-b2b2c-catalog/default/dw27bd57e1/78904_1.jpg',
    'description':'Shampoo 2 en 1 ideal para uso diario y todo tipo de cabello. Contiene manteca de cacao y complejos vitamínicos',
    'price':'$130'});

addItem({'name':'Shampoo hidratante',
    'section':'Cabello',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_ShampooTeaTree_250ml_Haircare_1800x1800.jpg?v=1670532464',
    'description':'Purifica tu cabello con este shampoo dejando una sensación de limpieza profunda. Ayuda a reequilibrar el exceso de grasa sin modificar la hidratación esencial del cabello',
    'price':'$260'});

addItem({'name':'Acondicionador',
    'section':'Cabello',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/Acondicionador_sin_enjuague_deAceite_de_RicinoNegro_Jamaicano_1_1800x1800.jpg?v=1678826719',
    'description':'Descubre el secreto para un cabello radiante, suave y sedoso con nuestro acondicionador. Revitaliza, fortalece y elimina el frizz',
    'price':'$260'});

addItem({'name':'Mascarilla',
    'section':'Cabello',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_MascarillaCapilarPlatano_240ml_Haircare_1800x1800.jpg?v=1670956529',
    'description':' Nutre intensamente el cabello desde la raíz hasta las puntas, combatiendo el frizz y dejándolo más brilloso y manejable',
    'price':'$180'});
    
addItem({'name':'Cepillo',
    'section':'Cabello',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_CepilloCuadradoDeBambooGrande_Accesorios_1800x1800.jpg?v=1667254507',
    'description':'Cepillo de cerdas gruesas fabricado a base de bambú',
    'price':'$90'});


  
let mainProd= document.getElementById("list-itemsHair");    
window.addEventListener("load",function(event){
  event.preventDefault();
  if(this.localStorage.getItem("datos")!=null){
      datos = JSON.parse(this.localStorage.getItem("datos"));
      datos.forEach((r) => {
       let= card = `<div class=col> <div class="card">
       <img src=${r.img} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${r.name}</h5>
         <h6 class="card-title">${r.section}</h6>
         <p class="card-text">${r.description}</p>
         <p class="card-text">${r.price}</p>
         <a href="#" class="btn btn-primary"  id="carrito-productos"  >Agregar al carrito</a>
         
       </div>
     </div> 
     </div> 
     </br>`;
     if(r.section === 'cabello'){
      mainProd.insertAdjacentHTML("beforeend",card);
  };
     
  });//forEach
};//if
});