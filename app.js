const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const shoe = document.querySelector(".shoe img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const size = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/10;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    shoe.style.transform = "translateZ(250px) rotateZ(-30deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    shoe.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});