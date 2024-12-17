let objData = [
  {
    id: "1",
    img: "./images/Vivo-X90-Pro-1.jpg",
    title: "Vivo X90 Pro",
    subtitle: "Colebs with Zeiss",
    dtls: "The Vivo X90 Pro is a flagship smartphone featuring a 6.78-inch AMOLED display and the powerful MediaTek Dimensity 9200 chipset. Its ZEISS-engineered camera system, led by a 50MP main sensor, excels in low-light photography. With a 4870mAh battery and 120W fast charging, it offers lasting performance and quick recharging.",
    price: "100,000",
  },

  {
    id: "2",
    img: "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1698909173129/zip/img/vivo-v29-screen-feature-pc2.png",
    title: "Vivo V29 Pro",
    subtitle: "Colebs with Zeiss",
    dtls: "The Vivo V29 Pro is a stylish mid-range smartphone with a 6.78-inch curved AMOLED display and a 120Hz refresh rate. Powered by the MediaTek Dimensity 8200 chipset, it delivers efficient performance for daily tasks and gaming. Its 50MP OIS Ultra-Sensing camera captures sharp and vibrant photos, even in challenging lighting. The phone is equipped with a 4600mAh battery and 80W fast charging for quick power-ups. It also features a sleek design with unique color-changing back options.",
    price: "30,000",
  },
  {
    id: "3",
    img: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/11/image-65.png?ssl=1",
    title: "Vivo X200 Pro",
    subtitle: "Colebs with Zeiss",
    dtls: "The Vivo X200 Pro is a flagship smartphone with a 6.78-inch LTPO AMOLED display, MediaTek Dimensity 9400 chipset, and cutting-edge ZEISS-engineered cameras, including a 200MP periscope telephoto lens. It boasts a 6000mAh battery with 90W wired and 30W wireless charging, along with IP68 water resistance. Running on Android 15, it delivers high performance, excellent photography, and sleek durability.",
    price: "159,999",
  },
  {
    id: "4",
    img: "https://eu-exstatic-vivofs.vivo.com/8Xa6evfY85lu15Pb/product/1705631133141/zip/img/webp/section4-phone-pro-black-mb.jpg.webp",
    title: "Vivo X100 Pro",
    subtitle: "Colebs with Zeiss",
    dtls: "Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfacesappear to be sliced and pulled aside,allowing room for growth.",
    price: "130,999",
  },
  {
    id: "5",
    img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/product/1718793581518/zip/img/webp/vivo-x-fold3-pro-with-ipx8-true-water-resistance-prowess-mobile.jpg.webp",
    title: "Vivo X3 pro",
    subtitle: "Colebs with Zeiss",
    dtls: "Harvest Vases are a reinterpretationof peeled fruits and vegetables asfunctional objects. The surfacesappear to be sliced and pulled aside,allowing room for growth.",
    price: "193,999",
  },
];

function getData() {
  objData.forEach((val) => {
    // console.log(element.img);
    let append = document.querySelector(".wrapper");
    append.innerHTML += `
      <div class="card-product">
<div class="product-img">
<img src="${val.img}">
</div>
<div class="product-info">
<div class="product-text">
<h1>${val.title}</h1>
<h2>${val.subtitle}</h2>
<p>${val.dtls}</p>
</div>
<div class="product-price-btn">
<p><span> &#x20B9;${val.price}</span></p>
<button type="button" id="btn" onclick="sendData('${val.img}','${val.title}','${val.subtitle}','${val.dtls}','${val.price}','${val.id}')">Add to Card</button>
</div>
</div>
</div>
`;
  });
}

getData();
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function sendData(image, title, subtitle, dtls, price, id) {
  cart.push({ image, title, subtitle, dtls, price, id });

  let myCart = JSON.stringify(cart);
  localStorage.setItem('cart', myCart);

  let divCount = document.querySelector("#count");

  divCount.innerHTML = `
 <span>${cart.length}</span>
 `;
}
