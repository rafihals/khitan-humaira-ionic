function tes() {
    const swiper = new Swiper('.swiper', {
        autoHeight: false,
        loop: true,
        speed: 800,
        effect: 'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    return swiper;
}
