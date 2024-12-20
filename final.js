$(document).ready(function () {
    // Owl Carousel Initialization
    $("#owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: false,
        responsive: {
            0: { items: 1 },
            768: { items: 3 },
            1024: { items: 5 }
        }
    });

    // Dropdown Menu Toggle
    const $discoverButton = $('#discoverButton');
    const $dropdownMenu = $('#dropdownMenu');

    $discoverButton.on('click', function () {
        $dropdownMenu.toggle();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $dropdownMenu.hide();
        }
    });

    // Login Popup
    const $popup3 = $('#popup3');

    $('#login-btn').on('click', function () {
        $popup3.css('display', 'flex');
    });

    $('#popup').on('click', function () {
        $popup3.css('display', 'none');
    });

    $("#cls-btn").click(function(){
        $popup3.css('display', 'none');
    })

    
});
