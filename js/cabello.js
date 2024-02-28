function addItem(item) {
  const itemHTML = `<div class="card" style="width: 18rem;">
  <img src="`+item.img +`" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">`+item.name+`</h5>
    <p class="card-text">`+item.description+`</p>
    <p class="card-text">`+item.price+`</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>`;
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'Shampoo',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_ShampooTeaTree_250ml_Haircare_1800x1800.jpg?v=1670532464',
    'description':'Este Shampoo deja el cabello y el cuero cabelludo grasos purificado, vigorizado y con sensación de limpieza profunda. Contribuye a reequilibrar el exceso de grasa sin retirar la hidratación esencial del cabello',
    'price':'$260'});

addItem({'name':'Acondicionador',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/Acondicionador_sin_enjuague_deAceite_de_RicinoNegro_Jamaicano_1_1800x1800.jpg?v=1678826719',
    'description':'Esta crema hidratante suave pero intensa es justo lo que necesitas, ya que repone la humedad y reduce el encrespamiento',
    'price':'$260'});

addItem({'name':'Mascarilla',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_MascarillaCapilarPlatano_240ml_Haircare_1800x1800.jpg?v=1670956529',
    'description':' nutre intensamente el cabello de la raíz a las puntas, dejándolo más brillante al instante, combatiendo el frizz sin apelmazar el cabello',
    'price':'$180'});
    
addItem({'name':'Cepillo',
    'img':'https://www.thebodyshop.mx/cdn/shop/products/TBS_CepilloCuadradoDeBambooGrande_Accesorios_1800x1800.jpg?v=1667254507',
    'description':'Cepillo ovalado de bambú grande',
    'price':'$90'});

