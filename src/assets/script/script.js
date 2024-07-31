function tes(){
    console.log('tes');
    const swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
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