$(document).ready(function() {

    $('.slider-main').slick({
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        dots: true,
        // appendDots: $(this).siblings('.dots-container'),
        customPaging: function(slider, i) {
            return '<div class="slider-dot-1"></div>';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    

    $('.slider-advantages').slick({
        infinite: true,
        speed: 500,
        dots: true,
        // appendDots: $(this).siblings('.dots-container'),
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false,
        dots: false,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe: true,
                    dots: true,
                }
            }
        ]
    });

    $('.slider-consultation').slick({
        // infinite: true,
        speed: 500,
        dots: true,
        // appendDots: $(this).siblings('.dots-container'),
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        variableWidth: false,
        swipe: false,
        dots: false,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    swipe: true,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,
                    focusOnSelect: true,
                    // initialSlide: 1,
                }
            }
        ],
    });

    $('.slider-doctors').slick({
        infinite: false,
        speed: 500,
        dots: true,
        centerMode: false,
        variableWidth: false,
        // appendDots: $(this).siblings('.dots-container'),
        prevArrow: $('.btn-left'),
        nextArrow: $('.btn-right'),
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                }
            }
        ]
    });

    $('.button-filter').on('click', function(e) {
        var filterTarget     = $(this).data('filter-target');
        var filterCategory   = $(this).data('filter-category');
        var filterAllButtons = $('[data-filter-target="'+ filterTarget +'"]');

        filterAllButtons.removeClass('active');
        $(this).addClass('active');

        $(filterTarget).slick('slickUnfilter');
        $(filterTarget).slick('slickFilter', function() {
            if (filterCategory == 'all' )
                return true;
            else
                return $(this).hasClass(filterCategory);
        });
    })

    $('.slider-about').slick({
        infinite: true,
        speed: 500,
        dots: true,
        arrows: false,
        // appendDots: $(this).siblings('.dots-container'),
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    $('.slider-partners').slick({
        infinite: true,
        speed: 500,
        dots: true,
        arrows: false,
        // appendDots: $(this).siblings('.dots-container'),
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.slider-subscription').slick({
        infinite: false,
        speed: 500,
        dots: true,
        // appendDots: $(this).siblings('.dots-container'),
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        variableWidth: false,
        swipe: false,
        dots: false,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    swipe: true,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,
                    focusOnSelect: true,
                    // initialSlide: 1,
                }
            }
        ],
    });



    $('.btn-burger').on('click', function() {
        if ($('body').hasClass('menu-active')) {
            $(this).find('.burger').removeClass('open');
            $('body').removeClass('menu-active');
        } else {
            $(this).find('.burger').addClass('open');
            $('body').addClass('menu-active');
        }
    })

    $('.nav-link').on('click', function() {
        if ($('body').hasClass('menu-active')) {
            $('.burger').removeClass('open');
            $('body').removeClass('menu-active');
        }
    })


});