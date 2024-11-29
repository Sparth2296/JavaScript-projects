let nextBtn = document.getElementById("next-button");
    let quotes = [
      {
        image: "./image/01.jpg",
        quotetion: "“First they ignore you, then they laugh at you, then they fight you, then you win.”",
        Name: " - Mahatma Gandhi",
        back : "./image/gandhi .jpg"
      },
      {
        image: "./image/02 apj.jpg",
        quotetion: " “If you want to shine like a sun, first burn like a sun.”",
        Name: " - A. P. J. Abdul Kalam",
        back : "./image/A.P.J.png"
      },
      {
        image: "./image/03 king kohli.jpg",
        quotetion: "“Self-belief and hard work will always earn you success.”",
        Name: " - Virat Kohli",
        back : "./image/Virat.webp"
      },
      {
        image: "./image/0.4 ravindranath.webp",
        quotetion: "“I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.”",
        Name: " - Rabindranath Tagore",
        back : "./image/Tagour.avif"
      },
      {
        image: "./image/0.5 vivekanad.jpg",
        quotetion: "We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.”",
        Name: " - Swami Vivekananda",
        back : "./image/Swami.jpg"
      },
    ];
    let count = 0;
    let img = document.querySelector("img");
    let quote = document.querySelector("h2");
    let author = document.querySelector("strong");
    let imgContainer = document.querySelector(".right-imgage");
    let textContainer = document.querySelector(".left-dtl");
    let body = document.getElementById('root');

    function updateCard() {
      
      imgContainer.style.animation = "slide-out-left 0.5s ease-in-out forwards";
      textContainer.style.animation = "slide-out-right 0.5s ease-in-out forwards";
      body.style.background = `url('${quotes[count].back}')`;
      

      setTimeout(() => {
        img.src = quotes[count].image;
        quote.textContent = quotes[count].quotetion;
        author.textContent = quotes[count].Name;

        imgContainer.style.animation = "slide-in-left 0.5s ease-in-out forwards";
        textContainer.style.animation = "slide-in-right 0.5s ease-in-out forwards";
      }, 500);
    }

    nextBtn.addEventListener("click", () => {
      count ++;
      if(count==5){
        count =0;
      }
      updateCard();
    });