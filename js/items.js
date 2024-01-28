var jsondata;
var url = "../js/data.json"
const shopList = document.querySelector('#shop-flex');

function getItems(url, cb) {
    fetch(url)
    .then(response => response.json())
    .then(result => {
        cb(result);
    });
}

getItems(url, (data) =>{
    jsondata = data.items;

    const shopItem = document.createElement("li");
    shopItem.classList.add("shop-item");

    const mainImg = document.createElement("img");
    mainImg.classList.add("shop-image");
    mainImg.src = jsondata[0]["image"];
    mainImg.loading = "lazy";
    shopItem.append(mainImg);

    const button = document.createElement("Button");
    button.classList.add("open-modal");
    button.classList.add("open");
    const buttonText = document.createTextNode("Preview")
    button.append(buttonText)
    shopItem.append(button);

    const tumblerImg = document.createElement("img");
    tumblerImg.classList.add("tumbler-texture");
    tumblerImg.src = jsondata[0]["image"];
    tumblerImg.loading = "lazy";
    tumblerImg.style = "display:none;";
    shopItem.append(tumblerImg);

    const itemName = document.createElement("p");
    itemName.classList.add("shop-item-text");
    itemName.classList.add("shop-text");
    const nameNode = document.createTextNode(jsondata[0]["name"]);
    itemName.append(nameNode);
    shopItem.append(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("shop-item-text");
    itemPrice.classList.add("shop-price");
    const priceNode = document.createTextNode("$ " + jsondata[0]["price"]);
    itemPrice.append(priceNode);
    shopItem.append(itemPrice);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-description");
    const descNode = document.createTextNode(jsondata[0]["description"]);
    itemDesc.style = "display:none;";
    itemDesc.append(descNode);
    shopItem.append(itemDesc);

    const buttonID = document.createElement("div");
    buttonID.id = "product-component-" + jsondata[0]["product-id"];
    buttonID.classList.add("shop-button");
    shopItem.append(buttonID);

    shopList.append(shopItem);

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
})