
//Mouse Move
// let cursor = document.querySelector(".cursor");
// document.addEventListener("mousemove", (eo) => {
//     let X = eo.pageX;
//     let Y = eo.pageY;

//     cursor.style.top = `${event.clientY}px`;
//     cursor.style.left = `${event.clientX}px`;
// })

/////////scrolBtnTop /navbar ///////////

let scrolBtnTop = document.querySelector(".scrolBtnTop");
let navbar = document.querySelector(".navbar")
window.addEventListener("scroll", (eo) => {
    if (window.scrollY >= 300) {
        navbar.classList.add("navbarShaw");
        scrolBtnTop.classList.add("scrolBtnTopShow");

    } else {

        (window.scrollY <= 300)

        navbar.classList.remove("navbarShaw");
        scrolBtnTop.classList.remove("scrolBtnTopShow");
    }
});
//////////////

// Type Js
let CopyRight = new Typed('#CopyRight', {
    strings: ['SHady Abdo'],
    typeSpeed: 100,
    backSpeed: 70,
    fadeOut: false,
    loop: true
});
///////////////////

// swiper js//

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        loop: true,
      },
    pagination: {
        el: ".swiper-pagination",
    },
});
// //////////
// veni box
new VenoBox({
    selector: '.my-video-links',
});

///////////////


// AOS library

AOS.init();