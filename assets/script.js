const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
	
];
 /* Fonctionement du boutton */
let boutton_gauche = document.querySelector('.arrow_left');
let boutton_droit = document.querySelector('.arrow-right');
let index = 0
boutton_gauche.addEventListener("click" , function () {
    index = (index - 1 + slides.length) % slides.length;
	goToSlide(index);
});

boutton_droit.addEventListener("click" , function () {
	index = (index + 1) % slides.length;
	goToSlide(index);
});


/* Fonctionement du points */
document.addEventListener("DOMContentLoaded", function() {
    const dotsContainer = document.querySelector(".dots");

    
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });
});
/* Fonctionement du changement */
function goToSlide(index) {
    const image = slides[index].image;
    const tagLine = slides[index].tagLine;
    const bannerImage = document.querySelector(".banner-img");
    const tagLineElement = document.querySelector("#banner p");
	bannerImage.src = "./assets/images/slideshow/" + image;
    tagLineElement.innerHTML = tagLine; 
	const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
    });
}
