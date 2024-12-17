let container = document.querySelector(".container");
let productResults = document.querySelector(".productResults");

async function cardReandring() {
  try {
    let res = await fetch("apple.json");

    if (!res.ok) {
      throw new Error("Your JSON file does not exist....");
    }

    let final = await res.json();
    // console.log(final);

    let apple = final.mobile;

    apple.forEach((val) => {
      // console.log(val);

      container.innerHTML += `
        <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error(error);
  }
}

function likekaro(likeElement) {
  // Get the image element inside the clicked like icon
  let img = likeElement.querySelector("img");

  // Toggle the heart icon
  if (img.src.includes("heart-regular")) {
    img.src = "./assets/images/heart-solid.svg";
  } else {
    img.src = "./assets/images/heart-regular.svg";
  }
}

// Initialize card rendering
cardReandring();

// for geting card useing search bar
async function searchData() {
  let search = document.getElementById("search");

  try {
    let res = await fetch("apple.json");

    let final = await res.json();

    let product = final.mobile;
    console.log(product);

    search.addEventListener("click", () => {
      let searchBar = document.getElementById("userInput").value.toLowerCase();

      console.log(searchBar);

      let result = product.filter((val) =>
        val.model.toLowerCase().includes(searchBar)
      );
      let body = document.getElementById("body");

      console.log(result);

      if (result.length == 0) {
        // body.style.background = "url(../images/CodePen-404-Page.gif)"
        container.style.display = "none";
        productResults.style.background = "url(../images/CodePen-404-Page.gif)"
      } else {
        productResults.innerHTML = " ";
        result.forEach((val) => {
          container.style.display = "none";
          productResults.innerHTML += `
          
                 <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
            `;
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
}
searchData();

// for geting iphone card to click iphone button
let iphone = document.getElementById("iphonebtn");

iphone.addEventListener("click", () => {
  
  getiphone();
});

async function getiphone() {
  try {
    let fecthIphone = await fetch("apple.json");

    let finalIphone = await fecthIphone.json();

    let iphoneres = finalIphone.mobile.filter((val) => val.type == "iphone");

    console.log(iphoneres);

    container.innerHTML = " ";
    productResults.innerHTML =" "

    iphoneres.forEach((val) => {
      productResults.innerHTML += `
          
                 <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
            `;
    });
  } catch (er) {
    console.log(er);
  }
}

// geting ipad card click to ipad bottun

let ipad = document.getElementById("ipadbtn");

ipad.addEventListener("click", () => {
  
  getipad();
});

async function getipad() {
  try {
    let fecthIpad = await fetch("apple.json");

    let finalIpad = await fecthIpad.json();

    let ipadres = finalIpad.mobile.filter(
      (val) => val.type.toLowerCase() == "ipad"
    );

    console.log(ipadres);
    container.innerHTML = " ";

productResults.innerHTML = " "
    ipadres.forEach((val) => {
      productResults.innerHTML += `
          
                 <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
            `;
    });
  } catch (er) {
    console.log(er);
  }
}

let iwatch = document.getElementById("iWatchbtn");

iwatch.addEventListener("click", () => {
  getiwatch();
});

async function getiwatch() {
  try {
    let fecthIwatch = await fetch("apple.json");

    let finalIwatch = await fecthIwatch.json();

    let iwatchres = finalIwatch.mobile.filter(
      (val) => val.type.toLowerCase() == "iwatch"
    );

    console.log(iwatchres);
    productResults.innerHTML="";
  container.innerHTML = " ";


    iwatchres.forEach((val) => {
      productResults.innerHTML += `
          
                 <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
            `;
    });
  } catch (er) {
    console.log(er);
  }
}

// to get mac book to click button

let mac = document.getElementById("MacBookbtn");

mac.addEventListener("click", () => {
  getMac();
});

async function getMac() {
  try {
    let fecthMac = await fetch("apple.json");

    let finalMac = await fecthMac.json();

    let Macres = finalMac.mobile.filter((val) => val.type == "Mac Book");

    console.log(Macres);

  container.innerHTML = " ";
  productResults.innerHTML="";
    Macres.forEach((val) => {
      productResults.innerHTML += `
          
                 <div class="card-main">
          <div class="image-box">
            <div class="like-icon" onclick="likekaro(this)">
                <img src="./assets/images/heart-regular.svg" alt="like">
            </div>
            <img src="${val.image}" alt="" class="main-image">
          </div>
          <div class="card-intro">
            <div class="card-intro-top">
              <div class="product-name">
                  <h2>${val.model}</h2>
              </div>
              <div class="dtl-box">
                  <div class="product-reating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa-solid fa-star-half"></i>
                      </div>
                      ${val.reating}
                  <div class="reviwe-box">
                      <i class="fa-regular fa-message"></i><span>${val.massage}</span>
                  </div>
              </div>
            </div>
            <div class="card-intro-bottom">
              <div class="right-intro">
                <div class="dis">
                    <div class="discount-box">
                        <del>${val.price}</del>
                    </div>
                    <div class="discount-pr">${val.discount}</div>
                </div>
                <div class="price-box">
                    <h2>${val.discountPrice}</h2>
                </div>
              </div>
              <div class="buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
            `;
    });
  } catch (er) {
    console.log(er);
  }
}
