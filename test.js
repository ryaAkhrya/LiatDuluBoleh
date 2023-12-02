const bungkus = document.querySelector(".bungkus");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBut = document.querySelector(".yesBut");
const noBut = document.querySelector(".noBut");

yesBut.addEventListener("click", ( ) => {
    question.innerHTML = "Hehe, aku juga suka^^";
    gif.src =
    "senenghehe.webp";
});

noBut.addEventListener("click", ( ) => {
    question.innerHTML = "Kok gitu:(";
    gif.src =
    "sedih.webp";
});