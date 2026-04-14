export const sizesSlider = () => {
    new Swiper('.sizes__slider', {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: '.sizes__slider-button--prev',
            prevEl: '.sizes__slider-button--next',
        },
    });
}; 