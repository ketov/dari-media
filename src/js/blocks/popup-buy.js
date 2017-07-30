$(document).ready(function () {
    $('.buy').on('click', function () {
        $('#black-bg').stop(true, true).fadeIn(400);
        setTimeout(function () {
            $('.popup-buy').fadeIn(400);
        }, 480);
    });

    $('#close-popup-buy').on('click', function () {
        $('.popup-buy').stop(true, true).fadeOut(400);
        setTimeout(function () {
            $('#black-bg').fadeOut(400);
        }, 480);
    });
});