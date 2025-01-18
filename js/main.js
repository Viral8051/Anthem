$(document).ready(function() {
    $('.ham-link').click(function(e) {
        e.preventDefault();
        $('.nav-inner').toggleClass('active');
    })

    $('.indexbannerSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.partnerslider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }

            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    var $slider1 = $('.partnerslider');
    var $progressBar1 = $('.progress1');
    var $progressBar1Label = $('.slider__label1');

    $slider1.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar1
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBar1Label.text(calc + '% completed');
    });

    var backButton = '<span class="navarrow arback"><</span>';
    var nextButton = '<span class="navarrow arnext">></span>'

    $('.feautreSlider').slick({
        infinite: false,
        slidesToShow: 3,
        centerMode: false,
        arrows: true,
        // fade: true,
        cssEase: 'linear',
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    $('.feautreSlider2').slick({
        infinite: false,
        slidesToShow: 3,
        centerMode: false,
        arrows: true,
        // fade: true,
        cssEase: 'linear',
        prevArrow: backButton,
        nextArrow: nextButton,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });
    var $slider = $('.feautreSlider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });


    // scrooll

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


});





jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {

        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

    $('.btn-close').click(function() {
        $(this).parents('.toasts').toggleClass('visually-hidden')
    })

    $('.ham-link i').click(function() {
        $('.ham-link').toggleClass('active')
        if ($('.ham-link').hasClass('active')) {
            $('.ham-link i:nth-child(2)').css('display', 'inline-block')
            $('.ham-link i:nth-child(1)').css('display', 'none')
        } else {
            $('.ham-link i:nth-child(1)').css('display', 'inline-block')
            $('.ham-link i:nth-child(2)').css('display', 'none')
        }
    })

    setTimeout(function() {
        $(".toast1").removeClass("visually-hidden");
    }, 2000);

    setTimeout(function() {
        $(".toast2").removeClass("visually-hidden");
    }, 5000);

    $('.acceptcookie').click(function() {
        $(this).parents('.toasts').toggleClass('visually-hidden')
    })


    $(".indexbannerSlider").on("beforeChange", function() {

        $('.hm-main-tring').removeClass('fadeInDown animated').hide();
        setTimeout(() => {
            $('.hm-main-tring').addClass('fadeInDown animated').show();

        }, 300);
        $('.hm-small-tring ').removeClass('fadeInUp animated').hide();
        setTimeout(() => {
            $('.hm-small-tring ').addClass('fadeInUp animated').show();

        }, 300);

    })
});