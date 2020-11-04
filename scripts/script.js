$('.sliderPromo').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('.promo-control-prev'),
    nextArrow: $('.promo-control-next'),
});

$('.directionsSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.directions-control-prev'),
    nextArrow: $('.directions-control-next'),
});


function setSlidesShow() {
    let site = document.querySelector('.mk-site');

    if(site.clientWidth > 768) {
        $('.reviews').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            prevArrow: $('.reviews-control-prev'),
            nextArrow: $('.reviews-control-next'),
        });
    } else {
        $('.reviews').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: $('.reviews-control-prev'),
            nextArrow: $('.reviews-control-next'),
        });
    }
}

setSlidesShow();


function setStateNav() {
    let nav = document.querySelector('.nav-mobile'),
        navMenu = document.querySelector('.nav-menu'),
        navOpen = false;
  
    nav.addEventListener('click', function() {
        if(!navOpen) {
            nav.classList.add('open');
            navMenu.classList.add('open');
            navOpen = true;
        } else {
            nav.classList.remove('open');
            navMenu.classList.remove('open');
            navOpen = false;
        }
    });
}

setStateNav()