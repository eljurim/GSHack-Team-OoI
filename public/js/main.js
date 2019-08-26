let objTotal = {"k24lk234kln2l34nid1":{"visited_products":[{"sku":[34004228,34004228,34004228,34004228,34004228,34004228,34004228],"date":"2019-08-25"}]},"k24lk234kln2l34nid2":{"visited_products":[{"skus":[1500291521,28007572,34004228],"date":"2019-08-25"}]},"newCookie":{"skus":[1,2,3,4],"date":"2019-08-25T03:47:43.431Z"},"12j3lk12j3k12kl":{"skus":[233,23213],"date":"2019-08-25T03:48:10.739Z"}}

let objestosAndres = [{
    imgUrl : "https://elektra.vteximg.com.br/arquivos/ids/1853096-1000-1000/28007574.jpg?v=636858406321530000",
    title:"Laptop HP 15-da0002la Intel Celeron RAM 4GB DD 500GB W10H 15.6 - Blanco",
    description:`* Videochats claros y fluidos para que puedas mantenerte en contacto con tu familia y
    amigos
    
    * Disfruta tu entretenimiento con la excelente calidad y los detalles de alta
    definición que brindan 1 millón de píxeles

    
    * Trabaja con comodidad con un teclado de tamaño completo y un teclado numérico
    integrado, con desplazamiento de la tecla de 1,5 mm

    * Tipo de Pantalla: WLED`,
    price:"$5,599.00"
    },
    {
        imgUrl : "https://elektra.vteximg.com.br/arquivos/ids/1853096-1000-1000/28007574.jpg?v=636858406321530000",
        title:"Laptop HP 15-da0002la Intel Celeron RAM 4GB DD 500GB W10H 15.6 - Blanco",
        description:`* Videochats claros y fluidos para que puedas mantenerte en contacto con tu familia y
        amigos
        
        * Disfruta tu entretenimiento con la excelente calidad y los detalles de alta
        definición que brindan 1 millón de píxeles
    
        
        * Trabaja con comodidad con un teclado de tamaño completo y un teclado numérico
        integrado, con desplazamiento de la tecla de 1,5 mm
    
        * Tipo de Pantalla: WLED`,
        price:"$20,599.00"
        },
        {
            imgUrl : "https://elektra.vteximg.com.br/arquivos/ids/1853096-1000-1000/28007574.jpg?v=636858406321530000",
            title:"Laptop HP 15-da0002la Intel Celeron RAM 4GB DD 500GB W10H 15.6 - Blanco",
            description:`* Videochats claros y fluidos para que puedas mantenerte en contacto con tu familia y
            amigos
            
            * Disfruta tu entretenimiento con la excelente calidad y los detalles de alta
            definición que brindan 1 millón de píxeles
        
            
            * Trabaja con comodidad con un teclado de tamaño completo y un teclado numérico
            integrado, con desplazamiento de la tecla de 1,5 mm
        
            * Tipo de Pantalla: WLED`,
            price:"$5,599.00"
            }    ]
//console.log(objTotal)

const htmlContructor = function (unObj) {
    
    let htmlObj = `
    <div class="card">
    <div class="card-body">
      <img
        src=${unObj.imgUrl}
        alt=""
        width="220vw"
      />
      <article class="info">
        <p class="name">
          ${unObj.title}
        </p>
        <span clas="description"></span>
        <p></p>
        <p>${unObj.description}</p>
        <span class="price"></span>
        <p>${unObj.price}</p>
        <span></span>
        <p></p>
        <span></span>
        <p></p>
      </article>
    </div>
  </div>
    `
    $('section').append(htmlObj)


}

objestosAndres.forEach((objectoIterado)=>{
    console.log("Estoy haciendo un loop")
    console.log('')
    console.log(objectoIterado.price)
    htmlContructor(objectoIterado)
})

var getVisitedIds = () =>{
    let cookiesString = decodeURIComponent(document.cookie)
    let cookieArray = cookiesString.split(';')
    var match = cookieArray.find(value => value.match('scarab.mayAdd'));
    var visitedIdsObjects = JSON.parse(match.split('=')[1])
    var visitedIdsArray = visitedIdsObjects.map((value)=> Object.values(value)[0])
    console.log(visitedIdsArray)
}
