const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");


const products = [
  {
    id:1,
    title: "CHANEL",
    price: 299,
    desc: "A new dawn for COCO CHANEL. A new face, a dualistic woman, a sensual fragrance.",
    bgImg: "./img/footer.jpg",
    type: [
      {
        code: "A",
        img: "./img/Chanel - Mademoiselle.png",
      },
      {
        code: "B",
        img: "./img/Chanel - Gabrielle.png",
      },
      {
        code: "C",
        img: "./img/Chanel - No 5.png"
      }
    ]
  },
  {
    id:2,
    title: "TOM FORD",
    price: 159,
    desc: "This fragrance merges the purifying essence of Palo Santo with notes of seductive ebony wood, arousing exquisite calm and heightened spiritual luxury.",
    bgImg: "./img/footer2.jpg",
    type: [
      {
        code: "A",
        img: "./img/Tom Ford - Ebene Fume.png",
      },
      {
        code: "B",
        img: ".img/Tom Ford - Lost Cherry-.png",
      },
      {
        code: "C",
        img: "./img/Tom Ford - Blend Oud.png"
      }
    ]
  },

  {
    id:3,
    title: "D & G",
    price: 329,
    desc: "Dolce & Gabbana EDT surprise you and define your personality using this exclusive men's perfume with a unique, personal perfume.",
    bgImg: "./img/footer3.jpg",
    type: [
      {
        code: "A",
        img: "./img/D&G - The only one.png",
      },
      {
        code: "B",
        img: "./img/D&G - K.png",
      },
      {
        code: "C",
        img: "./img/D&G - Desire.png"
      }
    ]
  },

  {
    id:4,
    title: "GUCCI",
    price: 199,
    desc: "The new chapter of Gucci signature fragrances revels in the notion of men who are truly liberated.",
    bgImg: "./img/footer4.jpg",
    type: [
      {
        code: "A",
        img: "./img/Gucci  -flora.png",
      },
      {
        code: "./img/Gucci - gucci.png",
      },
      {
        code: "C",
        img: "./img/Gucci - Oud.png"
      }
    ]
  }
]

let choosenProduct = products[0]

const currentProductBg = document.querySelector(".bg");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductType = document.querySelectorAll(".type");

menuItem.forEach((item, index) => {
  item.addEventListener('click', (e)=>{
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // switch active toggle
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    //change choosen product
    choosenProduct = products[index]

    //change text of current product
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = "$" + choosenProduct.price
    currentProductBg.src = choosenProduct.bgImg
    currentProductDesc.textContent = choosenProduct.desc
    currentProductImg.src = choosenProduct.type[0].img
  })
})

currentProductType.forEach((type, index) =>{
  type.addEventListener("click", () =>{
    currentProductImg.src = choosenProduct.type[index].img
  })
})

const productBtn = document.querySelector(".productBtn");
const paymentModal = document.querySelector(".payment");
const closeModal = document.querySelector(".close");

productBtn.addEventListener("click", () =>{
  paymentModal.style.display = "flex"
})
closeModal.addEventListener("click", () =>{
  paymentModal.style.display = "none"
})