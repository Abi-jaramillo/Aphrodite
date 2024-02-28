function addItem(item) {
  const itemHTML = ` <div class=col> <div class="card"       >
  <img src="`+ item.img + `" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">`+ item.name + `</h5>
    <p class="card-text">`+ item.description + `</p>
    <p class="card-text">`+ item.price + `</p>
    <a href="#" class="btn btn-primary"  id="carrito-productos"  >Agregar al carrito</a>
    
  </div>
</div> 
</div> 
</br>`;
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Ácido Hialurónico 2% + B5',
    'img':'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwf5298c56/Images/products/The%20Ordinary/2024-02-14-HA+B5-Packshot_30mL.png?sw=1200&sh=1200&sm=fit',
    'description':'Proporciona una hidratación voluminosa instantánea para brindar una piel más suave, tersa y de aspecto saludable. La fórmula liviana repone los niveles de hidratación de la piel con resultados durante todo el día.',
    'price': '$300'
  });

addItem({'name':'Set Diario',
    'img':'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwb0d50059/Images/products/The%20Ordinary/rdn-the-clear-set.png?sw=1200&sh=1200&sm=fit',
    'description':'Incluye tres productos que se pueden utilizar en una rutina diaria de cuidado de la piel. El limpiador Squalane elimina el maquillaje. Hyaluronic Acid 2% + B5 favorecer la hidratación de múltiples capas de la superficie de la piel.',
    'price': '$450'
  });
  
addItem({'name':'Limpiador en crema con glicolípidos',
    'img':'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwe8e28753/Images/products/The%20Ordinary/rdn-glycolipid-cream-cleanser-150ml.png?sw=1200&sh=1200&sm=fit',
    'description':'El limpiador en crema con glicolípidos limpia eficazmente la piel y elimina maquillaje como base, delineador de ojos y rímel. Esta formulación utiliza un agente limpiador glicolípido de origen vegetal que limpia la piel respetando la barrera cutánea para mantener la hidratación.',
    'price': '$250'
  });


addItem({'name':'El dúo de pestañas y cejas',
    'img':'https://theordinary.com/dw/image/v2/BFKJ_PRD/on/demandware.static/-/Sites-deciem-master/default/dwcda5ed7f/Images/products/The%20Ordinary/rdn-lash-brow-duo.png?sw=1200&sh=1200&sm=fit',
    'description':'El Lash & Brow Duo incluye dos de nuestros sueros Multi-Peptide Lash and Brow más vendidos, porque cuando se trata de pestañas y cejas, nunca hay nada bueno que esté de más. Ayudar a nutrir y proteger las pestañas y las cejas mientras mejora la apariencia de densidad y apariencia.',
    'price': '$500'
  });