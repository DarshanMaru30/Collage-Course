$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<img src="../Images/slide-arrow-left.png" width="80px" class="nav-image-left">' , '<img src="../Images/slide-arrow-right.png" width="80px" class="nav-image-right">'],
        dots: false,
    });
});