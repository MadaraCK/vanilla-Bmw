const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');
const slider = document.querySelector('.slider');
const sliderv2 = document.querySelector('.slider_v2');
const sliderTrack = document.querySelector('.slide_track_v2');
const imgSlidee = document.querySelectorAll('.imgslide_v2');
const slidev2 = document.querySelector('.slide_v2');



burgerIcon.addEventListener('click', function () {
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
})

function changeImage() {
    if (window.innerWidth <= 600) {
        slider.style.display = 'none'
        sliderv2.classList.toggle('slider_v2x')
        sliderTrack.classList.toggle('slide_track_v2x')
        imgSlidee.classList.toggle('imgslide_v2x')
        slidev2.classList.toggle('slide_v2x')
    }
}

console.log(window.innerWidth)
changeImage()