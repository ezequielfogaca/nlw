//Tipos de dados
//String ""
//Number 01
//Object
//Boolean true or false
//Array []

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollwheelZoom: false,
  zoomControl: false
}

//Create map

const map = L.map('mapid', options).setView([-23.4849015, -47.483059], 15);

//Create and add titeLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//Create icon

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



//Create and add marker

L
.marker([-23.4849015, -47.483059], {icon})
.addTo(map)


/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  console.log(button.children)

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  // selecionar a image clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // atualizar o container de imagem
  imageContainer.src = image.src

  // add a classe .active para o buttom que foi clicado
  button.classList.add('active')

}
  

