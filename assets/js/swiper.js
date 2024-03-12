const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    fade: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // --- For Responsive ---
    // breakpoints: {
    //     450: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1,
    //     },
    //     1000: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 1,
    //     },
    //     1200: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 1,
    //     },
    // },
});
