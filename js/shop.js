const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close-modal');


for(let i = 0; i < openModal.length; i++){
openModal[i].addEventListener('click', () => {
  // Getting the parent of the button
  var parent = openModal[i].parentNode;
  // getting the shop item text 
  var text = parent.querySelector('.shop-text');
  var price = parent.querySelector('.shop-price');
  var itemDesc = parent.querySelector('.item-description');
  var img = parent.querySelector(".tumbler-texture").src;
  // Getting the modal selector
  var modalTitle = modal.querySelector('#modal-title');
  var modalText = modal.querySelector('#modal-text');
  var modalDesc = modal.querySelector('#modal-descripton');
  // finding model and material
  const modelViewerTexture = modal.querySelector('#viewer');
  const material = modelViewerTexture.model.materials[1];
  // Setting the modal elements
  modalTitle.innerHTML = text.innerHTML;
  modalText.innerHTML = price.innerHTML;
  modalDesc.innerHTML = itemDesc.innerHTML;

  // const texture = modelViewerTexture.createTexture("../../img/sagiri.png");
  // material.pbrMetallicRoughness['baseColorTexture'].setTexture(texture);

  const createAndApplyTexture = async (img) => {
    const texture = await modelViewerTexture.createTexture(img);
    material.pbrMetallicRoughness['baseColorTexture'].setTexture(texture);
  }

  createAndApplyTexture(img);


  // Displaying the Modal
  modal.showModal();

});
}

closeModal.addEventListener('click', () => {
  modal.close();
})

