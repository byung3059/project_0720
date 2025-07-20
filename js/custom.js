$(function () {

    const main_visual_left_slide = new Swiper('.main_visual_left_slide', {
        loop: true,
        effect: 'fade',
    });
    const main_basic_pro_slide = new Swiper('.main_basic_pro_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        navigation: {
            nextEl: ".main_basic_pro_nav .arrow_next",
            prevEl: ".main_basic_pro_nav .arrow_prev",
        },

        breakpoints: {
            1500: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
    const main_pro_slide = new Swiper('.main_pro_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });

    $('#main_map .left .map_link_list_btn button').on('click', function () {

        let idx = $(this).parent().index();
        $('#main_map .right .map_link_itm_list .map_link_itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')


        $(this).parent().addClass('on').siblings().removeClass('on')
    });
    const main_anmt_left_slide = new Swiper('.main_anmt_left_slide', {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        navigation: {
            nextEl: ".main_anmt_left_slide_nav .arrow_next",
            prevEl: ".main_anmt_left_slide_nav .arrow_prev",
        },
    });
    const main_anmt_right_slide = new Swiper('.main_anmt_right_slide', {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        navigation: {
            nextEl: ".main_anmt_right_slide_nav .arrow_next",
            prevEl: ".main_anmt_right_slide_nav .arrow_prev",
        },
    });

});