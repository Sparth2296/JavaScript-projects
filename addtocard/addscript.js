let d = localStorage.getItem('cart')
let add = JSON.parse(d);
console.log(add);

let cartWrapper = document.querySelector(".container-of-cart");
let cardOfCart = document.querySelector(".cart-wrapper");

cardMaker(add);
function remove(index) {
  add.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(add));
  window.location.reload()
  console.log(add);
  cardMaker(add);
}
let remove_icon = document.querySelectorAll("#remove-icon");
console.log(remove_icon);

function cardMaker(objName) {
  // cardOfCart.innerHTML = "";

  objName.forEach((val, index) => {
    cardOfCart.innerHTML += `
    <div class="line-of-card">
    <div class="cart-img">
    <img src="${val.image}" alt="">
    </div>
    <div class="cart-intro">
    <h1>${val.title}</h1>
    <h2>${val.subtitle}</h2>
    <h3>${val.price}</h3>
    </div>
    <div class="del-cart" onclick="detele('${val.id}')">
    <button>Buy Now</button>
    </div>
    <i class="fa-solid fa-trash" id="remove-icon" onclick="remove(${index})"></i>
    </div>
    </div>
    
    `;
  });
}
